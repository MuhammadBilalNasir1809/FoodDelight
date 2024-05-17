import express from "express"
import cors from "cors"
import { connectDB } from "./Config/db.js"
import FoodRouter from "./Routes/FoodRouter.js"
import UserRouter from "./Routes/UserRouter.js";
import 'dotenv/config';




//app congig
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("API Working")
})

//db connection
connectDB();
// api endpoints
app.use("/api/food",FoodRouter)

app.use("/api/user", UserRouter);

app.use("/images",express.static('uploads'))

app.listen(port,()=>{
    console.log('SERVER STARTED ON PORT 4000')

})