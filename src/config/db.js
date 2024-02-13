const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

const mongoURI = process.env.DATABASE || 'default_connection_string';

mongoose.connect('mongodb+srv://Loki:Loki@cluster0.wfquez6.mongodb.net/?retryWrites=true&w=majority')

const db = mongoose.connection;


db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB database');
});



module.exports = db;



