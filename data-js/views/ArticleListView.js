class CategoryListView{
    constructor(controller){
        this.controller = controller;
        this.itemTemplate = document.getElementById("category-list-template").innerHTML;
        this.sviewport = document.getElementById("category-item-viewport");
    }


    getItemTemplate(categoryObj){
        const result = this.itemTemplate
                .replace("{{this.cat_id}}", categoryObj.cat_id)
                .replace("{{this.cat_name}}", categoryObj.cat_name)
                
                .replace("{{para.cat_id}}", categoryObj.cat_id)
                .replace("{{para.cat_name}}", categoryObj.cat_name)
                

        return result;

    }


    renderCategoryList(templates){
        this.sviewport.innerHTML = "";
        for(let template of templates){
            console.log(template)
            this.sviewport.innerHTML += template;
        }
    }

}

export default CategoryListView;