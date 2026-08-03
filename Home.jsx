import React, { useEffect, useState } from 'react'
import Serachbar from './Serachbar'
import Menu from '../homepage/Menu'
import './index.css'
const Home = () => {
   let [state,setstate]=useState([])
  let [search,setsearch]=useState("")
       async function moives(){
        let data=await fetch('http://localhost:3000/movies')
        let data1=await data.json()
        setstate(data1)
        console.log(data1)
      }
      useEffect(()=>{
        moives()
      },[])
      const filters=state.filter((m)=>m.title.toLowerCase().includes(search.toLowerCase()))
  return (
    <div style={{backgroundColor:"gray",marginTop:"-8px",marginLeft:"-9px"}}>
      <Menu/>
      <Serachbar search={search} setsearch={setsearch}/>
      <div className="v">
        <div className="s">
          <img src="https://th.bing.com/th/id/OIP.am53yoHlJK_oG5h5bZwYSwHaNK?w=187&h=333&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3" alt="" />

        
        
          <img src="https://th.bing.com/th/id/OIP.qzzjWxqR-Stv1SXkyO41vQHaJQ?w=186&h=233&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3" alt="" />
      
        
          <img src="https://th.bing.com/th/id/OIP.UY5_J5XUF90zc1u1VeRBRAHaLH?w=186&h=279&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3" alt="" />
      
    
          <img src="https://th.bing.com/th/id/OIP.RYkmZc52fmtPsqc8-jZXCQHaLH?w=186&h=279&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3" alt="" />
      
    
          <img src="https://th.bing.com/th/id/OIP.lBvK-uYScHoc36PFift_iAHaL2?w=186&h=298&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3" alt="" />
      </div>
      </div>
      <div  style={{display:'grid',gridTemplateColumns:'350px 350px 350px 350px',gridTemplateRows:'500px 500px 500px 500px',backgroundColor:'gray',marginLeft:'-10px',marginTop:'100px',marginRight:'-10px'}}>
      {filters.length>0?(filters.map((v)=>(
      <div key={v.id} style={{marginLeft:'30px'}}>
          
        <img style={{borderRadius:"20px"}}src={v.poster} alt={v.title+"poster"} width="300" height='400' />
        <h2 style={{color:"whitesmoke"}}>{v.title}</h2>
      </div>
      ))):(<h2>No Moives Found</h2>)}
      {/* <h2>{v.title}</h2> */}
      {/* <h2>this is moives</h2> */}
    </div>
    </div>
    
  )
}

export default Home
