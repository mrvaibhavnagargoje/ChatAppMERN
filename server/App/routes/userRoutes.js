const express = require("express")
const { signup, login, logout, allusers } = require("../controllers/userController")
const { secureRoute } = require("../middleware/secureRoute")
const uploads = require("../middleware/uploads") // Import multer middleware

const userRouter = express.Router()

// Add 'upload.single("profileImage")' middleware for image handling
userRouter.post("/signup", uploads.single("profileImage"), signup)

userRouter.post("/login", login)
userRouter.post("/logout", logout)
userRouter.get("/allusers", secureRoute, allusers)

module.exports = userRouter
