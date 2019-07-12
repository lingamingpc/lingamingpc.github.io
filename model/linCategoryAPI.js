const axios= require('axios');
const express = require('express');
const app = express();



const  CategoryAPI =() =>{
    const url = 'https://script.googleusercontent.com/macros/echo?user_content_key=OZ0805cp35lneCQxav9QLPh2sUQMXV6BHg81-W3eClurJOZgSZ4r_a0GHbNPKMQ87xxXwlGv5q5DFAHx9muaWZkf93oSpRp7m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnCMNQ2mocweq9DniDbkKUJuvek5HfUggQVr49SMCKKU_nKmQ2KuuwCiDIQYYyk0Vp9igTzWCKfF6&lib=MdYr_b2fqARXWEBx3WcbMebhZhSQ1aZKm';
    axios.get(url)
    .then(response => console.log(response.data))
    .catch(error => console.log(error));
}

module.exports = CategoryAPI;