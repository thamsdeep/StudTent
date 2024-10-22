
import React from 'react';
import { useHistory } from 'react-router-dom';

const Navbar = ({ student }) => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('token');
    history.push('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          {student?.collegeName || 'College Name'}
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Student ID: {student?.studentId}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Progress</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Credits</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Queries</a>
            </li>
            <li className="nav-item">
              <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
