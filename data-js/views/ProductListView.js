class ProductListView{
    constructor(controller){
        this.controller = controller;
        this.itemTemplate = document.getElementById("product-list-template").innerHTML;
        this.sviewport = document.getElementById("product-list-view-port");

        // this.usedItemTemplate = document.getElementById("product-used-list-template").innerHTML;
        // this.usedViewport = document.getElementById("product-used-list-view-port");
    }


    getItemTemplate(productObj){
        const result = this.itemTemplate
                .replace("{{this.lin_product_id}}", productObj.lin_product_id)
                .replace("{{this.name}}", productObj.name)
                .replace("{{this.normal_price}}", productObj.normal_price)
                .replace("{{this.discount_price}}", productObj.discount_price)
                .replace("{{this.specification}}", productObj.specification)
                .replace("{{this.description}}", productObj.description)
                .replace("{{this.product_name}}", productObj.product_name)
                .replace("{{this.image1}}", productObj.image1)
                .replace("{{this.image2}}", productObj.image2)
                .replace("{{this.image3}}", productObj.image3)
                .replace("{{this.cat_id}}", productObj.cat_id)
                .replace("{{this.brand_id}}", productObj.brand_id)
                .replace("{{this.type}}", productObj.type)
                
                .replace("{{para.lin_product_id}}", productObj.lin_product_id)
                .replace("{{para.name}}", productObj.name)
                .replace("{{para.normal_price}}", productObj.normal_price)
                .replace("{{para.discount_price}}", productObj.discount_price)
                .replace("{{para.specification}}", productObj.specification)
                .replace("{{para.description}}", productObj.description)
                .replace("{{para.product_name}}", productObj.product_name)
                .replace("{{para.image1}}", productObj.image1)
                .replace("{{para.image2}}", productObj.image2)
                .replace("{{para.image3}}", productObj.image3)
                .replace("{{para.cat_id}}", productObj.cat_id)
                .replace("{{para.brand_id}}", productObj.brand_id)
                .replace("{{para.type}}", productObj.type)

        return result;

    }

    // getUsedItemTemplate(productObj){
    //     const result = this.itemTemplate
    //     .replace("{{this.used.lin_product_id}}", productObj.lin_product_id)
    //     .replace("{{this.used.name}}", productObj.name)
    //     .replace("{{this.used.normal_price}}", productObj.normal_price)
    //     .replace("{{this.used.discount_price}}", productObj.discount_price)
    //     .replace("{{this.used.specification}}", productObj.specification)
    //     .replace("{{this.used.description}}", productObj.description)
    //     .replace("{{this.used.product_name}}", productObj.product_name)
    //     .replace("{{this.used.image1}}", productObj.image1)
    //     .replace("{{this.used.image2}}", productObj.image2)
    //     .replace("{{this.used.image3}}", productObj.image3)
    //     .replace("{{this.used.cat_id}}", productObj.cat_id)
    //     .replace("{{this.used.brand_id}}", productObj.brand_id)
    //     .replace("{{this.used.type}}", productObj.type)
        
    //     .replace("{{para.used.lin_product_id}}", productObj.lin_product_id)
    //     .replace("{{para.used.name}}", productObj.name)
    //     .replace("{{para.used.normal_price}}", productObj.normal_price)
    //     .replace("{{para.used.discount_price}}", productObj.discount_price)
    //     .replace("{{para.used.specification}}", productObj.specification)
    //     .replace("{{para.used.description}}", productObj.description)
    //     .replace("{{para.used.product_name}}", productObj.product_name)
    //     .replace("{{para.used.image1}}", productObj.image1)
    //     .replace("{{para.used.image2}}", productObj.image2)
    //     .replace("{{para.used.image3}}", productObj.image3)
    //     .replace("{{para.used.cat_id}}", productObj.cat_id)
    //     .replace("{{para.used.brand_id}}", productObj.brand_id)
    //     .replace("{{para.used.type}}", productObj.type)

    //     return result;

    // }


    renderProductList(templates){
        this.sviewport.innerHTML = "";
        for(let template of templates){
            console.log(template)
            this.sviewport.innerHTML += template;
        }
    }

    // renderUsedProductList(templates){
    //     this.usedViewport.innerHTML = "";
    //     for(let template of templates){
    //         console.log(template)
    //         this.usedViewport.innerHTML += template;
    //     }
    // }

}

export default ProductListView;