import React from "react"
import { motion } from "framer-motion"
import { User, Mail, Lock, KeyRound, UserRoundCheck } from "lucide-react"
import { useForm } from "react-hook-form"
// import { ToastContainer, toast } from "react-toastify"
import toast from "react-hot-toast";
import axios from "axios"
import { useAuth } from "../context/AuthProvider"
import { Link } from "react-router-dom"
function Login() {
  const [authUser, setAuthUser] = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    }

    axios
      .post("/api/user/login", userInfo)
      .then((response) => {
        if (response.data) {
          toast.success("Login successful")

          //  alert(" Login successful");
        }
        localStorage.setItem("ChatApp", JSON.stringify(response.data))
        setAuthUser(response.data)
      })
      .catch((error) => {
        if (error.response) {
          toast.error("Error: " + error.response.data.error)
        }
      })
  }
  return (
    <>
      <div>
        {/* <ToastContainer /> */}
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 px-4">
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
              Login with your{" "}
              <span className="font-semibold text-indigo-500">Account</span>
            </h2>

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
              <KeyRound
                size={18}
                className="absolute left-3 top-3 text-gray-400"
              />
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

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              value="Login"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold transition duration-300 hover:bg-indigo-700 shadow-lg"
            >
              Login
            </motion.button>

            <p className=" text-sm text-gray-600">
              Don't have any account?{" "}
              <Link
                to={"/signup"}
                className="text-indigo-500 hover:underline cursor-pointer font-medium"
              >
                {" "}
                Signup
              </Link>
              {/* <span className="text-indigo-500 hover:underline cursor-pointer font-medium">
                SignUp
              </span> */}
            </p>
          </motion.form>
        </div>
      </div>
    </>
  )
}

export default Login
