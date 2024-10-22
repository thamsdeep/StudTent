const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  studentId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  subjects: [
    {
      name: String,
      attendance: Number
    }
  ]
});

module.exports = mongoose.model('Student', studentSchema);

const express = require('express');
const auth = require('./middleware/authMiddleware');
const Student = require('./models/Student');
const router = express.Router();

// Get student dashboard data
router.get('/dashboard', auth, async (req, res) => {
  try {
    const student = await Student.findById(req.student).select('-password');
    if (!student) return res.status(404).json({ message: 'Student not found' });

    res.json(student);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
