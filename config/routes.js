const express = require('express');
const router = express.Router();
const BodyParserMiddleware = require('body-parser');
const NotFoundHandler = require('../src/Handler/NotFoundHandler.js');
const AuthMiddleware = require('../src/Middleware/AuthMiddleware.js');
const SearchResultHandler = require('../src/Handler/SearchResultHandler.js');
const SearchMiddleware = require('../src/Middleware/SearchMiddleware.js');

// Authentication
router.use('/', AuthMiddleware);

router.use(BodyParserMiddleware.urlencoded({ extended: false }));
router.use(BodyParserMiddleware.json());

// HomePage
router.get('/', SearchResultHandler);
// Search Request
router.post('/', [SearchMiddleware, SearchResultHandler]);

router.use(NotFoundHandler);

module.exports = router;