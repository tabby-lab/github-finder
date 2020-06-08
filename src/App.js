import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';
import Alert from './components/layouts/Alert';

class App extends Component {
state= {
  users: [],
  loading: false,
  alert: null
}

//componentDidMount is a lifecycle method...render is also a lifecycle method
// async componentDidMount() {
//   console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET)
//   this.setState({ loading: true });

  
// }

//search github users
//all these methods deal  w state
searchUsers = async text => {
  this.setState({ loading: true });
  const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
 
  this.setState({ users: res.data.items, loading: false });
}

//clear users from state
clearUsers= () => this.setState({ users:[], loading:false});

//set Alert
setAlert = (msg, type) => {
  this.setState({alert:{msg ,type} });

  setTimeout(() => this.setState({ alert:null }), 5000)
};



  render() {
const { users, loading } = this.state;

    return (
      <div className='App'>
   <Navbar />
   <div className='container'>
     <Alert alert={this.state.alert}/>
     <Search 
     searchUsers={ this.searchUsers } 
     clearUsers={this.clearUsers} 
     showClear={users.length > 0 ? true : false}
     setAlert={this.setAlert}
     />
   <Users loading={loading} users={users} />
      </div>
      </div>
      
    );
  }
}
 

export default App;

//showclear is an if else statement
//destructoring bc we call this.state a few times/want to male clean
