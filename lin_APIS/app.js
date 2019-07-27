const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

//Route Apis
const newsRoute = require('./routers/lin_news');


app.use('/news',newsRoute);

app.listen(3000,() =>{
    console.log("Server is running at port 3000");
})

