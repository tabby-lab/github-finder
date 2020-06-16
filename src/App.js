import React, { useState, Fragment } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Alert from "./components/layouts/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './components/pages/About';
import User from './components/users/User';
import GithubState from './context/github/GithubState';



const App = () => { 
  const [alert, setAlert] = useState(null);


  //set Alert
  const showAlert = (msg, type) => {
    setAlert({ msg, type });

    setTimeout(() => setAlert (null), 5000);
  };

  
 

    return (
      <GithubState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                    <Search
                      setAlert={showAlert}
                    />
                    <Users />
                  </Fragment>
                )}
              />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login'component= {User}/>
            </Switch>
          </div>
        </div>
      </Router>
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
  
