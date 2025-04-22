require("dotenv").config(); // 👈 First line

const cookieParser = require("cookie-parser");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path"); // ✅ Add this

const userRouter = require("./App/routes/userRoutes");
const router = require("./App/routes/messageRouter");

const { app, server } = require("./SocketIO/server.js"); // 👈 Use app from server.js only

// ✅ Serve the uploads folder statically
app.use("/uploads", express.static(path.join(__dirname, "App/middleware/uploads")));
console.log(path.join(__dirname, "App/middleware/uploads"));
// Middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Environment
const PORT = process.env.PORT || 8020;
const URI = process.env.MONGODB_URI;

// Routes
app.use("/api/user", userRouter);
app.use("/api/message", router);

// MongoDB Connection
mongoose
  .connect(URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
  });
  

// Start server
server.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
