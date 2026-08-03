import React, { useEffect, useState } from 'react'
import Serachbar from './Serachbar'
import Menu from '../homepage/menu'

const Moives = () => {
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
      <div>
        <h2></h2>
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

export default Moives
