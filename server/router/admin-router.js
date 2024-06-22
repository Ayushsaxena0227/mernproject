const express = require("express");
const router = express.Router();
const authmiddleware = require("../middlewares/auth-middleware");
const adminController = require("../controllers/admin-controller");
const adminmiddleware = require("../middlewares/admin-middleware");

// Route to get all users, protected by authmiddleware and adminmiddleware
router.route('/users').get(authmiddleware, adminmiddleware, adminController.getallusers);

// Route to get all contacts, protected by authmiddleware
router.route('/contacts').get(authmiddleware, adminController.getallcontacts);

module.exports = router;

// const express = require("express");
// const router = express.Router();
// const authmiddleware = require("../middlewares/auth-middleware");
// // const getallusers = require("../controllers/admin-controller");
// // const getallcontacts = require("../controllers/contact-controller");
// const adminController = require("../controllers/admin-controller");
// const adminmiddlewarre = require("../middlewares/admin-middleware");
// router.route('/users').get(authmiddleware ,adminmiddlewarre,  adminController.getallusers);
// router.route('/contacts').get(authmiddleware , adminController.getallcontacts);
// module.exports = router;

