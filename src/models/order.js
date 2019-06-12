'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;
const schema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    customer_id: {
        type: ObjectId,
        required: true,
        ref: 'Customer'
    },
    total: {
        type: Number,
        required: true,
        unique: false,

    },
    status: {
        type: String,
        required: true,
        trim: true,
        uppercase: true
    },
    created_at: {
        type: Date,
        required: true
    },
    cancelDate: {
        type: Date
    },
    items: [{
        id: {
            type: Number,
            required: true
        },
        order_id: {
            type: Number,
            required: true
        },
        product_id: {
            type: ObjectId,
            required: true,
            ref: 'Product'
        },
        amount: {
            type: Number,
            required: true
        },
        price_unit: {
            type: Number,
            required: true
        },
        total: {
            type: Number,
            required: true
        }
    }]
});

module.exports = mongoose.model('Order', schema);