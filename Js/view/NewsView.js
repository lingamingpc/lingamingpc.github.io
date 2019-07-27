class NewsListView {
    constructor(){
        this.itemTemplate = document.getElementById('movie-info-template').innerHTML;
        this.viewport = document.getElementById("viewport");
    }   
    getItemTemplate(object){
        const result = this.itemTemplate
        .replace("{{this.title}}",object.name)
        .replace("{{this.poster}}",object.image)
        .replace("{{this.casts}}",object.specification)
        .replace("{{this.link}}",object.normal_price);
        return result;
    }    

    render(templates) {  
        for (let template of templates) {        
            this.viewport.innerHTML += template;        
        }
    }
}


export default NewsListView;