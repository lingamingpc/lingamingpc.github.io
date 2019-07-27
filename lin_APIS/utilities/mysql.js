const mysql = require('mysql');

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'admin',
    password : '143414',
    database : 'lingamingpc'
})

connection.connect((err)=>{
    if(err) throw err;
    
})

module.exports = connection;