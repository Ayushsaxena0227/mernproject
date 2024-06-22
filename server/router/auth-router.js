// routes is a class
const express = require("express");
const router = express.Router();
// const {home , register}  = require("../controllers/auth-controller");
const authcontroller  = require("../controllers/auth-controller");  //name anyhtung here and access controllers with .
const signupSchema = require("../validators/auth-validator");
const validate = require("../middlewares/middleware-validate");
const authmiddleware = require("../middlewares/auth-middleware");

//another way of router
// router.route("/register").get((request , response)=>{
//     response.status(200).send('welcome to registration page!')
// });
router.route("/").get(authcontroller.home);
//now removing get and writing post so that data db m add ho jae jakr
// router.route("/register").post(authcontroller.register);  after validate logic our register route looks :

//rgister karnre se phele ye check hoga ki jo schema zod s define kiya tha to kya vo uske barabar he ya nahi
router.route("/register").post(validate(signupSchema) , authcontroller.register);

router.route("/login").post(authcontroller.login);

router.route("/user").get(authmiddleware , authcontroller.user);


module.exports = router;