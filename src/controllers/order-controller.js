'use strict';

const mongoose = require('mongoose');
const Order = mongoose.model('Order');
const Customer = mongoose.model('Customer');
exports.get = (req, res, next) => {
    Order.find({}, 'id created_at cancelDate customer_id status total items')
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
exports.put = (req, res, next) => {
    Order.findByIdAndUpdate(req.params.id, {
        $set: {
            status: req.body.status,
            cancelDate: Date.now()
        }
    }).then(x => {
        res.status(201).send({
            message: 'Pedido atualizado com sucesso!'
        });
    }).catch(e => {
        res.status(400).send({
            message: 'Falha ao atualizar o Pedido!', data: e
        });
    });
};