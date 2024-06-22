// //verifying json web token here only
const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const authmiddleware = async (req, res, next) => {
  const authHeader = req.header('Authorization');

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ msg: "Access denied. No token provided." });
  }

  // Extract the token
  const token = authHeader.replace('Bearer ', '').trim();

  console.log("Token from auth middleware:", token);

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log("isVerified:", decoded);

    // Find the user associated with the token
    const userdata = await User.findOne({ email: decoded.email }).select({
      password: 0,
    });

    if (!userdata) {
      return res.status(404).json({ msg: "User not found." });
    }

    console.log(userdata);

    // Attach user data to the request object
    req.user = userdata;
    req.token = token;
    req.userID = userdata._id;

    next();
  } catch (error) {
    console.error("JWT verification error:", error);
    return res.status(401).json({ message: "Unauthorized. Invalid Token" });
  }
};

module.exports = authmiddleware;
