const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const errorHandler = require('./src/utils/errorHandler');
const routes = require('./src/routes');

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.use(errors());
app.use(errorHandler);

const { PORT = 3001 } = process.env;

mongoose.connect('mongodb://127.0.0.1:27017/mestodb');
app.listen(PORT);
