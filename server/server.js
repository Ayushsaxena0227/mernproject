// require('dotenv').config();
// const express = require("express");
// const cors = require("cors");
// const app = express();
// const authroute = require("./router/auth-router");
// const contactRoute = require("./router/contact-route");
// const connectdb = require("./utils/db")
// const errormiddleware = require("./middlewares/error-middleware");
// //ab is application m json ka use kar sakte ho..postman m help kar raha ye. it is middleware. shoul b addede at top

// //data get karne s phele access dena padega ilsiyebusing before express.json
// // handlling cors policy
// const corsOptions = {
//     origin: "http://localhost:5173",
//     methods : "GET , POST , PUT , DELETE , PATCH , HEAD",
//     credentials: true,
// }

// app.use(cors(corsOptions));

// app.use(express.json());
// //m using router neeche dhyan mtdo
// app.use("/api/auth" , authroute);

// app.use("/api/form" , contactRoute);




// //agr hmari application m kisi bhi page(login , contact) kahi bhi error aa raha he to just udhar next() pass kar dena vo error middleware vale page pr chla jaega and vha vo handle hoga..ab har page p handle nahi karna error bs next() likh do sb ho jaega

// app.use(errormiddleware);
// app.get("/" , (request , response)=>{
//     response.status(200).send('welcome here!')
// });

// app.get("/register" , (request , response)=>{
//     response.status(200).send('welcome to registration page!')
// });
require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
const authroute = require("./router/auth-router");
const contactRoute = require("./router/contact-route");
const serviceroute = require("./router/service-router");
const adminroute = require("./router/admin-router");
const connectdb = require("./utils/db");
const errormiddleware = require("./middlewares/error-middleware");

// Updated CORS configuration to allow multiple origins
const allowedOrigins = ["http://localhost:5173", "http://localhost:5174"];

const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/auth", authroute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceroute);
app.use("/api/admin", adminroute);

app.use(errormiddleware);

connectdb();

const PORT = process.env.PORT || 5000;
connectdb().then(()=>{
app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})
})