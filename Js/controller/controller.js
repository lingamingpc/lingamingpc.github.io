import NewsListModel from '../model/NewsListModel.js';
import NewsItemModel from '../model/NewsModel.js';
import NewsListView from '../view/NewsView.js';


class Controller {
    constructor(){
        this.NewsListModel = new NewsListModel();
        this.NewsListView = new NewsListView();
        Controller.newsObjects = [];    
    }
    
    init(){        
        this.NewsListModel.fetchUpcomingMovie()
            .then(data => this.getNewsData(data))
            .then(data => this.displayNewsList(data));
    }

    displayNewsList (newsObjects){
        const templates = [];
        for(const newsObj of newsObjects){
            templates.push(this.NewsListView.getItemTemplate(newsObj));
        }
        this.NewsListView.render(templates);
    }
    
    getNewsData(data){
        const newsObjects = [];
        for (let news of data) {
            const newsObj = new NewsItemModel(news.lin_product_id,news.name, news.image1, news.normal_price,news.specification);
            newsObjects.push(newsObj);
        }
        return newsObjects;
    }
  
}

export default Controller;