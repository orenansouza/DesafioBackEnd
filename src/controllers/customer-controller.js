'use strict';

const mongoose = require('mongoose');
const validarCpf = require('validar-cpf');
const Customer = mongoose.model('Customer');

exports.get = (req, res, next) => {
    Customer.find({},
        'id name cpf email created_at updated_at')
        .then(x => {
            res.status(200).send(x);
        })
        .catch(e => {
            res.status(400).send(e);
        });;
};
exports.getById = (req, res, next) => {
    Customer.findById({ id: req.params.id },
        'id name cpf email created_at updated_at')
        .then(x => {
            res.status(200).send(x);
        })
        .catch(e => {
            res.status(400).send(e);
        });;
};
exports.post = (req, res, next) => {
    if (validarCpf(req.body.cpf)) {
        var customer = new Customer(req.body);
        customer.save()
            .then(x => {
                res.status(201).send({ message: 'Cliente cadastrado com sucesso!' });
            })
            .catch(e => {
                res.status(400).send({ message: 'Falha ao cadastrar o cliente!', data: e });
            });
    }
    else
        res.status(400).send({ message: 'Cpf Inválido!' });
};