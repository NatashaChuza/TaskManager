import React, { createContext, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import { Provider } from "react-redux";
import store from "./store";

import "./components/LandingPage";
import LandingPage from "./components/LandingPage";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/Dashboard/Dashboard";
import Task from "./components/Dashboard/Task";

import "./App.css";
import TaskThemeProvider from "./Themes/ThemeProvider";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "/";
  }
}

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <TaskThemeProvider>
          <Router>
            <div className="App">
              <Route exact path="/" component={LandingPage} />
              {/* <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} /> */}
              <Route exact path="/tasks/:id" component={Task} />
              <Switch>
                <PrivateRoute path="/dashboard" component={Dashboard} />
              </Switch>
            </div>
          </Router>
        </TaskThemeProvider>
      </Provider>
    );
  }
}

export default App;
