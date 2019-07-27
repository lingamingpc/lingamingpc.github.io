

class APIDataModel {
    constructor(){
        this.rootURL = "https://script.googleusercontent.com/macros/echo?user_content_key=hFcUTp6HI625TrtPNRQnFAE_eO7X4fnR_BUwQbUrJ-06-kHODWw3fJZiY3dPoepJOhe5SJikgH_1nK760OVznr6PZVOX29sGm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnCjufAch7aJYcL9m_hR6r6zVw9V78vH_jWiQWSaRkw6tv-B4EonR-nLzqMUGhG8gQEW-dnclfdIe&lib=MJM-rHQcjfszFFUKqF0EPlyVeGV5IAGtZ";
    }     

    getNewsApiUrl(){
        return this.rootURL;
    } 
}

export default APIDataModel;