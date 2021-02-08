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
app.post('/solicitacoes/:nomeItem/:nomeSubItem', async ({
    params: {
        nomeItem,
        nomeSubItem
    },
    body: solicitation
}, res) => {
    await db.insertSolicitation(solicitation);
    const allSolicitations = await db.selectAllSolicitacoes(convertDate);
    const filterSolicitation = allSolicitations.filter((solicitationDB) => {
        if (solicitationDB.data_solicitacao == convertDate(solicitation.data_solicitacao)) return solicitationDB;
    })
    return res.json(await email(filterSolicitation[0], nomeItem, nomeSubItem, 'Criado'));
})

app.post('/solicitacoes_sla/:id', async ({
    params: id,
    body: sla
}, res) => {
    res.json(await db.addSLACatalogSolicitation(id.id, sla));
})

// ENDPOINT PUT
app.put('/solicitacoes/:id/:nomeItem/:nomeSubItem', async ({
    params: {
        id,
        nomeItem,
        nomeSubItem
    },
    body: status
}, res) => {
    await db.updateSolicitation(id, status)
    if (status.status == 2) {
        const allSolicitations = await db.selectAllSolicitacoes(convertDate);
        const filterSolicitation = allSolicitations.filter((solicitationDB) => {
            if (solicitationDB.solicitacao_id == id.id) return solicitationDB;
        })
        console.log('teste:', filterSolicitation[0]);
        await email(filterSolicitation[0], nomeItem, nomeSubItem, 'Finalizado')
    }
    return res.json();
});

app.listen(3000, function () {
    console.log('Conectado porta 3000');
});