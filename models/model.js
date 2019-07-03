const https = require("https");

const fetchScrape = req => {
  console.log("in model");
  https.request(req, res => {
    console.log(res);
  });
};

module.exports = fetchScrape;
