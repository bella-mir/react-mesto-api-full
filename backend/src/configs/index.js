require('dotenv').config();

const { JWT_SECRET = 'eb28135ebcfc17578f96d4d65b6c7871f2c803be4180c165061d5c2db621c51b' } = process.env;

const SALT_ROUND = 10;

module.exports = {
  SALT_ROUND,
  JWT_SECRET,
};
