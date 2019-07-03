const https = require("https");

const fetchScrape = req => {
  console.log("in model");
  https.request(req, res => {
    console.log(res);
  });
};

// testing 2

module.exports = fetchScrape;
