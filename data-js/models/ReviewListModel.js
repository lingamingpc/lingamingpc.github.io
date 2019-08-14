import APIDataModel from "./APIModel.js";

class ReviewListModel extends APIDataModel{

    getAllReviewUrl(){
        return this.rootURL + this.allReviews;
    }

    fetchAllReview(){
        return fetch(this.getAllReviewUrl())
        .then(function(response){
            return response.json();
        }).then(function(json){
            return Object.values(json);
        })
    }

}

export default ReviewListModel;