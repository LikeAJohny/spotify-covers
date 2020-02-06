const express = require('express');
const router = express.Router();
const BodyParserMiddleware = require('body-parser');
const NotFoundHandler = require('../src/Handler/NotFoundHandler.js');
const HomePageHandler = require('../src/Handler/HomePageHandler.js');
const AuthMiddleware = require('../src/Middleware/AuthMiddleware.js');
const SearchResultHandler = require('../src/Handler/SearchResultHandler.js');
const SearchMiddleware = require('../src/Middleware/SearchMiddleware.js');

// Authentication
router.use('/', AuthMiddleware);

router.use(BodyParserMiddleware.urlencoded({ extended: false }));
router.use(BodyParserMiddleware.json());

// HomePage
/*
 * Hat keine Auswirkungen, da index.html wohl Standard mäßig gerendert wird?!
 * ToDo: Checken wie das läuft.
 */
router.get('/', HomePageHandler);

// General Spotify Search
router.get('/search', SearchResultHandler);
router.post('/search', [SearchMiddleware, SearchResultHandler]);

router.use(NotFoundHandler);

module.exports = router;