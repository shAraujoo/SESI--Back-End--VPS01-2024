const connect = require('../connect/conexao');

const getAllTelefones = (callback) => {
    connect.query('SELECT * FROM telefone', (err, results) => {
        if (err) return callback(err, null);
        callback(null, results);
    });
};


const createTelefone = (data, callback) => {
    connect.query('INSERT INTO telefone SET ?', data, (err, results) => {
        if (err) return callback(err, null);
        callback(null, { id: results.insertId, ...data });  
    });
};

const updateTelefone = (id, data, callback) => {
    connect.query('UPDATE telefone SET ? WHERE telefone_id = ?', [data, id], callback);
};

const deleteTelefone = (id, callback) => {
    connect.query('DELETE FROM telefone WHERE telefone_id = ?', [id], callback);
};

module.exports = {
    getAllTelefones,
    createTelefone,
    updateTelefone,
    deleteTelefone
};