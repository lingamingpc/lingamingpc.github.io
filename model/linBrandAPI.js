const axios= require('axios');
const express = require('express');
const app = express();



const  BrandAPI =() =>{
    const url = 'https://script.googleusercontent.com/macros/echo?user_content_key=m0rlhvSz808ZW1cuzJAG6vWKKH4zVC7GdVzS4wPRMlCtVquYW1aLdXhYOUDY6xzuTb2vUyU924AKYkWAV3Lnx3f6LpuMeGcFm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnIq7rb0Fwm0kcgKoNTrqKf0Y7VU_mtXop7bMyEVozApLAWXKD_0tE66b86b1ki4ZYmluNIrqq7YA&lib=MSBVszyJUGmEWKAxS33JUZrhZhSQ1aZKm';
   return axios.get(url)
    .then(response => console.log(response.data))
    .catch(error => console.log(error));
}

module.exports = BrandAPI;