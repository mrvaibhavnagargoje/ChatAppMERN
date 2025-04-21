






const express = require("express")
const http = require("http")
const { Server } = require("socket.io")

const app = express()
const server = http.createServer(app)

// Store all connected users: userId -> socket.id
const users = {}

// Function to get a user's socket ID by userId //// realtime message code goes here
const getReceiverSocketId = (receiverId) => {
  return users[receiverId]
}

const io = new Server(server, {
  cors: {
    origin: "http://localhost:4001",
    methods: ["GET", "POST"],
  },
})

// used to listen events on server side.
io.on("connection", (socket) => {
  console.log("a user connected", socket.id)

  const userId = socket.handshake.query.userId

  if (userId) {
    users[userId] = socket.id
    console.log(`✅ Registered user: ${userId} -> ${socket.id}`)
  }

  // used to send the events to all connected users
  io.emit("getOnlineUsers", Object.keys(users))

  // used to listen client side events emitted by server side (server & client)
  // Handle user disconnect
  socket.on("disconnect", () => {
    console.log("❌ User disconnected:", socket.id)
    if (userId) {
      delete users[userId]
      console.log(`🗑️ Removed user: ${userId}`)
    }
    io.emit("getOnlineUsers", Object.keys(users))
  })
})
module.exports = { getReceiverSocketId, app, io, server }
