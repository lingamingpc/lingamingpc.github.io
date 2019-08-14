import APIDataModel from "./APIModel.js";

class Product extends APIDataModel{
    constructor(
        lin_product_id,
        name,
        normal_price,
        discount_price,
        specification,
        discription,
        image1,
        image2,
        image3,
        cat_id,
        brand_id,){
            super();
            this.lin_product_id = lin_product_id;
            this.name = name;
            this.normal_price = normal_price;
            this.discount_price = discount_price;
            this.specification = specification;
            this.discription = discription;
            this.image1 = image1;
            this.image2 = image2;
            this.image3 = image3;
            this.cat_id = cat_id;
            this.brand_id = brand_id;
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

export default Product;