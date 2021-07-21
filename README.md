# StreamLANd

## This is the official readme of this project titled "StreamLANd"(tentative title).

**Aim**: The aim of this project is to create a local streaming platform for the multimedia (movies) content on your network device to everyone on your network. It will help you to stream movies stored on your PC on any device like mobile, tablets etc.. without downloading or transferring it. The application is very much similar to many popular video OTT services like Netflix, Prime Video etc.. but works only on the content you have locally.
***At present the application is tested and verified as working on mp4 videos which are to be stored in Videos folder of the package.This project is still under development.***

**Steps to Use**:
To use the application, store the mp4 videos you want to stream in the videos folder.
Then, start the frontend and backend servers by giving commands: ```cd frontend/frontend_videoserver && npm start``` and ```cd backend && node index.js```
You can also use nodemon instead of node while starting the backend server.
########################
As mentioned the project is under development and I am still learning while building this project. So if you have any suggestions on improving the performance of the project (aside from a few ideas that I already have), you are most welcome to ping me on my mail. 

---
**ChangeLog**
*Date:21/07/2021*
*Version: v1.0.0*
- Added the basic implementation with mp4 videos.
- Built a frontend with reactjs and backend with node server.
- Built a basic UI around the server. Tested the application on LAN with a single video.