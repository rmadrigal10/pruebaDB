const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Servidor de Pruebas Ahorra');
});


app.listen(port, () => {
    console.log('En el puerto: ' + port);
});

routerApi(app);