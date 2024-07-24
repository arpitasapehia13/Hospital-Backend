const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const hospitalRoutes = require('./routes/hospitalRoutes');

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use('/api/v1/hospitals', hospitalRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

module.exports = app;
