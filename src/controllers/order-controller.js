'use strict';

const mongoose = require('mongoose');
const Order = mongoose.model('Order');
const Customer = mongoose.model('Customer');
exports.get = (req, res, next) => {
    Order.find({}, 'id created_at status total items')
        .populate('customer_id', 'id name cpf email')
        .populate('items.product_id', "id sku name")
        .then(x => {
            res.status(200).send(x);
        })
        .catch(e => {
            res.status(400).send(e);
        });;
};
exports.getById = (req, res, next) => {
    Order.find({ id: req.params.id })
        .populate('customer_id', 'id name cpf email')
        .populate('items.product_id', "id sku name")
        .then(x => {
            res.status(200).send(x);
        })
        .catch(e => {
            res.status(400).send(e);
        });;
};
exports.post = (req, res, next) => {
    var order = new Order(req.body);
    order.save()
        .then(x => {
            res.status(201).send({ message: 'Pedido cadastrado com sucesso!' });
        })
        .catch(e => {
            res.status(400).send({ message: 'Falha ao cadastrar o pedido', data: e });
        });
};