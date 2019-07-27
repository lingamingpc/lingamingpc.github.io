const sql = require('../utilities/mysql');

//To get data By id
const getReveiwsById = async (id) =>{
    return new Promise((resolve,reject) =>{
        sql.query("select * from lin_reviews where review_id =?",id,(err,data) =>{
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    })
}
//To getAll reviews from review table
const getAllReviews = async () => {
    return new Promise((resolve,reject) =>{
        sql.query("select lin_reviews.*,category.cat_name from lin_reviews inner join category on lin_reviews.category_id = category.category_id",(err,data) =>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    }) 
}

//to get allids
const getByMultipleIds = async (ids) => {
    const employee_query = `select * from lin_reviews where category_id in (${ids.join(",")})`
    return new Promise((resolve, reject) => {
        sql.query(employee_query, (err, employee) => {
            if (err) reject(err);
            else resolve(employee);
        });
    })
}

module.exports = {
    getAllReviews,
    getReveiwsById,
    getByMultipleIds
}