import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"
//app config

const app = express();
const port = process.env.PORT || 4000;

//middlewear

app.use(express.json())
app.use(cors())
    

// db connection
connectDB();

//api endpoint
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

//

app.get("/", (req,res) => {
    res.send("API Working") 
})

app.listen(port, ()=> {
    console.log(`Server Started on http://localhost:${port}`)
}) 

/*app.listen(process.env.PORT, '0.0.0.0', () => {
   console.log(`Server is running on http://0.0.0.0:${process.env.PORT}`);
}); */

//mongodb+srv://abhishekkabdal:abhi1234@cluster0.djqdexp.mongodb.net/?