import ProductListModel from '/data-js/models/ProductListModel.js';
import ProductItemModel from '/data-js/models/ProductItemModel.js';
import CategoriesListModel from '/data-js/models/CategoriesListModel.js';
import CategoryItemModel from '/data-js/models/CategoryItemModel.js';



import ProductListView from '/data-js/views/ProductListView.js';
import CategoryListView from '/data-js/views/CategoryListView.js';


class Controller {



    constructor() {
        // this.productItemModel = new ProductItemModel();
        this.productListModel = new ProductListModel();
        this.productListView = new ProductListView();
        this.categoriesListModel = new CategoriesListModel();
        this.categoryListView = new CategoryListView();
        this.productObjects = [];
        this.categoryObjects = [];
        this.categoryID = 0;
    }

    init() {

        this.productListModel.fetchAllProduct()
            .then((data) => {

                this.getAllProductData(data);
                this.displayProductList(data);
                this.displayUsedProductList(data);

            })
            .then((data) => {
                // console.log(data)

            })

        this.categoriesListModel.fetchAllCategories()
            .then((data) => {
                this.getAllCategoryData(data)
                this.displayCategoryList(data)
            })
    }


    displayProductList(productObjects) {
        this.categoryID = this.getQueryVariable("cat_id");
        console.log("newcategoryID" + this.categoryID);
        const templates = [];
        for (let productObj of productObjects) {
            if (productObj.cat_id == this.categoryID) {
                console.log(productObj.name)
                if (productObj.type == "new") {
                    templates.push(this.productListView.getItemTemplate(productObj));
                }
            } else if (this.categoryID == 0) {
                if (productObj.type == "new") {
                    templates.push(this.productListView.getItemTemplate(productObj));
                }
            }
        }

        this.productListView.renderProductList(templates);
    }

    displayUsedProductList(productObjects) {
        this.categoryID = this.getQueryVariable("cat_id");
        console.log("usedcategoryID" + this.categoryID);
        const templates = [];
        for (let productObj of productObjects) {
            console.log("useproductcat" + productObj.cat_id);
            if (productObj.cat_id == this.categoryID) {
                if (productObj.type == "used") {
                    console.log("usedcategoryID" + this.categoryID);
                    templates.push(this.productListView.getItemTemplate(productObj));
                }
            } else if (this.categoryID == 0) {
                if (productObj.type == "used") {
                    console.log("usedcategoryID" + this.categoryID);
                    templates.push(this.productListView.getItemTemplate(productObj));
                }
            }
        }

        this.productListView.renderUsedProductList(templates);
    }

    displayCategoryList(categoryObjects) {
        const templates = [];
        for (let categoryObj of Object.values(categoryObjects)) {
            console.log(categoryObj.cat_name)
            templates.push(this.categoryListView.getItemTemplate(categoryObj));
        }

        this.categoryListView.renderCategoryList(templates);
    }


    getAllProductData(data) {
        this.categoryObjects = [];
        for (let product of Object.values(data)) {
            const productObj = new ProductItemModel(
                product.lin_product_id,
                product.name,
                product.normal_price,
                product.dicount_price,
                product.specification,
                product.discription,
                product.image1,
                product.image2,
                product.image3,
                product.category_id,
                product.brand_id,
                product.cat_name
            )
            this.productObjects.push(productObj);
        }

        return this.productObjects;
    }

    getAllCategoryData(data) {
        this.categoryObjects = [];
        for (let category of Object.values(data)) {
            const categoryObj = new CategoryItemModel(
                category.cat_id,
                category.cat_name
            )
            this.categoryObjects.push(categoryObj);
        }

        return this.categoryObjects;
    }

    makeSplit(someText) {
        var temp = someText.replace(/%20/g, " ");

        return temp;
    }

    getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] == variable) {
                return pair[1];
            }
        }
        return (false);
    }

}

export default Controller;