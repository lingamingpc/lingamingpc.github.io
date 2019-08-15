
import CategoriesListModel from '/data-js/models/CategoriesListModel.js';
import CategoryItemModel from '/data-js/models/CategoryItemModel.js';
import CategoryListView from '/data-js/views/CategoryListView.js';

import ArticleListModel from '/data-js/models/ArticleListModel.js';
import ArticleItemModel from '/data-js/models/ArticleItemModel.js';
import ArticleListView from '/data-js/views/ArticleListView.js';


class ArticleController {
    constructor() {
        this.categoriesListModel = new CategoriesListModel();
        this.categoryListView = new CategoryListView();
        

        this.articleListModel = new ArticleListModel();
        this.articleItemModel = new ArticleItemModel();
        this.articleListView = new ArticleListView();
        this.articleObjects = [];
        this.categoryObjects = [];
    }

    init() {


        this.categoriesListModel.fetchAllCategories()
            .then((data) => {
                this.getAllCategoryData(data)
                this.displayCategoryList(data)
            })
    }


    displayProductList(productObjects) {
        const templates = [];
        for (let productObj of productObjects) {
            console.log(productObj.name)
            templates.push(this.productListView.getItemTemplate(productObj));
        }

        this.productListView.renderProductList(templates);
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
}

export default ArticleController;