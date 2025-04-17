import React from "react"
import { motion } from "framer-motion"
import { User, Mail, Lock, KeyRound, UserRoundCheck } from "lucide-react"
import { useForm } from "react-hook-form"
import axios from "axios"
// import { ToastContainer, toast } from 'react-toastify';
import toast from "react-hot-toast"
import { useAuth } from "../context/AuthProvider"
import { Link, useNavigate } from "react-router-dom"

function Signup() {
  const navigate = useNavigate()
  const [authUser, setAuthUser] = useAuth()
  console.log(authUser)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const password = watch("password", "")
  const confirmpassword = watch("confirmpassword", "")

  const validatePasswordMatch = (value) => {
    return value === password || "Passwords do not match"
  }

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
      confirmpassword: data.confirmpassword,
    }

    // console.log(userInfo);
    await axios
      .post("http://localhost:8000/user/signup", userInfo)
      .then((response) => {
        // console.log(response);
        if (response.data) {
          toast.success("Signup successful")
          navigate("/login") // ✅ Login page कडे redirect करा
        }
        // localStorage.setItem("ChatApp", JSON.stringify(response.data));
        // setAuthUser(response.data);
      })
      .catch((error) => {
        if (error.response) {
          toast.error("Error: " + error.response.data.error)
        }
      })
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 px-4">
      {/* <ToastContainer/> */}
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-2xl rounded-2xl px-10 py-8 w-full max-w-md space-y-6"
      >
        <h1 className="text-4xl font-bold text-indigo-600 tracking-wide">
          Messenger
        </h1>
        <h2 className="text-lg text-gray-700">
          Create a new{" "}
          <span className="font-semibold text-indigo-500">Account</span>
        </h2>

        {/* Fullname */}
        <div className="relative">
          {/* <User  /> */}
          <UserRoundCheck
            size={18}
            className="absolute left-3 top-3 text-gray-400"
          />
          <input
            type="text"
            placeholder="Full Name"
            className="pl-10 pr-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-200"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-red-500 text-sm font-semibold">
              This field is required
            </span>
          )}
        </div>

        {/* Email */}
        <div className="relative">
          <Mail size={18} className="absolute left-3 top-3 text-gray-400" />
          <input
            type="email"
            placeholder="Email"
            className="pl-10 pr-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-200"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-500 text-sm font-semibold">
              This field is required
            </span>
          )}
        </div>

        {/* Password */}
        <div className="relative">
          {/* <Lock  /> */}
          <KeyRound size={18} className="absolute left-3 top-3 text-gray-400" />
          <input
            type="password"
            placeholder="Password"
            className="pl-10 pr-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-200"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="text-red-500 text-sm font-semibold">
              This field is required
            </span>
          )}
        </div>

        {/* Confirm Password */}
        <div className="relative">
          {/* <Lock className="absolute left-3 top-3 text-gray-400" /> */}
          <KeyRound size={18} className="absolute left-3 top-3 text-gray-400" />
          <input
            type="password"
            placeholder="Confirm Password"
            className="pl-10 pr-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-200"
            {...register("confirmpassword", {
              required: true,
              validate: validatePasswordMatch,
            })}
          />
          {errors.confirmpassword && (
            <span className="text-red-500 text-sm font-semibold">
              {errors.confirmpassword.message}
            </span>
          )}
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          value="Signup"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold transition duration-300 hover:bg-indigo-700 shadow-lg"
        >
          Sign Up
        </motion.button>

        <p className=" text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to={"/login"}
            className="text-indigo-500 hover:underline cursor-pointer font-medium"
          >
            {" "}
            Login
          </Link>
          {/* <span className="text-indigo-500 hover:underline cursor-pointer font-medium">
            Login
          </span> */}
        </p>
      </motion.form>
    </div>
  )
}

export default Signup
