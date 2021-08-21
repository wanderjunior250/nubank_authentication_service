const express = require('express');
const router = express.Router();
const User = require('../repository/userRepository');

router.get('/', function(req, res, next) {
    res.render('index', {title: 'Nubank Senha para Sequestro'});
});

router.post('/register', function(req, res, next) {
    var conta = req.body.conta;
    var agencia = req.body.agencia;
    var senhaRoubo = req.body.senhaRoubo;

    var novoUsuario = new User();
    novoUsuario.conta = conta;
    novoUsuario.agencia = agencia;
    novoUsuario.senhaRoubo = senhaRoubo;

    novoUsuario.save(function (err, usuarioSalvo) {
        if(err) {
            console.log(err);
            return res.status(500).send();
        }

        return res.status(200).send();
    });
});

module.exports = router;