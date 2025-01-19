const userRepository = require("../repositories/user-repository");

exports.createUser = async (message) => {
  console.log("message arrived:" + message)
  var user = JSON.parse(message);
  console.log("message parsed:" + user)
  const result = await userRepository.createUser(user);
  console.log(result)
  return result;
};

