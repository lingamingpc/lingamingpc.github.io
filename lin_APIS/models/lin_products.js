const sql = require('../utilities/mysql');
//To get data from product table by Id
const getProductById = async (id) => {
    return new Promise((resolve,reject) =>{
        sql.query("select * from lin_products where lin_product_id = ?",id,(err,data) =>{
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    })
}
//To get all data from products table
const getAllProducts = async() =>
{
    return new Promise((resolve,reject) =>{
        sql.query("select * from lin_products inner join category on lin_products.category_id = category.category_id",(err,data) =>{
            if(err){
                reject(err);
            }
            else{
                resolve(data);
            }
        })
    })
}

module.exports ={
    getAllProducts,
    getProductById
}