require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
  mongoose.connect(process.env.MONGO_URI) 
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.log('MongoDB connection error:', err));
}

module.exports = connectDB;
