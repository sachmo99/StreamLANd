# StreamLANd
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![CodeFactor](https://www.codefactor.io/repository/github/sachmo99/streamland/badge)](https://www.codefactor.io/repository/github/sachmo99/streamland) [![CodeQL](https://github.com/sachmo99/StreamLANd/actions/workflows/codeql-analysis.yml/badge.svg?branch=sachmo-dev)](https://github.com/sachmo99/StreamLANd/actions/workflows/codeql-analysis.yml)

## This is the official readme of this project titled "StreamLANd"(tentative title).

**Aim**: The aim of this project is to create a local streaming platform for the multimedia (movies) content on your network device to everyone on your network. It will help you to stream movies stored on your PC on any device like mobile, tablets etc.. without downloading or transferring it. The application is very much similar to many popular video OTT services like Netflix, Prime Video etc.. but works only on the content you have locally.

***At present the application is tested and verified as working on mp4 videos which are to be stored in Videos folder of the package.This project is still under development.***
*In case of complaints or clarifications, please reach out to me at sachmoadi2001@gmail.com*

---

**Steps to Use**:
- To use the application, store the mp4 videos you want to stream in the videos folder.
- Then, start the frontend and backend servers by giving commands: ```cd frontend/frontend_videoserver && npm install && npm start``` and ```cd backend && npm install && node index.js```
- You can also use nodemon instead of node while starting the backend server.
- For people preferring to use ```yarn``` for package handling, feel free to do so but do not make pull requests to update docs. I use npm almost everywhere.
- Create a videos folder parallel to the backend and frontend where you store all your video files (currently supported mp4).
---
########################
As mentioned the project is under development and I am still learning while building this project. So if you have any suggestions on improving the performance of the project (aside from a few ideas that I already have), you are most welcome to ping me on my mail. 

---
**ReleaseLog**
*Date:21/07/2021*
*Version: v1.0.0* - working
- Added the basic implementation with mp4 videos.
- Built a frontend with reactjs and backend with node server.
- Built a basic UI around the server. Tested the application on LAN with a single video.  

*Date:22/07/2021*
*Version: v1.1.0* - working
- Improved UI on React

*Date: 23/07/2021*
*Version: v1.1.1* - working
- Improved Documentation and added contribution guidelines.
- Added code of conduct for contributors and participants.

*Date: 30/10/2024*
*Version: v2*
- Implemented HLS streaming with ReactPlayer.
- Implemented a draft version of HLS encoder built on top of Shaka Package manager [Shaka Github](https://github.com/shaka-project/shaka-packager) which can be run independently to convert any mp4 video into HLS streamable setup inside ${PROJECT_ROOT}/videos folder.
- Improved backend into MVC design and splitted it into controllers, services and utils for more precise separation over endpoints.

