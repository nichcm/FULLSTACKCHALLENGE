const mongoose =  require('mongoose');

const UserSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    placa: {
        type: String,
        require: true,
        uppercase: true,
    },
    marca: {
        type: String,
        require: true,
    },
    modeloVersao: {
        type: String,
        require: true,
    },
    ano: {
        type: String,
        require: true,
    },
    tipo: {
        type: String,
        require: true,
    }
});

const Vehicle = mongoose.model('Vehicle', UserSchema);

module.exports = Vehicle;