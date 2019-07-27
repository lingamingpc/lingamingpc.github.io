const express = require('express');
const route = express.Router();
const productsModel = require('../models/lin_products');
//to get product data by product id
route.get('/:id',(req,res) =>{
    productsModel.getProductById(req.params.id)
    .then(data => {
        res.json({
            data: data
        })
    })
    .catch(err => {
        console.log(err);
        res.send("error occur in getProuctById in roters file")
    })
})
//To get all data from  products table
route.get('/',(req,res) =>{
    productsModel.getAllProducts()
    .then(data =>{
        res.json({
            data: data
        })
    })
    .catch(err =>{
        console.log(err);
        res.send("Unexpected error in Route file of productModel");
    })
})

module.exports = route;