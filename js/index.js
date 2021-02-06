const express = require('express');
const app = express();
const cors = require('cors');
const convertDate = require('./helper/convertDate');
const email = require('./helper/emailHandler');
const db = require('./helper/db');

// CONFIGURATION
app.use(express.json());
app.use(cors());

// ENDPOINT GET
app.get('/catalogo_solicitacoes', async (req, res) => {
    return res.json(await db.selectAllSolicitacoesCatalogo());
});

app.get('/solicitacoes', async (req, res) => {
    return res.json(await db.selectAllSolicitacoes(convertDate));
});

// ENDPOINT POST
app.post('/solicitacoes/:nomeItem/:nomeSubItem', async ({params: {nomeItem, nomeSubItem}, body:solicitation}, res) => {
    await db.insertSolicitation(solicitation);
    const allSolicitations = await db.selectAllSolicitacoes(convertDate);
    const filterSolicitation = allSolicitations.filter((solicitationDB)=>{
        if (solicitationDB.data_solicitacao == convertDate(solicitation.data_solicitacao)) return solicitationDB;
    })
    return res.json(await email(filterSolicitation[0], nomeItem, nomeSubItem, 'Criado'));
})

// ENDPOINT PUT
app.put('/solicitacoes/:id/:nomeItem/:nomeSubItem', async ({params: {id, nomeItem, nomeSubItem}, body:status}, res) => {
    await db.updateSolicitation(id.id, status)
    if (status.status == 2) {
        const allSolicitations = await db.selectAllSolicitacoes(convertDate);
        const filterSolicitation = allSolicitations.filter((solicitationDB)=>{
        if (solicitationDB.solicitacao_id == id.id) return solicitationDB;
        })
        await email(filterSolicitation[0], nomeItem, nomeSubItem, 'Finalizado')
    }  
    return res.json();
});

app.listen(3000, function () {
    console.log('Conectado porta 3000');
});

// async function connect() {
//     if (global.connection && global.connection.state !== 'disconnected')
//         return global.connection;

//     const mysql = require('mysql2/promise');
//     const connection = await mysql.createConnection('mysql://root:root@127.0.0.1:3306/oxiteno');
//     global.connection = connection;
//     return connection;
// };

// async function selectAllSolicitacoesCatalogo() {
//     const connection = await connect();
//     const [rows] = await connection.query('SELECT * FROM catalogo_subitem INNER JOIN catalogo_item on catalogo_subitem.item_id = catalogo_item.item_id ORDER BY catalogo_item.item_id');
//     return rows;
// };

// async function selectAllSolicitacoes(convertDate) {
//     const connection = await connect();
//     let [rows] = await connection.query('SELECT s.*, ci.*, cs.name, cs.sla FROM solicitacoes AS s INNER JOIN catalogo_subitem AS cs ON s.subitem_id = cs.subitem_id INNER JOIN catalogo_item AS ci ON cs.item_id = ci.item_id ORDER BY s.data_vencimento;');
//     await rows.forEach((row, index) => {
//         rows[index].data_solicitacao = convertDate(row.data_solicitacao)
//         rows[index].data_vencimento = convertDate(row.data_vencimento)
//     });
//     return rows;
// };

// async function updateSolicitacao(id, solicitation){
//     const connection = await connect();
//     const sql = 'UPDATE solicitacoes SET status=? WHERE solicitacao_id=?;';
//     const values = [solicitation.status, id];
//     return await connection.query(sql,values);
// };

// async function insertSolicitation(solicitation){
//     const connection = await connect();
//     const sql = 'INSERT INTO solicitacoes(subitem_id, nome, email, empresa, cargo, telefone, area, descricao, anexo, data_solicitacao, data_vencimento) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);'
//     const values = [solicitation.subitem_id, solicitation.nome, solicitation.email, solicitation.empresa, solicitation.cargo, solicitation.telefone, solicitation.area, solicitation.descricao, solicitation.anexo, solicitation.data_solicitacao, solicitation.data_vencimento];
//     return await connection.query(sql, values);
// }; 