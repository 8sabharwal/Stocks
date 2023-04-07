const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://latest-stock-price.p.rapidapi.com/price',
  params: {Indices: '<REQUIRED>'},
  headers: {
    'X-RapidAPI-Key': '3370a1739dmsh58965d18ef789bfp19de1fjsn3a66fb586775',
    'X-RapidAPI-Host': 'latest-stock-price.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});