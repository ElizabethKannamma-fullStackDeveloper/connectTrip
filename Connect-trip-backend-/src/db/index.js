import mongoose from "mongoose"
import { DB_NAME } from "../constant.js";
import env from "dotenv"
env.config()
const connectDb = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_DB_PRODUCTION_URL}/${DB_NAME}`);
        console.log(`MongoDb is connected succesfully || DB HOST ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MongoDb connection Failed Error::",error);
        process.exit(1);
    }
}
export default connectDb;