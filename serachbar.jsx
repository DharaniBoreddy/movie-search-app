import React, { useState } from 'react'

const Serachbar = ({search,setsearch}) => {
    
    
  return (
    <div style={{display:"flex",justifyContent:"center"}}>
      <input style={{height:"30px",width:"600px"}}type="text" placeholder='search moives' value={search} onChange={(e)=>setsearch(e.target.value)}/>
     
    </div>
  )
}

export default Serachbar;
