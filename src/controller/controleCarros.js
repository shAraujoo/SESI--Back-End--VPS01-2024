const carros = require('../dados/CarrosModel')

exports.listarCarros = (req, res) => {
    carros.getAllCarros((err, results) =>{
        if(err) {
            res.status(500).send(err)
        } else {
            res.send(results)
        }
    });
};

exports.criarCarros = (req, res) => {
    const novoCarro = {
        marca_veiculo: req.body.marca_veiculo,
        modelo_veiculo: req.body.modelo_veiculo,
        ano_veiculo: req.body.ano_veiculo,
        fabricacao_veiculo: req.body.fabricacao_veiculo,
        cliente_id: req.body.cliente_id
    };

    carros.createCarros(novoCarro, (err, carroCriado) => {
        if (err) return res.status(500).send({ message: 'Erro ao salvar Carro.' });
        res.status(201).send(carroCriado);
    });
};

exports.atualizarCarros = (req, res) => {
    const { id } = req.params;
    const carroAtualizado = req.body;

    carros.updateCarros(id, carroAtualizado, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Carro atualizado com sucesso' });
    });
};
exports.deletarCarro = (req, res) => {
    const { id } = req.params;

    carros.deleteCarros(id, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Carro deletado com sucesso' });
    });
};
