const express = require('express');
const app = express();
const config = require('./config/config.local.js');
const routes = require('./config/routes.js');

app.set('view engine', 'pub');
app.use(config.staticFiles);
app.use('/', routes);

app.listen(7331);