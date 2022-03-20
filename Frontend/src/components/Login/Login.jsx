import React,{useState}from 'react'
import axios from "axios"
import "./style.css";

const Login = () => {

  const[user,setUser]=useState({
    email:"",
    password:""
  });

  const{email,password}=user;

  const handleChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value});
  }

  const loginSubmit=async (e)=>{
    e.preventDefault();

    axios.post(
      `/login`,
      user,
      )
      .then(res => {
        // console.log(data.status);
        console.log(res);
  
  if(!res){
    alert("Invalid credentials");
  }
      alert("login successfully");
  
  
      }).catch(err=>{
        console.log(err);
        alert("Invalid credentials")
      })
      
    }
  return (
     
      <><div className="centered">
      <h1>Login</h1>

<form onSubmit={loginSubmit}>

<div>
<input 
    type="email" 
    name="email" 
    required value={email} 
    onChange={handleChange}
    placeholder="email"
    id="txtbox"/>
    <br/>
</div>
<div>
<input 
    type="password" 
    name="password" 
    required value={password} 
    onChange={handleChange}
    placeholder="password"
    id="txtbox"/>
<br/>
</div>
<button type="submit" id="txtbox">submit</button>
</form>
        </div>
      </>
  )
}

export default Login;