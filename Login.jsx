import React, { useContext } from 'react'
import {ContextApi} from '../Context/Contextapi'
import { Link, useNavigate } from 'react-router-dom'
import Menu from '../homepage/menu'
const Login = () => {
    let navigate = useNavigate();
    let {state,setstate}=useContext(ContextApi)
    const handleLogin = () => {

    localStorage.setItem("token", "abc123");

    navigate("/");
  }
    function handlechange(v){
        setstate((e)=>({...e,[v.target.name]:v.target.value
        }))
    }
    async function sumbits(e){
        e.preventDefault();
        await fetch("http://localhost:3001/user",{
            method:"POST",headers:{
                "Content-Type":"application/json"
            },body:JSON.stringify(state)
        });
        console.log("saved")
    

    }
  return (
    <div style={{backgroundColor:"gray",marginRight:"-10px",marginLeft:"-10px"}}>
        <div style={{marginTop:"-10px",marginBottom:"17px"}}>
             <Menu/>
        </div>
       
        <form style={{display:"grid",justifyContent:"center"}}onSubmit={sumbits}>
            <label htmlFor="">First Name :</label>
            <input style={{width:"400px",height:"30px",border:'2px solid black',borderRadius:"10px"}} type="text" name='fname' value={state.fname} onChange={handlechange} placeholder='Enter the your First name'/><br />
            <label htmlFor="">Last Name :</label>
            <input style={{width:"400px",height:"30px",border:'2px solid black',borderRadius:"10px"}}type="text" name='lname' value={state.lname} onChange={handlechange} placeholder='Enter the your Last name'/><br />
            <label htmlFor="">age :</label>
            <input style={{width:"400px",height:"30px",border:'2px solid black',borderRadius:"10px"}}type="number" name='age' value={state.age} onChange={handlechange} placeholder='Enter the your  Age'/><br />
             <label htmlFor="">Email :</label>
             
            <input style={{width:"400px",height:"30px",border:'2px solid black',borderRadius:"10px"}} type="text" name='email' value={state.email} onChange={handlechange} placeholder='Enter the your Email'/><br />
            <label htmlFor="">Gender :</label>
            <select name='gender' value={state.gender} onChange={handlechange}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>

            </select><br />
             <label htmlFor="">Password :</label>
            <input style={{width:"400px",height:"30px",border:'2px solid black',borderRadius:"10px"}} type="password" name='password' value={state.password} onChange={handlechange} placeholder='Enter the your Password'/><br />
             <label htmlFor="">Enter Again Password :</label>
            <input style={{width:"400px",height:"30px",border:'2px solid black',borderRadius:"10px"}} type="npassword" name='npassword' value={state.npassword} onChange={handlechange} placeholder='Enter the Password again'/><br />
            <button style={{width:"100px",height:"30px",border:'2px solid black',borderRadius:"10px",marginLeft:"140px"}} onClick={handleLogin}>Register</button>
            <h2 style={{marginLeft:"180px"}}>or</h2>
        </form>
        <div style={{display:"grid",justifyContent:"center"}}>
            <p>if you are not register.please register</p>
        <button style={{width:"100px",height:"30px",border:'2px solid black', marginLeft:"50px",textDecoration:"None",borderRadius:"10px"}}><Link to='/sign'>sign</Link></button>
        </div>
        
    </div>
  )
}

export default Login
