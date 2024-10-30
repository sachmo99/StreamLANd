

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Configuration
const scanFolderPath = 'C:\\Projects\\StreamLANd\\videos'; // Folder to scan for new videos
const scanInterval = 6000; // Scan every 60 seconds (adjust as needed)
const mediaExtensions = ['.mp4']; // Supported video file formats

// Function to check if a video is already processed into HLS
function isAlreadyProcessed(videoFolderPath) {
  const masterPlaylist = path.join(videoFolderPath, 'master.m3u8');
  return fs.existsSync(masterPlaylist); // Check if the HLS master playlist exists
}

// Function to convert a video to HLS using Shaka Packager
function convertToHLS(videoPath) {
  const videoName = path.basename(videoPath, path.extname(videoPath));
  const outputFolder = path.join(path.dirname(videoPath), videoName);

  // Create the output directory if it doesn't exist
  if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder);
  }
  console.log(videoPath,outputFolder)
  const shakaCommand =`shaka input="${videoPath}",stream=video,output=${outputFolder}/video_output.mp4,init_segment=${outputFolder}/init_video.mp4,segment_template=${outputFolder}/video_$Number$.m4s input="${videoPath}",stream=audio,output=${outputFolder}/audio_output.mp4,init_segment=${outputFolder}/init_audio.mp4,segment_template=${outputFolder}/audio_$Number$.m4s --hls_master_playlist_output=${outputFolder}/master.m3u8 --segment_duration=10 --hls_base_url=http://localhost:4000/player/`;

  console.log(`Converting ${videoPath} to HLS format...`);
  exec(shakaCommand, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error converting video: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Shaka Packager stderr: ${stderr}`);
    }
    console.log(`Successfully converted ${videoPath} to HLS.`);
  });
}

// Function to scan the folder for new video files
function scanFolderForNewVideos() {
  console.log(`Scanning folder: ${scanFolderPath} for new videos...`);

  const files = fs.readdirSync(scanFolderPath);
  files.forEach((file) => {
    const fullPath = path.join(scanFolderPath, file);
    const fileExtension = path.extname(fullPath).toLowerCase();

    if (fs.lstatSync(fullPath).isFile() && mediaExtensions.includes(fileExtension)) {
      const videoFolderPath = path.join(scanFolderPath, path.basename(file, fileExtension));
      if (!isAlreadyProcessed(videoFolderPath)) {
        convertToHLS(fullPath);
      } else {
        console.log(`Skipping ${file} - already encoded in HLS format.`);
      }
    }
  });
}

// Start periodic scanning
setInterval(scanFolderForNewVideos, scanInterval);
console.log(`Started folder scanning every ${scanInterval / 1000} seconds.`);
