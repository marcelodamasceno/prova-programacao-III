const mongoose = require('mongoose');


const PartSchema = new mongoose.Schema({
    primeiroNome: String,
    ultimoNome: String,
    porcentagem: Number

});

module.exports = mongoose.model('Participante', PartSchema);

