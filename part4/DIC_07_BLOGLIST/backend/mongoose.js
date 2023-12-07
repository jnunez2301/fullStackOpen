const mongoose = require('mongoose');
const config = require('./utils/config');
const logger = require('./utils/logger');

const mongo_connect = () => {
    mongoose.set('strictQuery', false);
    mongoose.connect(config.MONGODB_URI)
    .then(() => logger.info('Connected to MongoDB'))
    .catch(() => logger.error('error connecting to mongoDB',))
}

module.exports = mongo_connect;