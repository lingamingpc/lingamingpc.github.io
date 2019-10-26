import APIDataModel from "./APIModel.js";

class Article extends APIDataModel{
    constructor(
        article_id,
        article_title,
        article_image,
        article_description,
        article_created_at,
        cat_id,
        writer_name){
            super();
            this.article_id = article_id;
            this.article_title = article_title;
            this.article_image = article_image;
            this.article_description = article_description;
            this.article_created_at = article_created_at;
            this.cat_id = cat_id;
            this.writer_name = writer_name;
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