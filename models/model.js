const https = require("https");

const fetchScrape = req => {
  console.log("in model");
  https.request(req, res => {
    console.log(res);
  }); //need to send a get request here to the targetUrl
};

module.exports = fetchScrape;
