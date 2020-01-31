const express = require('express');
const app = express();
const config = require('./config/config.js');
const routes = require('./config/routes.js');

app.use(config.staticFiles);
app.use('/', routes);

app.listen(7331);