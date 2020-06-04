import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search'

class App extends Component {
state= {
  users: [],
  loading: false,
}

//componentDidMount is a lifecycle method...render is also a lifecycle method
// async componentDidMount() {
//   console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET)
//   this.setState({ loading: true });

  
// }

//search github users
searchUsers = async text => {
  this.setState({ loading: true });
  const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
 
  this.setState({ users: res.data.items, loading: false });
}

//clear users from state
clearUsers= () => this.setState({ users:[], loading:false});


  render() {
    return (
      <div className='App'>
   <Navbar />
   <div className='container'>
     <Search 
     searchUsers={ this.searchUsers } 
     clearUsers={this.clearUsers} 
     showClear={this.state.users.length > 0 ? true : false}/>
   <Users loading={this.state.loading} users={this.state.users} />
      </div>
      </div>
      
    );
  }
}
 

export default App;

//showclear is an if else statement
