// src/controllers/videoController.js
const videoService = require('../services/videoService');

exports.getManifest = async (req, res) => {
    try {
        const { videoId } = req.params;
        console.log(`Fetching manifest for video: ${videoId}`);
        const manifest = await videoService.getManifest(videoId);
        res.setHeader('Content-Type', 'application/vnd.apple.mpegurl');
        res.setHeader('Accept-Ranges', 'bytes');
        res.send(manifest);
    } catch (error) {
        console.error('Error fetching manifest:', error);
        res.status(404).send('Manifest not found');
    }
};

exports.getFile = async (req,res) => {
    try{
        console.log("inside getFile");
        const {videoId, fileName } = req.params;
        console.log(`Fetching segment for video: ${videoId}, segment: ${fileName}`);
        const fileToShare = path.join(__dirname, '../../videos', videoId, segment+".m4s");
        res.sendFile(fileToShare);
    }
    catch (error) {
        console.error(error);
    }
}

exports.getSegment = async (req, res) => {
    try {
        console.log("inside getSegment");
        const { videoId, segment } = req.params;
        console.log(`Fetching segment for video: ${videoId}, segment: ${segment}`);
        const segmentData = await videoService.getSegment(videoId, segment);
        console.log(segmentData);
        res.setHeader('Content-Type', 'video/iso.segment');
        res.send(segmentData);
    } catch (error) {
        console.error('Error fetching segment:', error);
        res.status(404).send('Segment not found');
    }
};
