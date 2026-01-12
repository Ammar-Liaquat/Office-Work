const dotenv = require("dotenv")
const express = require("express")
const connectdb = require("./config/db")
const routes = require("./routes/routes")

dotenv.config({quiet: true })
connectdb()

const app = express();
app.use(express.json());

app.get("/", (req,res)=>{
   res.send("Welcome")
    
})

app.use("/api", routes)

const port = process.env.PORT || 4000

app.listen(port, ()=>{
    console.log(`Server is Starting ${port}`);
    
}) 
