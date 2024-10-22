const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Student = require('./models/Student'); // assuming in models folder
const router = express.Router();

// Student Login
const { CustomError } = require('server\errorHandler.js');

router.post('/login', async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const student = await Student.findOne({ email });
    if (!student) throw new CustomError('Student not found', 404);

    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) throw new CustomError('Invalid credentials', 400);

    const token = jwt.sign({ id: student._id }, 'secretKey');
    res.json({ token });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
