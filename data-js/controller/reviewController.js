import ReviewListModel from '/data-js/models/ReviewListModel.js';
import ReviewItemModel from '/data-js/models/ReviewItemModel.js';
import ReviewListView from '/data-js/views/ReviewListView.js';


class ReviewController {
    constructor() {
        // this.productItemModel = new ProductItemModel();
        this.reviewListModel = new ReviewListModel();
        this.reviewListView = new ReviewListView();
        this.reviewObjects = [];
    }

    init() {

        this.reviewListModel.fetchAllReview()
            .then((data) => {
                
                this.getAllReviewData(data)
                this.displayReviewList(data);
            })
            .then((data) => {
                
                
            })
    }


    displayReviewList(reviewObjects) {
        const templates = [];
        for (let reivewObj of Object.values(reviewObjects)) {
            console.log(reivewObj.name);
            templates.push(this.reviewListView.getItemTemplate(reivewObj));
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
                review.cat_id
            )
            this.reviewObjects.push(reviewObj);
        }

        return this.reviewObjects;
    }
}

export default ReviewController;