class ReviewListView{
    constructor(controller){
        this.controller = controller;
        this.itemTemplate = document.getElementById("review-list-template").innerHTML;
        this.sviewport = document.getElementById("review-list-viewport");
    }


    getItemTemplate(reviewObj){
        const result = this.itemTemplate
                .replace("{{this.reviews_id}}", reviewObj.reviews_id)
                .replace("{{this.review_title}}", reviewObj.review_title)
                .replace("{{this.review_image}}",reviewObj.review_image)
                .replace("{{this.review_body}}", reviewObj.review_body)
                .replace("{{this.reviewr_name}}", reviewObj.reviewr_name)
                .replace("{{this.cat_id}}", reviewObj.cat_id)
                
                .replace("{{para.reviews_id}}", reviewObj.reviews_id)
                .replace("{{para.review_title}}", reviewObj.review_title)
                .replace("{{para.review_image}}",reviewObj.review_image)
                .replace("{{para.review_body}}", reviewObj.review_body)
                .replace("{{para.reviewr_name}}", reviewObj.reviewr_name)
                .replace("{{para.cat_id}}", reviewObj.cat_id)
           
        return result;

    }


    renderReviewList(templates){
        this.sviewport.innerHTML = "";
        for(let template of templates){
            console.log(template)
            this.sviewport.innerHTML += template;
        }
    }

}

export default ReviewListView;