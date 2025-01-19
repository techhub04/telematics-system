const User = require('../models/user');

exports.createUser = async (userData)=>{
    var newUser = new User({...userData});
    newUser = await newUser.save();
    return newUser;
} 
