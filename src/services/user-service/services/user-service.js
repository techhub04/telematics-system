const userRepository = require('../repositories/user-repository');

exports.createUser = async(data)=>{
    return await userRepository.register(data);
};

