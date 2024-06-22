//requiring our model
const Contact = require("../models/contact-model");

const contactForm = async (request ,res) =>{
    try {
        const response = request.body;
        await Contact.create(response);
        return res.status(200).json({message: "message send successfully "});
    } catch (error) {
        return res.status(500).json({message: "message not delivered "});
    }
}

module.exports = contactForm;