const axios = require("axios");

const api = axios.create({
  baseURL: 'https://parallelum.com.br/fipe/api/v1'
});

class apiFipeController {

  static async pegaMarca(req, res) {
    const { tipo } =  req.params
    api.get(`${tipo}/marcas`)
      .then(doc => {
        return res.status(500).json(doc.data)
      })
      .catch(err => {
        return res.status(500).json(err.message)
      });
  }

  static async pegaMarcaMoto(req, res) {
    api.get("motos/marcas")
      .then(doc => {
        return res.status(500).json(doc.data)
      })
      .catch(err => {
        return res.status(500).json(err.message)
      });
  }

  static async pegaMarcaCaminhao(req, res) {
    api.get("caminhoes/marcas")
      .then(doc => {
        return res.status(500).json(doc.data)
      })
      .catch(err => {
        return res.status(500).json(err.message)
      });
  }

  static async modelosVersaoVeiculo( req, res){
    const { tipo, marcaCod } =  req.params
    api.get(`${tipo}/marcas/${marcaCod}/modelos`)
    .then(doc => {
      return res.status(500).json(doc.data.modelos)
    })
    .catch(err => {
      return res.status(500).json(err.message)
    });
  }


  static async anosVeiculo( req, res){
    const { tipo, marcaCod, veiculoCod } =  req.params
    api.get(`${tipo}/marcas/${marcaCod}/modelos/${veiculoCod}/anos`)
    .then(doc => {
      return res.status(500).json(doc.data)
    })
    .catch(err => {
      return res.status(500).json(err.message)
    });
  }


}


module.exports = apiFipeController;