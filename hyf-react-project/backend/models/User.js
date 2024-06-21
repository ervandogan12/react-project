const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  // Add any additional fields as needed
});

// Create the model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;