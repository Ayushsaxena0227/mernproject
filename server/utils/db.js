const mongoose = require("mongoose");
// const URI = "mongodb://127.0.0.1:27017/mern_admin"

const URI = process.env.MONGODB_URI;

// mongoose.connect(URI);
const connectdb =async ()=>{
    try {
        await mongoose.connect(URI);
        console.log("successful connection")
    } catch (error) {
        console.log("db connection failed")
        process.exit();
    }

}
module.exports = connectdb;