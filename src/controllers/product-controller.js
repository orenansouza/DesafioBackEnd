'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = (req, res, next) => {
    Product.find({
    }, 'id sku name price created_at updated_at')
        .then(x => {
            res.status(200).send(x);
        })
        .catch(e => {
            res.status(400).send(e);
        });;
}
exports.getById = (req, res, next) => {
    Product.find({ id: req.params.id },
        'id sku name price created_at updated_at')
        .then(x => {
            res.status(200).send(x);
        })
        .catch(e => {
            res.status(400).send(e);
        });;
}
exports.post = (req, res, next) => {
    if (req.body.price > 0) {
        var product = new Product(req.body);
        product.save()
            .then(x => {
                res.status(201).send({ message: 'Produto cadastrado com sucesso!' });
            })
            .catch(e => {
                res.status(400).send({ message: 'Falha ao cadastrar o produto', data: e });
            });
    }
    else
        res.status(400).send({ message: 'O Preço deve ser maior que 0(zero)!' });
};