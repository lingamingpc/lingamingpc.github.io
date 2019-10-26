import APIDataModel from "./APIModel.js";

class ArticleListModel extends APIDataModel{

    getAllArticleUrl(){
        return this.rootURL + this.allArticle;
    }

    fetchAllArticle(){
        return fetch(this.getAllArticleUrl())
        .then(function(response){
            return response.json();
        }).then(function(json){
            return Object.values(json);
        })
    }

}
export default ArticleListModel;