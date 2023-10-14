import { useState } from 'react';
import React from 'react';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { login } from '../JS/Action/Action';

const Login = () => {
  const [user,setUser]=useState({})
  const dispatch=useDispatch()
const handleUser=(e)=>
{ 
 setUser({...user,[e.target.name]:e.target.value})

}

console.log(user)
  return (
    <div>
<form>
<label>USER NAME</label>
<input type="text" name="username" onChange={(e)=>handleUser(e)}></input>
<label>Password</label>
<input type="password" name="password" onChange={(e)=>handleUser(e)}></input>
<Link to="/Profile"><button onClick={() => dispatch(login(user))}>Connect</button></Link>

</form>

    </div>
  )
}

export default Login