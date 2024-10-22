import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStudentData = async () => {
      const token = localStorage.getItem('token');
      try {
        const res = await axios.get('/api/student/dashboard', {
          headers: { 'x-auth-token': token }
        });
        setStudent(res.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch student data');
        setLoading(false);
      }
    };
    fetchStudentData();
  }, []);

  if (loading) {
    return <div className="loader">Loading...</div>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div className="container">
      <h2>Welcome, {student?.name}</h2>
      <h3>Subjects and Attendance</h3>
      <ul className="list-group">
        {student?.subjects.map((subject, index) => (
          <li key={index} className="list-group-item">
            {subject.name} - Attendance: {subject.attendance}%
          </li>
        ))}
      </ul>
    </div>
  );
};
if (loading) {
    return <div className="loader"></div>;
  }

export default Dashboard;

  