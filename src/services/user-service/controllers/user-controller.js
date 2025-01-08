const userService = require('../services/user-service'); 

exports.createUser = async (req, res) => {
  //try {
    const user = await userService.createUser(req.body);
    res.json(user);
  //} catch (error) {
    //res.status(500).json({ message: error });
  //}
};
