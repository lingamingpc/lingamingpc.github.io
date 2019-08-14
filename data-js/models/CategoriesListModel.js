import APIDataModel from "./APIModel.js";

class CategoriesListModel extends APIDataModel{

    getAllCategoriesUrl(){
        return this.rootURL + this.allCategories;
    }

    fetchAllCategories(){
        return fetch(this.getAllCategoriesUrl())
        .then(function(response){
            return response.json();
        }).then(function(json){
            return Object.values(json);
        })
    }

}

export default CategoriesListModel;