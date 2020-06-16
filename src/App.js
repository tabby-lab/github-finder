import React, { useState, Fragment } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Users from "./components/users/Users";
import axios from "axios";
import Search from "./components/users/Search";
import Alert from "./components/layouts/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './components/pages/About';
import User from './components/users/User';
import GithubState from './context/github/GithubState';


//
const App = () => { 
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);


  //replacing these class state com. into func
  // state = {
  //   users: [],
  //   user: {},
  //   loading: false,
  //   alert: null,
  //   repos: [],
  // };

  //componentDidMount is a lifecycle method...render is also a lifecycle method
  // async componentDidMount() {
  //   console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET)
  //   this.setState({ loading: true });

  // }

  //search github users
  //all these methods deal  w state
  

  //get single github user
  const getUser = async username => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
  setUser(res.data);
  setLoading(false);
  }

  //Get users repos
 const  getUserRepos = async username => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
   setRepos(res.data);
   setLoading(false);
  }



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
              <Route 
              exact path='/user/:login' 
              render= {props=>(
                <User 
                { ...props } 
                getUser={getUser}
                getUserRepos={getUserRepos}
                 user= {user}
                 repos={repos}
                 />
              )}/>
            </Switch>
          </div>
        </div>
      </Router>
      </GithubState>
    );
  
}

export default App;

//showclear is an if else statement
//destructoring bc we call this.state a few times/want to male clean
//wrap all routes in a switch bc so that it shows one at a time
//... spread operator