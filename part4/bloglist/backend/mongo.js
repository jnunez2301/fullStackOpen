const mongoose = require('mongoose');
const config = require('./utils/config');
const logger = require('./utils/logger');


const connectToMongo = () => {
    mongoose.set('strictQuery', false)
    mongoose.connect(config.MONGODB_URI)
        .then(() => logger.info('connected to MongoDB'))
        .catch(() => logger.error('error connecting to MongoDB', error.message))
}
module.exports = connectToMongo;