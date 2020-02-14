import React, { useState,useContext} from 'react'
import PropTypes from 'prop-types';
import {GithubContext} from '../../context/github/GithubState'
import {AlertContext} from '../../context/alert/AlertState'



const Search = () => {

const githubContext = useContext(GithubContext)
const alertContext = useContext(AlertContext)

const {users,clearUsers} = githubContext
const {setAlert} = alertContext


const [text,setText] = useState('')
 
 const onChange =(e)=>setText(e.target.value)
  
 const onSubmit = (e)=>{
    e.preventDefault()
    if(text === ''){setAlert('Please Enter something','light'); return}

    githubContext.searchUsers(text)
    
    // clear the form
    setText('')
  }

    return (
      <div>
        <form  className="form" onSubmit={onSubmit}>
          <input type="text" 
                 name="text" 
                 placeholder="Search Users..." 
                 value ={text}
                 onChange= {onChange}
                 />

          <input type="submit" 
                 value="Search" 
                 className="btn btn-dark btn-block"
                 />
        </form>
        {users.length>0 && (<button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>)}
        
      </div>
    )
}



Search.propTypes ={
  setAlert:PropTypes.func,
}


export default Search
