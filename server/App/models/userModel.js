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
    lowercase:true
  },
  password: {
    type: String,
    required: true
  },
  confirmpassword: {
    type: String
  }
},{
    timestamps:true //createdAt & UpdatedAT
});

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
