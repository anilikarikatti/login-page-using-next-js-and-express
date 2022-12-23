// require("dotenv").config() 
const express = require('express');
const request = require('request');

const app = express();

let bodyParser = require("body-parser");

app.use(express.json())

app.use(express.urlencoded({extended:false}))

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))


// app.post('/login', (req, res) => {
 
//       console.log(req.body);
//        res.json("anil")
//     }
//   )
let {pool} = require("../server/connect")

// console.log(pool);
app.post('/login',  async(req, res) => {
  // let {data} =req.query
  console.log(req.body);
  let {name,password} =  req.body;
   try {
      // let query = 'insert into admin values (uuid(),?,?)';
   console.log(name,password);
   let promise = pool.promise()
   let [rows,fields] = await promise.execute('insert into admin values (uuid(),?,?)',[name,password]);


   let [row,fie] = await promise.execute('select * from admin where name =? and password = ?',[name,password]);

   // console.log(rows,fields);
   res.json(row)
   }
   catch(e){
      console.log(e.message);
   }
  
}
)




app.listen(4000,()=>{
    console.log("app listen port 4000");
})