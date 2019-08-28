const app =  require('express')();
const cors = require('cors');
const request = require("request");

const PROXY_URL = process.env.PROXY_URL;

app.use(cors());

app.use(function(req, res) {
  console.log(req.headers);
  const url = `${PROXY_URL}${req.url}`;
  const options = {
    headers: {
      'authorization': ''
    }
  };
  req.pipe(request({ url, options })).pipe(res);
});

app.listen(process.env.PORT || 3000);
