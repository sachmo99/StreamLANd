// src/utils/cache.js
const redis = require('redis');
const client = redis.createClient();

client.on('error', (err) => console.error('Redis error:', err));

module.exports = (req, res, next) => {
    const { videoId } = req.params;

    client.get(videoId, (err, data) => {
        if (err) throw err;

        if (data) {
            res.setHeader('Content-Type', 'application/vnd.apple.mpegurl');
            res.send(data);
        } else {
            res.sendResponse = res.send;
            res.send = (body) => {
                client.setex(videoId, 3600, body); // Cache for 1 hour
                res.sendResponse(body);
            };
            next();
        }
    });
};
