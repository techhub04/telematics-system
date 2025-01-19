const mongoose = require("mongoose");
const TSError = require('../../../common/logging/ts-error');

const connectDB = async () => {
  try {
    //const uri = 'mongodb://host.docker.internal:27017/telematics-user-db?retryWrites=true&w=majority';//process.env.MONGO_URI;
    const uri = 'mongodb://localhost:27017/ts-vehicle-management-db?retryWrites=true&w=majority';//process.env.MONGO_URI;
   
    if (!uri) {
      throw new TSError("MONGO_URI is not defined in environment");
    }
    await mongoose.connect(uri, { 
    });
    console.log("Mongo db connected in Vehicle Management Service");
  } catch (error) {
    //throw new TSError("MONGO Not able to connect");
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
