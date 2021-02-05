const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());

app.get('/', function (req, res) {
    console.log('Olá');
    console.log(req);
    return res.json('Olá front');
});

app.get('/js/user_request.js', function (req, res) {
    res.sendFile(path.resolve('user_request.js'));
});

app.get('/img/oxiteno-logo.png', function (req, res) {
    res.sendFile(path.resolve('../img/oxiteno-logo.png'));
});

app.get('/user_request.html', function (req, res) {
    res.sendFile(path.resolve('../html/user_request.html'));
});

app.get('/catalog', function (req, res) {
    console.log('Olá');
    return res.json('Catalogo');
});

app.listen(3000, function () {
    console.log('Listening on port 3000');
});