
import CategoriesListModel from '../../data-js/models/CategoriesListModel.js';
import CategoryItemModel from '/data-js/models/CategoryItemModel.js';
import CategoryListView from '/data-js/views/CategoryListView.js';

import ArticleListModel from '../../data-js/models/ArticleListModel.js';
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

        this.articleListModel.fetchAllArticle()
        .then((data) =>{
            this.getAllArticleData(data)
             this.displayArticleList(data)
        })

        this.categoriesListModel.fetchAllCategories()
            .then((data) => {
                this.getAllCategoryData(data)
                this.displayCategoryList(data)
            })
    }


    displayCategoryList(categoryObjects) {
        const templates = [];
        for (let categoryObj of Object.values(categoryObjects)) {
            // console.log(categoryObj.cat_name)
            templates.push(this.categoryListView.getItemTemplate(categoryObj));
        }

        this.categoryListView.renderCategoryList(templates);
    }

    displayArticleList(articleObjects) {
        this.categoryID = this.getQueryVariable("cat_id");
        console.log("categoryID "+this.categoryID);
        const templates = [];
        for (let articleObj of Object.values(articleObjects)) {
            if(articleObj.cat_id == this.categoryID){
                // console.log(productObj.name)
                templates.push(this.articleListView.getItemTemplate(articleObj));
            } else if(this.categoryID == 0){
                templates.push(this.articleListView.getItemTemplate(articleObj));
            }
            
        }

        this.articleListView.renderArticleList(templates);
    }


    getAllArticleData(data) {
        this.articleObjects = [];
        for (let article of Object.values(data)) {
            const articleObj = new ArticleItemModel(
                article.article_id,
                article.article_title,
                article.article_image,
                article.article_description,
                article.article_created_at,
                article.cat_id
            )
            this.articleObjects.push(articleObj);
        }

        return this.articleObjects;
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

export default ArticleController;