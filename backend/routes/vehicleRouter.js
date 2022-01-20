const { Router } = require('express')
const vehicleController = require('../controllers/vehicleController')
const apiFipeController = require('../controllers/apiFipeController')

const router = Router()


router.get('/veiculo', vehicleController.listarVeiculos)
router.get('/veiculo/:id', vehicleController.visualizarVeiculo)
router.get('/carros', vehicleController.listarCarros)
router.get('/motos', vehicleController.listarMotos)
router.get('/caminhoes', vehicleController.listarCaminhoes)

router.post('/veiculo', vehicleController.criaVeiculo)
router.put('/veiculo/:id', vehicleController.atualizaVeiculo)
router.delete('/veiculo/:id', vehicleController.deletaVeiculo)

router.get('/fipe/:tipo', apiFipeController.pegaMarca)

router.get('/fipeModelosVersao/:tipo/:marcaCod', apiFipeController.modelosVersaoVeiculo)
router.get('/fipeAnos/:tipo/:marcaCod/:veiculoCod', apiFipeController.anosVeiculo)



// router.get('/fipe/:id', apiFipeController.pegaModelosWV)**
// router.get('/fipe/:id', apiFipeController.pegaAnos)



// router.get('/api/niveis/pessoas/:pessoaId', NivelController.pegaHabilidadesDaPessoa)
// router.get('/api/niveis/habildades/:habilidadeId', NivelController.pegaPessoasDahabilidade)
// router.get('/niveis/:id', NivelController.pegaUmNivel)
// router.post('/niveis', NivelController.criaNivel)
// router.put('/niveis/:id', NivelController.atualizaNivel)
// router.delete('/niveis/:id', NivelController.apagaNivel)

module.exports = router