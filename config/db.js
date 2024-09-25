import mongoose from "mongoose";

// Create conntetion
const mongoDBConnect = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO);
        console.log(`MongoDB Connected: ${connect.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        
    };

    //Export connection
    export default mongoDBConnect;
}