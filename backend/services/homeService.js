const fs = require('fs');
const path = require('path');

// Function to check if a folder contains any files with the specified extensions
function containsMediaFiles(folderPath) {
  const mediaExtensions = ['.m3u8', '.m4s', '.mp4'];
  const files = fs.readdirSync(folderPath);
  return files.some(file => mediaExtensions.includes(path.extname(file).toLowerCase()));
}

// Function to get the names of folders that contain media files
function getFoldersWithMediaFiles(sourcePath) {
  return fs.readdirSync(sourcePath, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)
    .filter(folder => containsMediaFiles(path.join(sourcePath, folder)));
}
module.exports = { getFoldersWithMediaFiles };