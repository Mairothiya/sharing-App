import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const DBConnection = async () => {
    const MONGODB_URI = `mongodb://${process.env.dbUSERNAME}:${process.env.dbPASSWORD}@ac-i5tklwc-shard-00-00.ysuegfr.mongodb.net:27017,ac-i5tklwc-shard-00-01.ysuegfr.mongodb.net:27017,ac-i5tklwc-shard-00-02.ysuegfr.mongodb.net:27017/?ssl=true&replicaSet=atlas-ujwop3-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(MONGODB_URI,{useNewurlParser : true});
        console.log('Database connected');
    }
    catch(error){
        console.error('Error while connecting with database',error.message);
    } 
}

export default DBConnection; 