const User = require('../models/User');

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username, password });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.json({ message: 'Login successful', role: user.role });
  } catch (err) {
    res.status(500).json({ error: 'Login failed' });
  }
};

const register = async (req, res) => {
  const { username, password, role } = req.body;

  try {
    const existing = await User.findOne({ username });
    if (existing) {
      return res.status(409).json({ message: 'User already exists' });
    }

    const newUser = new User({ username, password, role });
    await newUser.save();

    res.status(201).json({ message: 'Registered successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Registration failed' });
  }
};

module.exports = { login, register };
