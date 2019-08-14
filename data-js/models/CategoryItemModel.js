import APIDataModel from "./APIModel.js";

class Category extends APIDataModel{
    constructor(
        cat_id,
        cat_name){
            super();
            this.cat_id = cat_id;
            this.cat_name = cat_name;
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

export default Category;