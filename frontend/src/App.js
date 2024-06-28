import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Admin from './components/Admin';
import Housekeeper from './components/Housekeeper';
import Matron from './components/Matron';
import Student from './components/Student';
import Login from './components/Login';
import './App.css';

const ProtectedRoute = ({ component: Component, role, ...rest }) => {
  const { user } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) =>
        user && user.role === role ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <ProtectedRoute path="/admin" component={Admin} role="Admin" />
          <ProtectedRoute path="/housekeeper" component={Housekeeper} role="Housekeeper" />
          <ProtectedRoute path="/matron" component={Matron} role="Matron" />
          <ProtectedRoute path="/student" component={Student} role="Student" />
          <Redirect from="/" to="/login" />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
