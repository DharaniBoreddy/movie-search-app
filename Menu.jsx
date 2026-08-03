import React from 'react'
import { Link} from 'react-router-dom'

const menu = () => {
    
  return (
    <div style={{display:"flex",justifyContent:"space-between",backgroundColor:"#111827"}}>
    <img style={{borderRadius:"50px",height:"80px",width:"90px"}} src="https://th.bing.com/th/id/OIP.7iOuU2VLLoyZgPmZv9A5fwHaGp?w=163&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3" alt="" width="60px"/>
    <button style={{background:"black",width:"90px",color:"white"}}><Link to='/'  style={{color: "white" ,textDecoration:"None"}}>Home</Link></button>
    <button style={{background:"black",width:"90px",color:"white"}}><Link to='/tvshow'  style={{color: "white" ,textDecoration:"None"}}>TvShow</Link></button>
    <button style={{background:"black",width:"90px",color:"white"}}><Link to='/moives' style={{color: "white",textDecoration:"None" }}>Moives</Link></button>
    <button style={{background:"black",width:"90px",color:"white"}}><Link to='/sport' style={{color: "white" ,textDecoration:"None"}}>Sport</Link></button>
    <button style={{background:"black",width:"90px",color:"white"}}><Link to='/login' style={{color: "white",textDecoration:"None" }}>Login</Link></button>
    <button style={{background:"black",width:"90px",color:"white"}}><Link to='/sign' style={{color: "white" ,textDecoration:"None"}}>Sign</Link></button>

      
    </div>
  )
}

export default menu
