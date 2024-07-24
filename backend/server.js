const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const hospitalRoutes = require('./routes/hospitalRoutes');

dotenv.config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

app.use('/api/v1/hospitals', hospitalRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
