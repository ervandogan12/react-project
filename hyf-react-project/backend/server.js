const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./models/User.js'); // Assume you've defined a User model
require('dotenv').config(); // Add this line to use dotenv for environment variables
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Update the mongoose.connect line with your MONGODB_URL from the .env file
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const user = await User.create({ email, password: hashedPassword });
    res.status(201).send('User created successfully');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).send('Invalid credentials');
  }
  // Ensure your secret key is also stored securely, not hardcoded
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
  res.json({ token });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));