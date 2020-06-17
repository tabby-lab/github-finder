import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'


//Bring in useState hook and define it using const and destructor
//[create state, method of the state(usually "set" rhen name of state)]
const Search = () => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    const [text, setText] = useState('');




    const onChange = e => setText(e.target.value);

    const onSubmit = e => {
        e.preventDefault();
        if (text === '') {
            alertContext.setAlert('please enter something', 'light');
        } else {
            githubContext.searchUsers(text);
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
            {githubContext.users.length > 0 && <button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>Clear</button>}



        </div>
    )

}


export default Search

//when there is a form in react usually you need to attach state to the input
//destructoring showuser and clearuser
//add method set alert

//when adding a func in a func, use const
//clean up: get rid of this.states