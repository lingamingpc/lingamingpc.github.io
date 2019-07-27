
const sql = require('../utilities/mysql');
const reviewModel = require('../models/lin_reviews');
const categoryModel = require('../models/category');
 const getAll =  (req, res) =>{
    categoryModel.getAllId()
        .then(departments => {
            const ids = departments.map(d => d.category_id);
            console.log(ids);
            reviewModel.getByMultipleIds(ids)
        .then(employee => {
                departments.forEach(d => {
                    d.employee = employee.filter(item => item.department_id == d.id);
                });
                res.status(200).send(departments);
            })
        })
        .catch(error => {
            throw error;
        });
} 

module.exports = {
    getAll
}