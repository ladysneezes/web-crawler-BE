const fetch = require("node-fetch");
const JSDOM = require("jsdom").JSDOM;

const fetchScrape = req => {
<<<<<<< HEAD
  console.log("in model");
  https.request(req, res => {
    console.log(res);
  });
=======
  let selector = "a[href]";
  let url = req;

  fetch(url)
    .then(resp => resp.text())
    .then(text => {
      // console.log("text :", text);
      let dom = new JSDOM(text);
      // console.log("dom:", dom);
      let { document } = dom.window;
      // console.log("document :", document);
      let list = [...document.querySelectorAll(selector)].map(
        anchorTag => anchorTag.href
      );
      return list;
    })
    .then(list => {
      let count = 0;
      Promise.all(
        list.map(path =>
          fetch(`${url}/${path}`).then(response => {
            count++;
            return [{ [path]: response.status }];
          })
        )
      ).then(array => {
        const answer = [];
        array.forEach(nest => answer.push(nest[0]));
        return answer;
      });
    });
>>>>>>> 38737c7e5672be3138e1a701af3c7ca8fb3788ad
};

// testing 2

module.exports = fetchScrape;
