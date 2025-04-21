const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  confirmpassword: {
    type: String
  },
  profileImage: {
    type: String, // Store the image URL or path
    default: "" // Optional: Set a default value if no image is uploaded
  }
}, {
  timestamps: true // createdAt & updatedAt
});

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;



// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const userSchema = new Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     lowercase:true
//   },
//   password: {
//     type: String,
//     required: true
//   },
//   confirmpassword: {
//     type: String
//   }
// },{
//     timestamps:true //createdAt & UpdatedAT
// });

// const userModel = mongoose.model("User", userSchema);
// module.exports = userModel;
