// require("dotenv").config(); // 👈 First line

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./App/routes/userRoutes");

const app = express();
app.use(express.json());
app.use(cors());

// const PORT = process.env.PORT || 8020;
// const URI = process.env.MONGODB_URI;

// console.log("MONGODB_URI:", URI); // ✅ Debug

app.use("/user", userRouter);

mongoose
  .connect("mongodb+srv://vaibhavnagargoje82:w0ys2FtG1SR9Irua@cluster0.td7d4al.mongodb.net/ChatApp-using-MERN?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

app.listen(8000, () => {
  console.log(`Server is running on port`);
});
