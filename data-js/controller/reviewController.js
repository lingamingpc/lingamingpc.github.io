import ReviewListModel from '/data-js/models/ReviewListModel.js';
import ReviewItemModel from '/data-js/models/ReviewItemModel.js';
import ReviewListView from '/data-js/views/ReviewListView.js';

import CategoriesListModel from '/data-js/models/CategoriesListModel.js';
import CategoryItemModel from '/data-js/models/CategoryItemModel.js';
import CategoryListView from '/data-js/views/CategoryListView.js';


class ReviewController {
    constructor() {
        // this.productItemModel = new ProductItemModel();

        this.categoriesListModel = new CategoriesListModel();
        this.categoryListView = new CategoryListView();

        this.reviewListModel = new ReviewListModel();
        this.reviewListView = new ReviewListView();
        this.reviewObjects = [];
        this.categoryObjects = [];
    }

    init() {

        this.reviewListModel.fetchAllReview()
            .then((data) => {
                console.log(data)
                this.getAllReviewData(data)
                this.displayReviewList(data);
            })
        this.categoriesListModel.fetchAllCategories()
            .then((data) => {
                this.getAllCategoryData(data)
                this.displayCategoryList(data)
            })
    }


    displayReviewList(reviewObjects) {
        this.categoryID = this.getQueryVariable("cat_id");
        console.log("categoryID " + this.categoryID);
        const templates = [];
        for (let reivewObj of Object.values(reviewObjects)) {
            if (reivewObj.cat_id == this.categoryID) {
                console.log(reivewObj.name);
                templates.push(this.reviewListView.getItemTemplate(reivewObj));
            } else if(this.categoryID == 0){
                templates.push(this.reviewListView.getItemTemplate(reivewObj));
            }
        }

        this.reviewListView.renderReviewList(templates);
    }


    getAllReviewData(data) {
        this.reviewObjects = [];
        for (let review of Object.values(data)) {
            const reviewObj = new ReviewItemModel(
                review.reviews_id,
                review.review_title,
                review.review_body,
                review.reviewr_name,
                review.cat_id,
                review.review_created_at
            )
            this.reviewObjects.push(reviewObj);
        }

        return this.reviewObjects;
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

    displayCategoryList(categoryObjects) {
        const templates = [];
        for (let categoryObj of Object.values(categoryObjects)) {
            // console.log(categoryObj.cat_name)
            templates.push(this.categoryListView.getItemTemplate(categoryObj));
        }

        this.categoryListView.renderCategoryList(templates);
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

export default ReviewController;