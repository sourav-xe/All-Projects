import mongoose from "mongoose";

 export const dbconnection = ()=>{
    mongoose
    .connect(process.env.MONGO_URL, {
        dbName : "Restraunt",
    })
    .then(() => {
        console.log("Database connected successfully");
    })
    .catch((err) => {
        console.error(`Database connection failed:",${err}`);
    });
};