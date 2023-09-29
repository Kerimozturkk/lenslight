import mongoose from "mongoose";
import dotenv  from "dotenv"

const conn = () => {
    mongoose.connect(process.env.DB_URI,{
        dbName: 'lenslight_tr',
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Connect to the DB successfully");
    })
    .catch((err) => {
        console.log(`DB connection err: ${err}`);
    });
}


export default conn;