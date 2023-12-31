const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const userSchema = new Schema({
  name: String,
  email: String,
  role: String,
  password: String,
  isDeleted: {
    type: Boolean,
    default: false
  },
  isApprove: {
    type: Boolean,
    default: false
  }
},
{
  timestamps: true
});
 
module.exports = mongoose.model("User", userSchema);