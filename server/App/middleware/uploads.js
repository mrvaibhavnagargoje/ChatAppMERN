const fs = require("fs");
const path = require("path");

// Define upload path
const uploadPath = path.join(__dirname, "uploads");

// Check if 'uploads' folder exists, if not create it
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

// Multer configuration for file uploads
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Ensure 'uploads' folder exists
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const fileName = Date.now() + "-" + file.originalname;
    cb(null, fileName); // Save file with timestamp as its name
  },
});

const uploads = multer({ storage: storage });

module.exports = uploads;
