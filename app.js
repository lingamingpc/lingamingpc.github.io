const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

//Route Apis
const newsRoute = require('./lin_APIS/routers/lin_news');
const productRoute =require('./lin_APIS/routers/lin_products');
const reviewRoute = require('./lin_APIS/routers/lin_reviews');
const categoryRoute = require('./lin_APIS/routers/category');


app.use('/news',newsRoute);
app.use('/products',productRoute);
app.use('/reviews',reviewRoute);
app.use('/category',categoryRoute);

app.listen(3000,() =>{
    console.log("Server is running at port 3000");
})

