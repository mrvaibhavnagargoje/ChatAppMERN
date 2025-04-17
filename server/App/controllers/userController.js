const userModel = require("../models/userModel")
const bcrypt = require("bcrypt")
const createTokenAndSaveCookie = require("../../jwt/generateToken")

const signup = async (req, res) => {
  try {
    const { name, email, password, confirmpassword } = req.body
    if (password !== confirmpassword) {
      return res.status(400).json({ error: "Passwords do not match" })
    }
    const user = await userModel.findOne({ email })
    if (user) {
      return res.status(400).json({ error: "User already registered" })
    }
    // Hashing the password
    const hashPassword = await bcrypt.hash(password, 10)
    const newUser = await new userModel({
      name,
      email,
      password: hashPassword,
    })
    await newUser.save()
    if (newUser) {
      createTokenAndSaveCookie(newUser._id, res)
      res.status(201).json({
        message: "User created successfully",
        user: {
          _id: newUser._id,
          fullname: newUser.name,
          email: newUser.email,
        },
      })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Internal server error" })
  }
}

const login = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await userModel.findOne({ email })
    const isMatch = await bcrypt.compare(password, user.password)
    if (!user || !isMatch) {
      return res.status(400).json({ error: "Invalid user credential" })
    }
    createTokenAndSaveCookie(user._id, res)
    res.status(201).json({
      message: "User logged in successfully",
      user: {
        _id: user._id,
        fullname: user.name,
        email: user.email,
      },
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Internal server error" })
  }
}

const logout = async (req, res) => {
  try {
    res.clearCookie("jwt")
    res.status(201).json({ message: "User logged out successfully" })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Internal server error" })
  }
}
module.exports = { signup, login, logout }
