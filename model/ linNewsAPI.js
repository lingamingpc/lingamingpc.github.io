const axios= require('axios');
const express = require('express');
const app = express();



const  NewsAPI =() =>{
    const url = 'https://script.googleusercontent.com/macros/echo?user_content_key=oU_1T7M9WtnWfN3siv_QjEINIi9kum4N5WeeBhsn6wpFutT1lOSVBaJRRVUeneBl1oIGdZ4q4bt7wQBqjb_pK69ZDh_L_QFlm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnHNrqMUUCax8wN-lcuICNsROvc0jPWqUZQp0zWFuQlJ6INz4dKHCfrj516ad3KA6z5cdv3aNHr6K&lib=MPbd4jKers7OX-Wa31L9HEiVeGV5IAGtZ';
   return axios.get(url)
    .then(response => console.log(response.data))
    .catch(error => console.log(error));
}

module.exports = NewsAPI;