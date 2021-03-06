class ArticleListView{
    constructor(controller){
        this.controller = controller;
        this.itemTemplate = document.getElementById("article-list-template").innerHTML;
        this.sviewport = document.getElementById("article-item-viewport");
    }


    getItemTemplate(reviewObj){

        const result = this.itemTemplate
                .replace("{{this.article_id}}", reviewObj.aritcle_id)
                .replace("{{this.article_title}}", reviewObj.article_title)
                .replace("{{this.article_image}}", reviewObj.article_image)
                .replace("{{this.article_description}}",reviewObj.article_description)
                .replace("{{this.article_created_at}}",reviewObj.article_created_at)
                .replace("{{this.cat_id}}",reviewObj.cat_id)
                .replace("{{this.writer_name}}", reviewObj.writer_name)

                .replace("{{para.cat_id}}", reviewObj.reveiw_id)
                .replace("{{para.cat_name}}", reviewObj.review_title)  
                
                .replace("{{n.article_id}}", reviewObj.aritcle_id)
                .replace("{{n.article_title}}", reviewObj.article_title)
                .replace("{{n.article_image}}", reviewObj.article_image)
                .replace("{{n.article_description}}",reviewObj.article_description)
                .replace("{{n.article_created_at}}",reviewObj.article_created_at)
                .replace("{{n.cat_id}}",reviewObj.cat_id)
                .replace("{{n.writer_name}}", reviewObj.writer_name)

                .replace("{{n.cat_id}}", reviewObj.reveiw_id)
                .replace("{{n.cat_name}}", reviewObj.review_title)  
        return result;

    }


    // renderCategoryList(templates){
    //     this.sviewport.innerHTML = "";
    //     for(let template of templates){
    //         console.log(template)
    //         this.sviewport.innerHTML += template;
    //     }
    // }


    renderArticleList(templates){
        this.sviewport.innerHTML = "";
        for(let template of templates){
            this.sviewport.innerHTML += template;
        }
    }

}

export default ArticleListView;