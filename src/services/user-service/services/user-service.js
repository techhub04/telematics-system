const userRepository = require("../repositories/user-repository");
const sendMessage = require("../../../message-broker/create-user-publisher");
exports.createUser = async (data) => {
  var result = await userRepository.register(data);
  
  if (result) {
    sendMessage(result);
  }
};
