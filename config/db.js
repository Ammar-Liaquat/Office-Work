const mongoose = require("mongoose");

const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB successfully started");
  } catch (error) {
    console.log("MongoDB Not Connected", error);
  }
};

module.exports = connectdb;
