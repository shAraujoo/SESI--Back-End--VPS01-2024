const express = require('express');
const router = express.Router();
const clienteController = require('./controller/controleCliente');
const telefoneController = require('./controller/controleTelefone');
const carroController = require('./controller/controleCarros');

// Rotas para clientes
router.get('/clientes', clienteController.listarClientes);
router.post('/clientes', clienteController.criarCliente);
router.delete('/clientes/:id', clienteController.deletarCliente);
router.put('/clientes/:id', clienteController.atualizarCliente);

//Routes Telefone
router.post('/telefones', telefoneController.criarTelefone);
router.put('/telefones/:id', telefoneController.atualizarTelefone);
router.get('/telefones', telefoneController.listarTelefones);
router.delete('/telefones/:id', telefoneController.deletarTelefone);

//Routes Carros
router.post('/carros', carroController.criarCarros);
router.get('/carros', carroController.listarCarros);
router.put('/carros/:id', carroController.atualizarCarros)
router.delete('/carros/:id', carroController.deletarCarro)


module.exports = router;