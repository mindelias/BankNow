import React from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Switch, // for server rendering
  Route,
  
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
 
import HomePage from "./components/Homepage";
import PrivateRoute from "./utils/PrivateRoute";
// import logo from './logo.svg';
import "./App.css";
import store from "./components/redux/store";
import Signup from "./components/authRoute/SignUp";
import SignIn from "./components/authRoute/SignIn";
import Dashboard from "./components/usetsRoute/Dashboard";
import CreateAccount from "./components/usetsRoute/CreateAccount";
import setAuthToken from "./utils/setAuthToken";
import AllDetails from "./components/adminRoute/AllDetails";
import Navigation from "./components/adminRoute/navigation";
import About from "./components/About";

if (localStorage.getItem("Authorization")) {
  setAuthToken(localStorage.getItem("Authorization")!);
}
function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <Router>
          {/* <Navbar /> */}
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/register">
              <Signup />
            </Route>
            <Route exact path="/login">
              <SignIn />
            </Route>
            <Route exact path="/about">
              <About/>
            </Route>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/alldetails" component={AllDetails} />
            <PrivateRoute exact path="/navigation" component={Navigation} />

            <PrivateRoute exact path="/createacc" component={CreateAccount} />
          </Switch>
        </Router>
      </React.Fragment>
    </Provider>
  );
}

export default App;
