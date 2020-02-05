const express = require('express');
const router = express.Router();
const BodyParserMiddleware = require('body-parser');
const NotFoundHandler = require('../src/Handler/NotFoundHandler.js');
const HomePageHandler = require('../src/Handler/HomePageHandler.js');
const AuthMiddleware = require('../src/Middleware/AuthMiddleware.js');
const AlbumCoverHandler = require('../src/Handler/AlbumCoverHandler.js');
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
router.get('/search', AlbumCoverHandler);
router.post('/search', [SearchMiddleware, AlbumCoverHandler]);

router.use(NotFoundHandler);

module.exports = router;