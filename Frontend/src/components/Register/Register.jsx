import React,{useState}from 'react'
import {useNavigate} from 'react-router-dom';
import axios from "axios"
import "./style.css"

const Register = () => {

  const navigate=useNavigate();
  

  const[user,setUser]=useState({
    name:"",
    password:"",
    email:""
  });

  const{name,password,email}=user;

  const handleChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value});
  }

  const registerSubmit=async (e)=>{
    e.preventDefault();

    try {
      var data = await axios.post(
        `/register`,
        user,
        );
        console.log(data)
        if(data.data.err) 
        alert(data.data.err)
        else{
          alert("Register successfully");
          
          navigate('/login');
          
        }
        

    } catch(e) {
      console.log(e);
    }


  }

  return (
      <>
      <div className="centered">
      <h1>Signup here </h1>

<form onSubmit={registerSubmit}>
  <div>
  <input 
    type="text" 
    name="name" 
    required value={name} 
    onChange={handleChange}
    placeholder="name"
    id="txtbox"/>
  </div>
  <div>
  <input 
    type="email" 
    name="email" 
    required value={email} 
    onChange={handleChange}
    placeholder="email"
    id="txtbox"/>
  </div>
  <div>
  <input 
    type="password" 
    name="password" 
    required value={password} 
    onChange={handleChange}
    placeholder="password"
    id="txtbox"/>
  </div>
  <button type="submit" id="txtbox">submit</button>
</form>
      </div>
      </>
  )
}

export default Register;