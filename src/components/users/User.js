import React, { Component, Fragment } from "react";
import Spinner from '../layouts/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }
static propTypes= {
    loading:PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    getUser:PropTypes.func.isRequired,
}

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable
    } = this.props.user

  

    

    return ( 
    <Fragment>
      <Link to='/' className='btn btn-light'>
        Back to search
      </Link>
      Hireable: {' '}
{hireable ? <div className="badge badge-success">Hireable</div> : <div className="badge badge-danger">Not hireable</div>}
    </Fragment>);
  }
}

export default User;

//rce
//Hireable: {' '}
//{hireable ? (
  //<i className="fas fa-check success" /> 
//) : (
//<i className="fas fa-times-circle text-danger" />
//)}