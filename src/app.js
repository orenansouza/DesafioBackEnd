'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser',true);

mongoose.connect(`mongodb+srv://renan:renan@desafiobackend-aqfsr.azure.mongodb.net/DesafioBackEnd?retryWrites=true&w=majority`);

const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');

const productRoute = require('./routes/product-route');
const customerRoute = require('./routes/customer-route');
const orderRoute = require('./routes/order-route');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/products', productRoute);
app.use('/customers', customerRoute);
app.use('/orders', orderRoute);

module.exports = app;