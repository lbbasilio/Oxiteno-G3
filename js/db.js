async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection('mysql://root:root@127.0.0.1:3306/oxiteno');
    global.connection = connection;
    return connection;
};

// Queries a respeito do Catálogo de Solicitação
async function selectAllCatalogSolicitation(){
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM catalogo_subitem;');
    return rows;
};
async function addSLACatalogSolicitation(id, solicitation){
    const connection = await connect();
    const sql = 'UPDATE catalogo_subitem SET sla_oxiteno=?, sla=? WHERE id=?;';
    const values = [solicitation.oxiteno_sla, solicitation.sla, id];
    return await connection.query(sql, values);
};

// Queries a respeito das Solicitações
async function selectAllSolicitation(){
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM solicitacoes;');
    return rows;
};
async function insertSolicitation(solicitation){
    const connection = await connect();
    const sql = 'INSERT INTO solicitacoes(subitem_id, nome, email, empresa, cargo, telefone, area, descricao, anexo, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);'
    const values = [solicitation.subitem_id, solicitation.nome, solicitation.email, solicitation.empresa, solicitation.cargo, solicitation.telefone, solicitation.area, solicitation.descricao, solicitation.anexo];
    return await connection.query(sql, values);
};  
async function updateSolicitation(id, solicitation){
    const connection = await connect();
    const sql = 'UPDATE solicitacoes SET status=? WHERE id=?;';
    const values = [solicitation.status, id];
    return await connection.query(sql,values);
};

async function updateProducts(id, product){
    const connection = await connect();
    const sql = 'UPDATE produtos SET Nome=?, Preco=?, Preco_Dolar=?, Url=?, Url_Imagem=? WHERE id=?;';
    const values = [product.nome, product.valor, product.valorUSD, product.url, product.urlImagem, id];
    return await connection.query(sql,values);
};
async function deleteProducts(id){
    const connection = await connect();
    const sql = 'DELETE FROM produtos WHERE id=?;';
    return await connection.query(sql,id);
};

module.exports = {createTableProducts, selectAllProducts, insertProducts, updateProducts, deleteProducts}