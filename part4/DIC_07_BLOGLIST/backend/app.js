const config = require('./utils/config');
const express = require('express');
const app = express();
const cors = require('cors');
const blogsRouter = require('./controller/blogs');
const middleware = require('./utils/middleware')
const logger = require('./utils/logger');
const mongo_connect = require('./mongoose');

mongo_connect();
app.use(cors());
app.use(express.static('dist'));
app.use(middleware.requestLogger);
app.use('/api/blogs', blogsRouter);
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;