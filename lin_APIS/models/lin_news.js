const sql = require('../utilities/mysql');

//To get all the information from news table
const getAllNews = async () =>{
    return new Promise ((resolve,reject)=>{
        sql.query("select * from news inner join category on news.category_id = category.category_id",(err,data) =>{
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    })
}

//To get information by id
const getNewsById = async (id) =>{
    return new Promise ((resolve,reject) =>{
        sql.query("Select * from news where news_id = ?",id,(err,data) =>{
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    })
}

module.exports ={
    getAllNews,
    getNewsById
};