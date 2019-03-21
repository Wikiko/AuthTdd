const routes = require('express').Router();
const { User } = require('./app/models');

User.create({
    name: "William",
    email: "willianray@gmail.com",
    password_hash: "129312312"
});

// Definição rotas

module.exports = routes;