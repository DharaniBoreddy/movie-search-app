import React, {useContext, useState } from "react";
import { ContextApi } from "../Context/Contextapi";
import { useNavigate } from "react-router-dom";
import Menu from '../homepage/menu'

const Sign = () => {
 
  let { state} = useContext(ContextApi);
  let [login,setlogin]=useState({email:"",password:""})
  const navigate = useNavigate();
  function handlechange(e){
    setlogin({
      ...login,[e.target.name]:e.target.value
    })
  }
  function handleLogin() {
  if (state.email == login.email && state.password == login.password) {
    localStorage.setItem("token", "abc123");
    navigate("/home");
  } else {
    alert("Invalid email or password");
  }
}

  return (
     <div style={{backgroundColor:"gray",marginRight:"-10px",marginLeft:"-10px"}}>
        <div style={{marginTop:"-10px",marginBottom:"150px"}}>
             <Menu/>
        </div>

        <div style={{display:"grid",justifyContent:"center"}}>
          <label htmlFor="">Email</label>
          <input style={{width:"400px",height:"30px",border:'2px solid black',borderRadius:"10px"}}type="email" name="email" placeholder="Enter the email" value={login.email} onChange={handlechange}/>
          <label htmlFor="">Password</label>
          <input style={{width:"400px",height:"30px",border:'2px solid black',borderRadius:"10px"}} type="password" name="password" placeholder="Enter the email" value={login.password} onChange={handlechange}/>
          <button style={{width:"100px",height:"30px",border:'2px solid black',marginBottom:"550px",borderRadius:"10px",marginLeft:"140px"}} onClick={handleLogin}>signin</button>
        </div>
      
    </div>
  );
};

export default Sign;
