import React, { useState } from 'react';
import PropTypes from 'prop-types';

//Bring in useState hook and define it using const and destructor
//[create state, method of the state(usually "set" rhen name of state)]
const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {
   const [text,setText] = useState('');




    const onChange = e => setText(e.target.value);

    const onSubmit = e => {
        e.preventDefault();
        if (text === '') {
            setAlert('please enter something', 'light');
        } else {
            searchUsers(text);
            setText('');
        }

    };





    return (
        <div>
            <form onSubmit={onSubmit} className="form">

                <input
                    type="text"
                    name="text"
                    placeholder="Search Users..."
                    value={text}
                    onChange={onChange} />
                <input type="submit" value="Search" className="btn btn-dark btn-block" />

            </form>
            {showClear && <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>}



        </div>
    )

}
Search.propTypes = {
  
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired,
    
};

export default Search

//when there is a form in react usually you need to attach state to the input
//destructoring showuser and clearuser
//add method set alert

//when adding a func in a func, use const
//clean up: get rid of this.states