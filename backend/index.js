const express  = require('express')
const path = require('path');
var videoplayback = require(__dirname + '/videoFinder.js')
const app = express();
const fs = require('fs');
app.get("/",function(req,res) {
    console.log(path.dirname(__dirname));
    res.setHeader("Access-Control-Allow-Origin","*");
    res.sendFile(__dirname + "/homepage.html")

});
app.post("/",function(req,res) {
    res.setHeader("Access-Control-Allow-Origin","*");
    //send list of video directories in the parent directory
    console.log(req);
    res.status(200).send(1);
    
});
app.get("/list",function(req,res) {
    res.setHeader("Access-Control-Allow-Origin","*");
    //console.log("")
    //post request from listpage.html to get the filenames.
    const foldersWithMediaFiles = videoplayback.getFoldersWithMediaFiles(path.join(path.dirname(__dirname),'videos'));
    res.send(foldersWithMediaFiles)


});

app.get("/videoplayer/:videourl",function(req,res) {
    var filename = req.params.videourl;
    console.log(filename);
    res.setHeader("Access-Control-Allow-Origin","*");
    res.sendFile(__dirname + "/index.html")
    });
    
    app.get("/video/:videourl",function(req,res){
    res.setHeader("Access-Control-Allow-Origin","*");
    const videoName = req.params.videourl;
    const root_path = path.dirname(__dirname);
    
    
    const range = req.headers.range;
    if(!range) {
        res.status(400).send("Requires Range header");
    }
    console.log(module.require.name);
    const videoPath = root_path + '/videos/' + videoName ;
    const videoSize = fs.statSync(videoPath).size;
    
    const CHUNK_SIZE = 10 ** 6;
    const start = Number(range.replace(/\D/g,""));
    const end = Math.min(start + CHUNK_SIZE, videoSize -1);
    
    //headers
    
    const contentLength = end - start + 1;
    const headers = {
      "Content-Range": `bytes ${start}-${end}/${videoSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": contentLength,
      "Content-Type": "video/mp4",
    };
    
    //http 206 for partial content
    res.writeHead(206,headers);
    
    const videoStream = fs.createReadStream(videoPath, {start,end});
     videoStream.pipe(res);
    });
    

app.listen(4000,function() {
    console.log("Listening on port 4000")
});
