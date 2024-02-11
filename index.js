'use strict'

const port = process.env.PORT || 3000;

const express = require('express');
const logger = require('morgan');

const app = express();
    //middlewares
    app.use(logger('dev'));
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    //añadir el método get para obtener el parametro

    app.get('/api/product', (req, res) => {
        res.status(200).send({ productos: []});
    });
    app.get('/api/product/:productID', (req, res) => {
        const productID = req.params.productID;
        res.status(200).send({ product: productID});
    });
    app.post('/api/product', (req, res) => {
        const queProducto = req.body;
        console.log(queProducto);
        res.status(200).send({ 
            mensaje:'producto creado',
            producto:queProducto
        });
    });

    app.put('/api/product/:productID',(req,res) => {
        const queProducto = req.body;
        const productID = req.params.productID;

        res.status(200).send({
            mensaje: `Se ha modificado el producto ${productID}`,
            producto: queProducto
        });
    });

    app.delete('/api/product/:productID', (req, res) => {
        const productID = req.params.productID;
        res.status(200);
        res.send( { mensaje: `Se ha eliminado el producto ${productID}` } );
        });

    /*app.delete('/api/product/:productID', (req,res) => {
        const productID = req.params.productID;
        req.status(200).send({
            mensaje:'se ha eliminado el producto ${productID}'
        });
    });*/

    //listener
    app.listen(port, () => {
        console.log(`API REST ejecutándose en http://localhost:${port}/api/product`);
    }); 