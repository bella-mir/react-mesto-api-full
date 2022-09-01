require('dotenv').config();

const { JWT_SECRET = 'The most s3cr3t key' } = process.env;

const SALT_ROUND = 10;

module.exports = {
  SALT_ROUND,
  JWT_SECRET,
};
