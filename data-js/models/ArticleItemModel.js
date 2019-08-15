import APIDataModel from "./APIModel.js";

class Article extends APIDataModel{
    constructor(
        article_id,
        article_title,
        article_image,
        article_description,
        cat_id){
            super();
            this.article_id = article_id;
            this.article_title = article_title;
            this.article_image = article_image;
            this.article_description = article_description;
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

export default Article;