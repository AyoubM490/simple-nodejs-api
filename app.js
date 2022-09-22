const express = require('express');

const app = express();
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { people } = require('./data');
const logger = require('./logger');
const authorize = require('./authorize');

// app.use(express.urlencoded({ extended: false }));
require('dotenv').config();

console.log(process.env.NODE_ENV);

app.use(cors());
app.use(helmet());
app.use(morgan('tiny'));

app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people });
});

// app.use(express.static("./"));

app.use(express.json());

app.post('/login', (req, res) => {
  const { username } = req.body;
  if (username) {
    res.status(200).send(`Welcome ${username}`);
  }
});

app.get('/people', (req, res) => {
  res.status(200).send({ success: true, data: people });
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server running on port 3000');
});
