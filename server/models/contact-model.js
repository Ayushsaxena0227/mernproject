 //another way to write
const {Schema , model} = require("mongoose");      

const contactschema = new Schema({
    username: {type: String,
        required: true,
    },
    email:{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    },

})

//creating model or collection
const Contact = new model('Contact' , contactschema);
module.exports = Contact;