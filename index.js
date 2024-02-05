'use strict'

const port = process.env.PORT || 3000;

const express = require('express');
const logger = require('morgan');

const app = express();
    //middlewares
app.use(logger('dev'));
    //añadir el método get para obtener el parametro
    app.get('/hola/:unNombre', (req, res) => {
        res.status(200).send({ mensaje: `Hola ${req.params.unNombre} desde JSON!` });
    });

    //listener
    app.listen(port, () => {
        console.log(`API REST ejecutándose en http://localhost:${port}/hola/:unNombre`);
    }); 