import APIDataModel from "./APIModel.js";

class Review extends APIDataModel{
    constructor(
        reviews_id,
        review_title,
        review_image,   
        review_body,
        reviewr_name,
        cat_id){
            super();
            this.reviews_id = reviews_id;
            this.review_title = review_title;
            this.review_image = review_image;
            this.review_body = review_body;
            this.reviewr_name = reviewr_name;
            this.cat_id = cat_id;
        }

        // updateData(data){
        //     this.product_id = product_id;
        //     this.product_name = product_name;
        //     this.product_desc = product_desc;
        //     this.product_price = product_price;
        //     this.product_image_one = product_image_one;
        //     this.product_image_two = product_image_two;
        //     this.product_image_three = product_image_three;

        //     return this;
        // }
}

export default Review;