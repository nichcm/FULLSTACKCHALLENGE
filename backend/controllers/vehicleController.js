const Vehicle = require('../models/vehicle');
const mongoose = require('mongoose');

// fazer a busca no banco da lista de veiculos
class vehicleController {

    static async listarVeiculos( req, res ){

        Vehicle.find({})
        .exec()
        .then(doc =>{
            return res.status(200).json(doc)
        })
        .catch( err =>{ 
            return res.status(500).json(err.message)
        });
    }

    static async listarCarros( req, res ){

        await Vehicle.find({ tipo: 'carro'})
            .exec()
            .then(doc =>{
                return res.status(200).json(doc)
            })
            .catch( err =>{ 
                return res.status(500).json(err.message)
            });
        
    }
    static async listarMotos( req, res ){

        await Vehicle.find({ tipo: 'moto'})
            .exec()
            .then(doc =>{
                return res.status(200).json(doc)
            })
            .catch( err =>{ 
                return res.status(500).json(err.message)
            });
    }
    static async listarCaminhoes( req, res ){

        await Vehicle.find({ tipo: 'caminhao'})
            .exec()
            .then(doc =>{
                return res.status(200).json(doc)
            })
            .catch( err =>{ 
                return res.status(500).json(err.message)
            });
    }
        

    static async visualizarVeiculo(req, res){
        const { id } =  req.params
        Vehicle.findById(id)
            .exec()
            .then(doc =>{
                return res.status(200).json(doc)
            })
            .catch( err =>{ 
                return res.status(500).json(err.message)
            });
    }

    static criaVeiculo(req, res){
        const item = new Vehicle({
            _id: new mongoose.Types.ObjectId(),
            placa: req.body.placa,
            marca: req.body.marca,
            modeloVersao: req.body.modeloVersao,
            ano: req.body.ano,
            tipo: req.body.tipo
        });
        item
            .save()
            .then(result =>{
                console.log(item);
                console.log(result);
                return res.status(200).json(result)
            })
            .catch (erro => {
                return res.status(500).json(erro.message)
            });
    }

    static async atualizaVeiculo(req, res){
        const { id } =  req.params;
        const itens = req.body;
        
        
        Vehicle.findByIdAndUpdate(id, { $set: itens })
            .exec()
            .then( result => {
                return res.status(200).json(result)
            })
            .catch (erro =>{
                return res.status(500).json(error.message)
            });
    }

    static deletaVeiculo(req, res){
        const { id } =  req.params;

        Vehicle.findOneAndRemove({_id: id})
            .exec()
            .then( result =>{
                return res.status(200).json({ mensagem: `id ${result} deletado` })
            })
            .catch(err =>{
                console.log(err);
                return res.status(500).json(error.message)
            })
    }
    
} 


module.exports = vehicleController