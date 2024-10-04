
import React, { useState,useEffect } from 'react'
// import axios from 'axios';
import { Link } from 'react-router-dom';
const Homepage = () => {
    
    let [state,setState]=useState([]);
    // let navigate=useNavigate();
    useEffect(()=>{
        let api=fetch("http://localhost:4040/user");
        api.then(x=>x.json()).then(val=>{
            setState(val)
        })
        console.log(state);
        
        
    },[state])
    // function delets(id){
    //     axios.delete("http://localhost:4040/users/"+id).then(()=>{
    //         navigate("/")
          
    //     })
    //  }
  return (
    <div>
        <center>
        <div id="parent">
        <h1 id="h11">6 birthdays today</h1>
        {state.map(y=>{
            return(
                <>
                  
                <div id="card">
                  
                <img src={y.image} alt="" />
                <span id="name">{y.name}</span>
                <br />
                <span id="age">{y.age}</span>
                </div>
               
                </>
            )
           
             
        })}
        <Link to="/empty">
         <button id="clear"  >clear all</button>
         </Link>
        
     </div>
     </center>
    </div>
  )
}

export default Homepage
