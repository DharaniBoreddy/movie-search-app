import React, { createContext, useReducer, useState } from 'react'
export let ContextApi=createContext()
let Contextapi = (props) => {
    let Provider=ContextApi
    // let [tasks,dispatch]=useReducer(useReducer,intialvalue)
    let [state,setstate]=useState({fname:"",lname:"",age:0,gender:'',email:"",password:"",npassword:""})
    return (
    <div>
        <Provider value={{state,setstate}}>
            {props.children}
        </Provider>
      
    </div>
  )
}

export default Contextapi
