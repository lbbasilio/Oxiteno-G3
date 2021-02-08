async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection('mysql://root:root@127.0.0.1:3306/oxiteno');
    global.connection = connection;
    return connection;
};

// Queries a respeito do Catálogo de Solicitação
async function selectAllSolicitacoesCatalogo() {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM catalogo_subitem INNER JOIN catalogo_item on catalogo_subitem.item_id = catalogo_item.item_id ORDER BY catalogo_item.item_id');
    return rows;
};
async function addSLACatalogSolicitation(id, solicitation){
    const connection = await connect();
    const sql = 'UPDATE catalogo_subitem SET sla_oxiteno=?, sla=? WHERE subitem_id=?;';
    const values = [solicitation.sla, solicitation.sla, id];
    return await connection.query(sql, values);
};

// Queries a respeito das Solicitações
async function selectAllSolicitacoes(convertDate) {
    const connection = await connect();
    let [rows] = await connection.query('SELECT s.*, ci.*, cs.name, cs.sla FROM solicitacoes AS s INNER JOIN catalogo_subitem AS cs ON s.subitem_id = cs.subitem_id INNER JOIN catalogo_item AS ci ON cs.item_id = ci.item_id ORDER BY s.data_vencimento;');
    await rows.forEach((row, index) => {
        rows[index].data_vencimento_ms = row.data_vencimento;
        rows[index].data_solicitacao = convertDate(row.data_solicitacao);
        rows[index].data_vencimento = convertDate(row.data_vencimento);
    });
    return rows;
};
async function insertSolicitation(solicitation){
    const connection = await connect();
    const sql = 'INSERT INTO solicitacoes(subitem_id, nome, email, empresa, cargo, telefone, area, descricao, anexo, data_solicitacao, data_vencimento) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);'
    const values = [solicitation.subitem_id, solicitation.nome, solicitation.email, solicitation.empresa, solicitation.cargo, solicitation.telefone, solicitation.area, solicitation.descricao, solicitation.anexo, solicitation.data_solicitacao, solicitation.data_vencimento];
    return await connection.query(sql, values);
}; 
async function updateSolicitation(id, solicitation){
    const connection = await connect();
    const sql = 'UPDATE solicitacoes SET status=? WHERE solicitacao_id=?;';
    const values = [solicitation.status, id];
    return await connection.query(sql,values);
};

module.exports = {selectAllSolicitacoesCatalogo, addSLACatalogSolicitation, selectAllSolicitacoes, insertSolicitation, updateSolicitation}