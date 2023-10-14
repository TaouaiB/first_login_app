import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../JS/Action/Action';
import { Link } from 'react-router-dom';

const Register = () => {
  const [newUser, setNewUser]=useState({})
  const dispatch=useDispatch()

  const handleUser=(e)=>
  { 
    setNewUser({...newUser,[e.target.name]:e.target.value})
  
  }
console.log(newUser)
  return (
    <div>
<form>
<label>USER NAME</label>
<input type="text" name="username" onChange={(e)=>handleUser(e)}></input>
<label>Email</label>
<input type="email" name="email" onChange={(e)=>handleUser(e)}></input>
<label>Password</label>
<input type="password" name="password" onChange={(e)=>handleUser(e)}></input>
<label>phone</label>
<input type="number" name="phone" onChange={(e)=>handleUser(e)}></input>
  <Link to="/Profile"><button onClick={() => dispatch(register(newUser))}>Connect</button></Link>
</form>

    </div>
  )
}

export default Register; 