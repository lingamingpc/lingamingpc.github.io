const express = require('express');
const route = express.Router()
const reviewModel = require('../models/lin_reviews');
const controller = require('../controller/review');
//to get data by id
route.get('/:id',(req,res) =>{
    reviewModel.getReveiwsById(req.params.id)
    .then(data =>{
        res.json({
            data: data
        })
    })
    .catch(err =>{
        console.log(err);
        res.send("Error occur in getReveiwsById of route file");
    })
})
//to get all data from review table
route.get('/',(req,res) => {
    //controller.getAll(req,res);
    reviewModel.getAllReviews()
    .then(data =>{
        res.json({
            data: data
        })
    })
    .catch(err =>{
        console.log(err);
        res.send("Error occur in getAllrevies of route folder");
    })
})

module.exports = route;