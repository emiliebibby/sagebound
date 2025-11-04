// Simple Node.js server using Express
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/user');

const app = express();
const PORT = process.env.PORT || 3001;

// Mongoose connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', (err) => console.error('Mongoose connection error:', err));
db.once('open', () => console.log('Connected to MongoDB with Mongoose'));

app.use(express.json());
app.use('/api/users', userRouter);

app.get('/', (req, res) => {
  res.send('Hello from the Node.js server!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
