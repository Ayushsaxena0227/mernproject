const adminmiddlewarre =async(request, response, next)=>{
try {
    console.log(request.user);
    // const adminrole = req.user.isadmin;
    // if(!adminrole){
    //     return res.status(403).json({message:"Acces denied, User is Not an admin"});
    // }
    response.status(200).json({msg:request.user})
    // res.status(200).json({message: req.user.isadmin});
    
} catch (error) {
    next(error)
}
}

module.exports = adminmiddlewarre;