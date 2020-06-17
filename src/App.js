import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Alert from "./components/layouts/Alert";
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './components/pages/About';
import User from './components/users/User';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';


const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );

};

export default App;

//showclear is an if else statement
//destructoring bc we call this.state a few times/want to male clean
//wrap all routes in a switch bc so that it shows one at a time
//... spread operator


  //componentDidMount is a lifecycle method...render is also a lifecycle method
  // async componentDidMount() {
  //   console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET)
  //   this.setState({ loading: true });

  // }

  //search github users
  //all these methods deal  w state

