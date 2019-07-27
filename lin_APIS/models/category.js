const sql = require('../utilities/mysql');

//to get data by  id
const getCategoryById = async (id) => {
    return new Promise((resovle,reject) =>{
        sql.query("select * from category where cat_id = ?",id,(err,data) =>{
            if(err){
                reject(err);
            }else{
                resovle(data);
            }
        })
    })
}
//To get all data from category table
const getAllCategory = async () => {
    const category_query = `select * from category`;
    return new Promise((resovle,reject) =>{
        sql.query(category_query,(err,data) =>{
            if(err){
                reject(err);
            }else{
                resovle(data);
            }
        })
    })
}

//togetl all
const getAllId = async () => {
    const department_query = `select * from category`;

    return new Promise((resolve, reject) => {
        sql.query(department_query, (error, departments) => {
            if (error) reject(error);
            else resolve(departments);
        });
    })
}


module.exports = {
    getAllCategory,
    getCategoryById,
    getAllId
}