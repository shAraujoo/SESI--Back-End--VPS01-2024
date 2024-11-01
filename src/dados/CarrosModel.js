const connect = require('../connect/conexao');

const getAllCarros = (callback) => {
    connect.query('SELECT * FROM carros', (err, results) => {
        if (err) return callback(err, null);
        callback(null, results);
    });
};


const createCarros = (data, callback) => {
    connect.query('INSERT INTO carros SET ?', data, (err, results) => {
        if (err) return callback(err, null);
        callback(null, { id: results.insertId, ...data });  
    });
};

const updateCarros = (id, data, callback) => {
    connect.query('UPDATE carros SET ? WHERE carros_id = ?', [data, id], (err, results) => {
        if (err) return callback(err, null);
        callback(null, { message: 'Carro atualizado com sucesso' });
    });
};

const deleteCarros = (id, callback) => {
    connect.query('DELETE FROM carros WHERE carros_id = ?', [id], (err, results) => {
        if (err) return callback(err, null);
        callback(null, { message: 'Carro deletado com sucesso' });
    });
};

module.exports = {
    getAllCarros,
    createCarros,
    updateCarros,
    deleteCarros
};