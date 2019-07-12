const axios= require('axios');
const express = require('express');
const app = express();



const  ProductAPI =() =>{
    const url = 'https://script.googleusercontent.com/macros/echo?user_content_key=SmNo0bfkPXv82-ZXfM8uM3lhtRQwyiFk6-uaH-LudBhEghOx6ZW3ANzchAbGTbH6ZmMbsBEoIqPGvnmINf7lzW710EzNTkFom5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnCjufAch7aJYcL9m_hR6r6zVw9V78vH_jWiQWSaRkw6tv-B4EonR-nLzqMUGhG8gQEW-dnclfdIe&lib=MJM-rHQcjfszFFUKqF0EPlyVeGV5IAGtZ';
    axios.get(url)
    .then(response => console.log(response.data))
    .catch(error => console.log(error));
}

module.exports = ProductAPI;