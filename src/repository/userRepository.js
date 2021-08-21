var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    conta: {type: String, unique: true},
    agencia: {type: String},
    senhaRoubo: {type: String}
});

var User = mongoose.model('clientes', userSchema);
module.exports = User;