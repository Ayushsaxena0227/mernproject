const User = require("../models/user-model");
const Contact = require("../models/contact-model");

        exports.getallusers = async (req, res) => {
          try {
            // Fetch all users from the database
            const users = await User.find({}, { password: 0 }); // Exclude passwords
            res.status(200).json(users);
          } catch (error) {
            res.status(500).json({ msg: "Error fetching users data" });
          }
        };
        
    
        

// fetching contacts from datbase
const getallcontacts = async (req, res) =>{
try {
    const contacts = await Contact.find();
    console.log(contacts);
    if(!contacts){
        return res.status(404).json({message: "no contacts Found" })
    }
    return res.status(200).json(contacts);
} catch (error) {
   next(error)
}
}

module.exports = {getallusers, getallcontacts};