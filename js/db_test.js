var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', express.static(__dirname + '/'));



async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection('mysql://root:root@127.0.0.1:3306/oxiteno');
    global.connection = connection;
    return connection;
};

async function selectAllProducts(){
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM catalogo_subitem');
    return rows;
};

(async()=>{
    app.listen(3000, function () {
        console.log('Conectado porta 3000');
    });

    await connect();
    app.get('/', async function (req, res) {
        let item = await selectAllProducts();
        res.send(item)
    });

})();
// connection.connect();

// app.get('/', function (req, res) {
//     connection.connect();  
//     connection.query('SELECT * FROM users', function(err, rows, fields) {  
//         connection.end();
//         if (err) throw err;
//         console.log("Data displayed");
//     });
// });

// app.post('/', function(req, res) {
//     var username = req.body.name;
//     var usermessage = req.body.message;
//     connection.query("INSERT INTO `users` (Name, Message) VALUES (?,?)", [username.toString(), usermessage.toString()], function(err, result) {
//         if(err) throw err;
//         //Output results
//         console.log(result.affectedRows + ' rows updated. ID is ' + result.insertId);
//     });
//     res.sendFile(__dirname + '/index.html');
// });

