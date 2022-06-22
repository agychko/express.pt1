const express = require('express');
const middleware = require('../config/middleware');
const routes = require('../config/router');

const app = express();

middleware.init(app);

routes.init(app);

const server = app.listen(3000);

process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
  });
});
