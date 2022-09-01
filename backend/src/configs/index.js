require('dotenv').config();

const { PORT = 3001, JWT_SECRET = 'f7585a14c9e90b0058253652d000dbf34029c94925d6e9dc8286ff326823d2d5' } = process.env;
const SALT_ROUND = 10;
const DATABASE_URL = 'mongodb://127.0.0.1:27017/mestodb';

module.exports = {
  SALT_ROUND,
  JWT_SECRET,
  PORT,
  DATABASE_URL,
};
