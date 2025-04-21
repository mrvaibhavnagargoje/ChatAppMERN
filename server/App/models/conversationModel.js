const mongoose = require("mongoose")

const userModel = require("./userModel")
const Message = require("./messageModel")

const conversationSchema = new mongoose.Schema(
  {
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: userModel,
      },
    ],
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: Message,
        default: [],
      },
    ],
  },
  { timestamps: true }
)

const Conversation = mongoose.model("conversation", conversationSchema)
module.exports = Conversation
