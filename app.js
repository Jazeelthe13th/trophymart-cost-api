import express from 'express';
import logger from 'morgan';
import router from './routes/calculate';
import config from './config/envConfig';

// Intializing Express application
const app = express();

// Basic logger for HTTP Requests
app.use(logger('dev'));

// Parses URL Encoded data in POST requests
app.use(express.urlencoded({extended : true}));

// Parses JSON data in POST requests
app.use(express.json());

// Adding router for cost calculation
app.use('/calculate', router);

// Server starts listening to requests
app.listen(config.port);