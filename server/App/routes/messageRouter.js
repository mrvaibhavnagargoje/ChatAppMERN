const express = require("express")
const { secureRoute } = require("../middleware/secureRoute")
const { sendMessage, getMessage } = require("../controllers/messageController")

const router = express.Router()

router.post("/send/:id", secureRoute, sendMessage)
router.get("/get/:id", secureRoute, getMessage)

module.exports = router
