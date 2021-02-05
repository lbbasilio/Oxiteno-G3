const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.get('/catalogo_solicitacoes', async function (req, res) {
    return res.json(await selectAllSolicitacoes());
});

app.put('/catalogo_solicitacoes', async (req, res) => {
    const data = await req.body;
    console.log(data);
    db.push(data)
    return res.json('Criado com Sucesso!')
});

app.listen(3000, function () {
    console.log('Conectado porta 3000');
});

async function connect() {
    if (global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection('mysql://root:root@127.0.0.1:3306/oxiteno');
    global.connection = connection;
    return connection;
};

async function selectAllSolicitacoes() {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM catalogo_subitem INNER JOIN catalogo_item on catalogo_subitem.item_id = catalogo_item.item_id ORDER BY catalogo_item.item_id');
    return rows;
};