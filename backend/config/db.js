import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://abhishekkabdal:abhi1234@cluster0.djqdexp.mongodb.net/food-del').then(()=>console.log("DB CONNECTED"));
}
