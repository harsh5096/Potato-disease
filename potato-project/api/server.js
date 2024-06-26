const express = require("express")
const collection = require("../frontend/src/mongo")
const cors =  require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())


app.get("/", cors(),(req, res)=>{

})
app.post("/",async(req,res)=>{
    const{ username , password}= req.body
    try{
       const check = await collection.findOne({username:username})
       if(check){
        res.json("exist")
       }
       else{
        res.json('not exist')
       }
    }
    catch{
        res.json("not exist")
    }
})



app.post("/signup",async(req,res)=>{
    const{ username , password}= req.body
    const data= {
        username:username,
        password:password
    }
    try{
       const check = await collection.findOne({username:username})
       if(check){
        res.json("exist")
       }
       else{
        res.json('not exist')
        await collection.insertMany([data])
       }
    }
    catch{
        res.json("not exist")
    }
})

app.listen(8000,()=>{
    console.log("port connected")
})