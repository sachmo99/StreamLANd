// src/app.js
const express = require('express');
const videoController = require('./controllers/videoController');
const homeController = require('./controllers/homeController');
//const cacheMiddleware = require('./utils/redis-cache');
const cors = require('cors');
const app = express();
const path = require('path');   
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use('/videos', express.static(path.join(__dirname, './videos')));

// Routes for serving HLS manifest and segments
app.get('/list',homeController.getListOfMovies);
app.get('/videos/:videoId/:segmentId', videoController.getFile);
app.get('/videos/:videoId', videoController.getManifest);


module.exports = app;
