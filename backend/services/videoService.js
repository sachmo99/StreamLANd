// src/services/videoService.js
const fs = require('fs');
const path = require('path');

exports.getManifest = (videoId) => {
    return new Promise((resolve, reject) => {
        const manifestPath = path.join(__dirname, '../videos', videoId, 'master.m3u8');
        console.log(manifestPath)
        fs.readFile(manifestPath, 'utf8', (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
};

exports.getSegment = (videoId, segment) => {
    return new Promise((resolve, reject) => {
        const segmentPath = path.join(__dirname, '../videos', videoId, segment+".m4s");
        console.log(segmentPath);
        fs.readFile(segmentPath, (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
};