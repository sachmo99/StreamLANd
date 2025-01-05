// src/controllers/homeController.js

const homeService = require("../services/homeService");
const path = require('path');
exports.getListOfMovies = async (req,res) => {
    try {
        console.log(__dirname,path.join(__dirname,".."));
        const listOfMovies = await homeService.getFoldersWithMediaFiles(path.join(__dirname,"../videos"));
        console.log(listOfMovies);
        listMoviesWithThumbnails = listOfMovies.map( movie => {
            return{
                movieName : movie,
                thumbNail: 'streamland.png' 
            }
        })
        res.status(200).json(listMoviesWithThumbnails);


    }
    catch(error) {
        console.error('Error fetching the list',error);
        res.status(404).send('Error fetching the list');
    }
}