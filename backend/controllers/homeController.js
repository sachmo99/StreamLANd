// src/controllers/homeController.js

const homeService = require("../services/homeService");

exports.getListOfMovies = async (req,res) => {
    try {
        const listOfMovies = await homeService.getFoldersWithMediaFiles("C:\\Projects\\StreamLANd\\videos");
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