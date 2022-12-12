import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default  function Home(){

  const syncData = async ()=>{
    const  todo  =  fetch('http://localhost:4000/login', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }).then((resp) => resp.json());
    console.log(todo);
  
  }
  
  

  return (
    <>
      {/* <form method="get" action = "localhost:4000/login"> */}

          <div style={{marginLeft:"400px" }}>

              <h2 style={{marginLeft:"100px"}}>login page</h2>

              <div style={{marginTop:"40px" }}>

                    <label for="name">enter your name</label>            
                    <input type="text" id="name" name="name"></input>

          </div>
          <div style={{marginTop:"40px" }}>

                    <label for="password">enter your password</label>            
                    <input type="password" id="password" name="password"></input>
              </div>

          <div style={{marginTop:"40px",marginLeft:"100px" }}>
                <button onClick={syncData}>submit</button>
                </div>
          </div>
      {/* </form> */}

    </>
  )
}

// module.exports = {Home}
