const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const users = require('./users');

http.createServer(function (req, res) {
  const url = req.url;
  console.log(url);

  switch (url) {
    case '/':
      console.log('main page');
      staticFile(res, '/html/main.html', '.html');
      break;
  }

}).listen(3500);