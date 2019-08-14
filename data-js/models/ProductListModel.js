import APIDataModel from "./APIModel.js";

class ProductListModel extends APIDataModel{

    getAllProductUrl(){
        return this.rootURL + this.allProducts;
    }

    fetchAllProduct(){
        return fetch(this.getAllProductUrl())
        .then(function(response){
            return response.json();
        }).then(function(json){
            return Object.values(json);
        })
    }

}

export default ProductListModel;