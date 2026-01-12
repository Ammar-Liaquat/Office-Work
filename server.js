const dotenv = require("dotenv")
const express = require("express")
const connectdb = require("./config/db")
const routes = require("./routes/index")

dotenv.config({quiet: true })
connectdb()

const app = express();
app.use(express.json());
app.use("/api", routes)

const port = process.env.PORT || 4000

app.listen(port, ()=>{
    console.log(`Server is Starting ${port}`);
    
}) 
