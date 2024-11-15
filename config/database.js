import mongoose from "mongoose";

const dbConnect=async()=>{
    try{
         await mongoose.connect(process.env.MONGODB_URL)
         console.log("MongoDb Connection is Successfull")
    }catch(error){

        console.log("MondoDb Connection is failed",error)
    }
}
export default dbConnect;


