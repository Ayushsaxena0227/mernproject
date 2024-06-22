const User = require("../models/user-model");
const bcrypt = require("bcryptjs");
// const User = require("../models/user-model");
// const bcrypt = require("bcryptjs");
// //home logic
// const home = async (request, response) => {
//   try {
//     console.log(request.body);
//     response.status(200).send("welcome here! to worlds best course");
//   } catch (error) {
//     console.log(error);
//   }
// };

// //                                                             REGISTRATION LOGIC
// const register = async (request, response) => {
//   try {
//     console.log(request.body);
//     // const data = request.body;
//     // response.status(200).send({data})
//     //doing like this , getting data
//     //registration logic
//     const { username, email, phone, password } = request.body;

//     //checking if an user exist phele se or not
//     const userexist = await User.findOne({ email });
//     if (userexist) {
//       return response.status(400).json({ msg: "email already exist" });
//     }
//     //hash the password
//     const saltround = 10;
//     //y passworduserka password he
//     const passwordhash = await bcrypt.hash(password, saltround);
//     console.log(passwordhash);
//     //if not exist then create one
//     const userCreated = await User.create({
//       username,
//       email,
//       phone,
//       password: passwordhash,
//     });
//     // response.status(200).json({msg: userCreated , })  after jwt authentication

//     response.status(200).json({
//       msg: "registration successful",
//       token: await userCreated.generateToken(),
//     });
//   } catch (error) {
//     response.status(500).json("internal srever error");
//     // next(error)
//   }
// };

// //                                                        LOGIN LOGIC

// const login = async (request, response) => {
//   try {
//     const { email, password } = request.body;
//     //checking ki kya vo user exist bhi krta h..i mean does has he ever registered
//     const userexist = await User.findOne({ email });
//     console.log(userexist);

//     if (!userexist) {
//       return response.status(400).json({ msg: "user does not exist" });
//     }

//     //and if vo exist karta he to compare karo user ke entered password aur db me jo stored h us passowrd ko
//     // const passwordcompare = await bcrypt.compare(password, userexist.password);
//     const passwordcompare = await userexist.comparefunction(password);
//     if (passwordcompare) {
//       //if password match then generate token
//       response.status(200).json({
//         msg: "login successful",
//         token: await userexist.generateToken(),
//       });
//     }

//     else{
//         response.status(401).json({message: "invalid email or password"})
//     }
//   } catch (error) {
//     response.status(500).json("internal srever error");    
//   }
// };
// module.exports = { home, register , login };



// *-------------------
// Home Logic
// *-------------------

const home = async (req, res) => {
  try {
    res
      .status(200)
      .send(
        "Welcome to world best mern series by thapa technical using router "
      );
  } catch (error) {
    console.log(error);
  }
};

// *-------------------
// Registration Logic
// *-------------------
// *-------------------------------
//* User Registration Logic 📝
// *-------------------------------
// 1. Get Registration Data: 📤 Retrieve user data (username, email, password).
// 2. Check Email Existence: 📋 Check if the email is already registered.
// 3. Hash Password: 🔒 Securely hash the password.
// 4. Create User: 📝 Create a new user with hashed password.
// 5. Save to DB: 💾 Save user data to the database.
// 6. Respond: ✅ Respond with "Registration Successful" or handle errors.

// const register = async (req, res) => {
//   try {
//     console.log(req.body);
//     const { username, email, phone, password } = req.body;

//     const userExist = await User.findOne({ email });

//     if (userExist) {
//       return res.status(400).json({ message: "email already exists" });
//     }

//     // hash the password
//     // const saltRound = 10;
//     // const hash_password = await bcrypt.hash(password, saltRound);

//     const userCreated = await User.create({
//       username,
//       email,
//       phone,
//       password,
//     });

//     res.status(201).json({
//       msg: "registration successful",
//       token: await userCreated.generateToken(),
//       userId: userCreated._id.toString(),
//     });
//   } catch (error) {
//     // res.status(500).json("internal server error");
//     console.log(req.body);
//     next(error);
//   }
// };
const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const userCreated = new User({
      username,
      email,
      phone,
      password,
    });

    await userCreated.save();

    res.status(201).json({
      msg: "Registration successful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal server error");
  }
};

module.exports = { register };

// In most cases, converting _id to a string is a good practice because it ensures consistency and compatibility across different JWT libraries and systems. It also aligns with the expectation that claims in a JWT are represented as strings.

// *-------------------------------
//* User Login Logic 📝
// *-------------------------------
// const login = async (request, response)=>{
//   try {
//     const {email , password} = request.body;
    
//     const userexist = await User.findOne({email});
//     console.log(userexist);
//     if(!userexist){
//       return response.status(401).json({message:"Invalid Credentials"});
//     }

//     const user = await bcrypt.compare(password ,userexist.password );
//     console.log(user);
//     if(user){
      
//       response.status(200).json({
//         msg: "login successful",
//         token: await userexist.generateToken(),
//         userId: userexist._id.toString(),
//       });
//     }
//     else{
//       response.status(401).json({message: "invlaid email or password"});
//     }

//   } catch (error) {
//     response.status(500).json("internal server error")
//   }
// }

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const userExist = await User.findOne({ email });
    console.log(userExist);
    if (!userExist) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    // Compare password
    const isMatch = await userExist.comparefunction(password);
    console.log(isMatch);
    if (isMatch) {
      // Generate token and send response
      const token = userExist.generateToken();
      res.status(200).json({
        msg: "Login successful",
        token,
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { login };

// *-------------------------------
//* to send user data - User Logic 📝
// *-------------------------------

const user= async (request, response) => {
  try {
    const userdata = request.user;
    console.log(userdata);
    return response.status(200).json({ userdata});
  } catch (error) {
    console.log(`error from the user route ${error}`);
  }
}

module.exports = { home, register, login , user };