const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const uri = 'mongodb://host.docker.internal:27017/telematics-user-db?retryWrites=true&w=majority';//process.env.MONGO_URI;
    //const uri='mongodb://tmssystem:g8xarK9WJ4xegBVm4Y8eKf39TH6rSWaOAbppB36SanmRqNtt4ULefa01wEh5pWBreIeeZ5UUhNSyACDbbPr8dQ%3D%3D@tmssystem.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@tmssystem@/telematics-user-db?retryWrites=true&w=majority'
    if (!uri) {
      throw new Error("MONGO_URI is not defined in environment");
    }
    await mongoose.connect(uri, { 
    });
    console.log("Mongo db connected in User Service");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
