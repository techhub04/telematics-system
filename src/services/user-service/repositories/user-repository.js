const User = require("../models/user");

exports.register = async (userData) => {
    const newUser = new User({...userData});
    newUser = await newUser.save();
    return newUser;
};

