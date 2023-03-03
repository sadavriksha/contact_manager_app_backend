const mongoose = require("mongoose");
// mongodb://127.0.0.1:27017/Contact
const connectDB = async () => {
  return mongoose
    .connect('mongodb://mongo:WD0aNs9uMovNxAiwkzE4@containers-us-west-150.railway.app:7992')
    .then(() => console.log(`connection to database established...`))
    .catch((err) => console.log(err));

};

module.exports = connectDB;

