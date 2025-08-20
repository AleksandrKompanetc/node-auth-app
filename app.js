const https = require('follow-redirects').https;
const request = require('request');
const awaitRequest = require('async-request');

function ex_01 () {
  const options = {
    'method' : 'GET',
    'hostname' : 'https://api.itgid.info',
    'path' : '/api/12/employee/read',
    'headers' : {
      'apikey' : 'C52A7D86316ccA8B'
    },
    'maxRedirects' : 20
  };

  const req = https.request(options, function(res){
    let chunks = [];

    res.on('data', function (chunk){
      chunks.push(chunk);
    });
    res.on('error', function (error){
      console.log(error);
    });
    res.on('end', function () {
      let body = Buffer.concat(chunks);
      console.log(JSON.parse(body.toString()));
    });
  });
  req.end();
};

// ex_01 ();

function ex_02 () {
  const options = {
    'method' : 'GET',
    'url' : 'https://api.itgid.info/api/12/employee/read',
    'headers' : {
      'apikey' : 'C52A7D86316ccA8B',
    }
  };
  request(options, function (error, response){
    if (error) console.log(error);
    let data = response.body;
    data = JSON.parse(data);
    console.log(data);
  });
}

// ex_02();

async function ex_03 () {
  let data = await awaitRequest('https://api.itgid.info/api/12/employee/read', {
    'method' : 'GET',
    'headers' : {
      'apikey' : 'C52A7D86316ccA8B',
    }
  })
  data = JSON.parse(data.body);
  console.log(data);
}

// ex_03();


// const http = require('http');
// const fs = require('fs');
// const path = require('path');
// const url = require('url');

// const users = require('./users');

// const mimeTypes = {
//     '.html': 'text/html',
//     '.css': 'text/css',
//     '.js': 'text/javascript',
//     '.png': 'image/png',
//     '.jpg': 'image/jpeg',
//     '.gif': 'image/gif',
//     '.svg': 'image/svg+xml',
//     '.ico': 'image/x-icon',
//     '.json': 'application/json',
//     '.mp3': 'audio/mpeg',
//     '.mp4': 'video/mp4',
//     '.txt': 'text/plain',
//     '.pdf': 'application/pdf',
//     '.doc': 'application/msword',
//     '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
//     '.xls': 'application/vnd.ms-excel',
//     '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
//     '.woff': 'application/font-woff',
//     '.woff2': 'application/font-woff2',
//     '.ttf': 'application/font-ttf',
//     '.eot': 'application/vnd.ms-fontobject',
//     '.otf': 'application/font-otf',
//     '.swf': 'application/x-shockwave-flash',
//     '.wasm': 'application/wasm',
// }

// function staticFile(res, filePath, ext) {
//   res.setHeader('Content-Type', mimeTypes[ext]);
//   fs.readFile('./public'+filePath, (error, data) => {
//     if (error) {
//       res.statusCode = 404;
//       res.end();
//     }
//     res.end(data);
//   })
// }

// http.createServer(function (req, res) {
//   let url = req.url;
//   console.log(url);

//   switch (url) {
//     case '/':
//       console.log('main page');
//       staticFile(res, '/html/main.html', '.html');
//       break;
//     case '/about':
//       console.log('about page');
//       staticFile(res, '/html/about.html', '.html');
//       break;
//     case '/contact':
//       console.log('contact page');
//       staticFile(res, '/html/contact.html', '.html');
//       break;
//     case '/admin':
//       console.log('admin page');
//       staticFile(res, '/html/admin.html', '.html');
//       break;
//     case '/login':
//       console.log('login page');
//       staticFile(res, '/html/login.html', '.html');
//       break;
//     case '/cabinet':
//       console.log('checkuser');

//       break;
//     default:
//       const extname = String(path.extname(url)).toLocaleLowerCase();
//       if (extname in mimeTypes) {
//         staticFile(res, url, extname);
//       } else {
//         res.statusCode = 404;
//         res.end();
//       }
//   }

// }).listen(3711);