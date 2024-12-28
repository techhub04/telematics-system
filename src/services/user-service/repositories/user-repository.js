const User = require("../models/user");
//const {encrypt,decrypt} = require('../../../common/crypto-util');

exports.register = async (userData) => {
    var newUser = new User({...userData});
    //newUser.password = encrypt(newUser.password);
    newUser = await newUser.save();
    return newUser;
};

