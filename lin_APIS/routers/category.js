const express = require('express');
const route = express.Router();
const categoryModel = require('../models/category');

//to get data by id
route.get('/:id',(req,res) =>{
    categoryModel.getCategoryById(req.params.id)
    .then(data =>{
        res.json({
            data: data
        })
    })
    .catch(err =>{
        console.log(err);
        res.send("Error occur in getAllctegory of router file");
    })
})

//To getAll data from category table
route.get('/',(req,res) =>{
    categoryModel.getAllCategory()
    .then(data =>{
        res.json({
            data: data
        })
    })
    .catch(err =>{
        console.log(err);
        res.send("Error occur in getAllctegory of router file");
    })
})

module.exports = route;