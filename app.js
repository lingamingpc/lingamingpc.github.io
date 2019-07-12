const axios= require('axios');
const express = require('express');
const app = express();


const productApi = require('./model/linProducts');
const categoryApi = require('./model/linCategoryAPI');
const brandApi = require('./model/linBrandAPI');
const newsApi = require('./model/ linNewsAPI');
console.log("hello");
app.use('/products',productApi);
app.use('/category',categoryApi);
app.use('/brands',brandApi);
app.use('/news',newsApi);

app.listen(3001,() =>{
    console.log("Sever is running on port 3001!");
});