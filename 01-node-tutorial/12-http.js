const http = require('http');

const server = http.createServer((req, res) => {
  //   console.log(req);
  //   res.write('welcome to our home page');
  //   res.end();
  if (req.url === '/') {
    res.end('welcome to our home page');
    return;
  }
  if (req.url === '/about') {
    res.end('This is the about page');
    return;
  }
  res.end(`
  <h1>Oops!</h1>
  <p>we can't seem to find the page you are looking for!</p>
  <a href="/">back home</a>
  `);
});

server.listen(5000, () => console.log('server running on port 5000...'));
