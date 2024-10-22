import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';

const App = () => {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <Router>
      {isAuthenticated && <Navbar />} {/* Show Navbar only if authenticated */}
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Redirect to="/login" />
      </Switch>
    </Router>
  );
};

// Private route to protect the dashboard
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem('token') ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default App;
