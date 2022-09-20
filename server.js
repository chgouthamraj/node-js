const http = require('http');
const fs = require('fs');
//it runs evertime a request is make to the server
const server = http.createServer((req, res) => {
  //console.log('request made');
  //req medthod
  //console.log('>>>req<<<', req.url, req.method);

  //set header content type
  //res.setHeader('Content-type', 'text/plain');
  // response back to the browser
  //res.write('hello this is api');

  //send html response back to browser
  //   res.setHeader('Content-type', 'text/html');
  //   res.write('<p>hello this is api</p>');

  res.setHeader('Content-type', 'text/html');
  //basic routing
  let path = './views/';
  switch (req.url) {
    case '/':
      path += 'index.html';
      //to send back a reponse code
      res.statusCode = 200;
      break;
    case '/about':
      path += 'about.html';
      res.statusCode = 200;
      break;
    //redirecting to new url
    case '/about-me':
      res.statusCode = 301;
      res.setHeader('Location', '/about');
      res.end();
      break;
    default:
      path += '404.html';
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log('>>>err<<<', err);
      res.end();
    }
    //res.write(data);
    res.end(data);
  });

  //send an html file
  //   res.setHeader('Content-type', 'text/html');
  //   fs.readFile('./views/index.html', (err, data) => {
  //     if (err) {
  //       console.log('>>>err<<<', err);
  //       res.end();
  //     }
  //     res.write(data);
  //     res.end();
  //   });

  // end the response
  //res.end();
});

//the server needs to be invoked with listen method to listen to requests
server.listen(3000, 'localhost', () => {
  console.log('>>>listening for requests on port 3000<<<');
});
