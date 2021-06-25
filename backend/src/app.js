/* -------- */
const express = require('express');
const app = express();

// const hostname = '127.0.0.1';
const hostname = 'localhost';
const port = 3002;

// rutas
const routes = require('./routes/index.routes');
// app.use(express.json());
// app.use(express.bodyParser());
app.use(routes);

app.listen(port, hostname,() => {
    console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`)
})












// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3002;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hola Mundo');
// });

// server.listen(port, hostname, () => {
//   console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
// });