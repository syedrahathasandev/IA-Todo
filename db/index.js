// import mongoose from "mongoose";
// import "dotenv/config";

// const dbConnect = async()=>{
//     await mongoose.connect(process.env.MONGODB_URL)
//     console.log("db connected")
// }

// export {
//     dbConnect
// }



import mongoose from "mongoose";
import "dotenv/config";
import dns from "node:dns";

// Tell Node.js explicitly to use public DNS servers
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("db connected");
    } catch (error) {
        console.error("Database connection failed:", error.message);
    }
};

export { dbConnect };