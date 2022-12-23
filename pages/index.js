import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default  function Home(){
  let [data,setData] =useState({
    name:"",
    password:""
  })
  let {name,password} = data;
  // console.log(name,password);

  const dat = (e)=>{
      setData({
        ...data,
        [e.target.name]:e.target.value
      })
  }
  // console.log("entered");
  const syncData = async()=>{
    const  todo  = await fetch('http://localhost:4000/login',{
      method: 'post',
      headers: { 'Content-Type': 'application/json'},
     body:JSON.stringify(data)
     
    }).then((resp) => resp.json());
    console.log(todo);
    // console.log(data);
    resetData()
    // console.log(data);


 }
  
 let resetData = ()=>{
  setData({
    name:"",
    password:""
})  
 }
  

  return (
    <div>
      {/* <htmlForm method="get" action = "localhost:4000/login"> */}

          <div style={{marginLeft:"400px" }}>

              <h2 style={{marginLeft:"100px"}}>login page</h2>

              <div style={{marginTop:"40px" }}>

                    <label htmlFor="name">enter your name</label>            
                    <input type="text" id="name" name="name" onChange={dat} value = {name}></input>

          </div>
          <div style={{marginTop:"40px" }}>

                    <label htmlFor="password">enter your password</label>            
                    <input type="password" id="password" name="password" onChange={dat} value = {password}></input>
              </div>

          <div style={{marginTop:"40px",marginLeft:"100px" }}>
                <button onClick={syncData}>submit</button>
                </div>
          </div>
    {/* </htmlForm> */}

    </div>
  )
}

// module.exports = {Home}
