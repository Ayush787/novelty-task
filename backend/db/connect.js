const mongoose = require('mongoose')



const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to mongodb success",connection.connection.host);
  } catch (error) {
    console.log('Mongodb conneection error',error.message)
    process.exit(1);
  }
}


module.exports = connectDB;