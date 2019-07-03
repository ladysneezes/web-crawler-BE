const fetchScrape = require("../models/model");

getScrape = (req, res) => {
  console.log("in controller");
  const reqObj = JSON.parse(req);
  const { targetUrl } = reqObj;
  fetchScrape(targetUrl);
};

module.exports = { getScrape };
