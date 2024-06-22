const {z}= require("zod");

//creating object schema
const signupSchema = z.object({
    username: z
    .string({required_error: "Name is required "})
    .trim()
    .min(3, {message : "Name must be at least of 3 characters"})
    .max(20, {message : "Name must be at most of 20 characters"}),

    email: z
    .string({required_error: "Email is required "})
    .trim()
    .email({message: "Invalid Email Address"})
    .min(3, {message : "email must be at least of 3 characters"})
    .max(20, {message : "email must be at most of 20 characters"}),

    phone:  z
    .string({required_error: "phone is required "})
    .trim()
    .min(10, {message : "phone must be at least of 10 characters"})
    .max(20, {message : "phone must be at most of 20 characters"}),

    password:  z
    .string({required_error: "password is required "})
    .min(7, {message : "password must be at least of 7 characters"})
    .max(1024, {message : "password must be at most of 1024 characters"}),
})

module.exports = signupSchema;