const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv').config();

connectDB();


const app = express();
app.use(express.json());


app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/tasks', require('./routes/taskRoutes'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));