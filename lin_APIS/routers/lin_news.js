const express = require('../../node_modules/express');
const route = express.Router();
const bodyParser = require('body-parser');
//const sql = require('../utilities/mysql');
const newsModel = require('../models/lin_news');



//to get data from news table by id
route.get('/:id',(req,res) =>{
    newsModel.getNewsById(req.params.id)
    .then(data => {
        res.json({
            data: data
        })
    })
    .catch(err => {
        console.log(err);
        res.send("Error occur in getNewsByid in router file");
    });
})


//To get all information from news table
route.get('/', (req, res) => {
    newsModel.getAllNews()
        .then(data => {
            res.json({
                data: data
            })
        })
        .catch(err => {
            console.log(err);
            res.send("Unexcepted error occured");
        });

});




module.exports = route;