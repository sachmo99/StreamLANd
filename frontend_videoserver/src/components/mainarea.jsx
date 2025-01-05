import React, { useState, useEffect } from 'react';
import './mainArea.css';
import ListContainerComponent from './listContainerComponent';
import MovieCard from './movieCard';
/**
 * MainArea component for displaying the application Content.
 *
 * @component
 * @example
 * return (
 *   <MainArea />
 * )
 *
 */
export default function MainArea(){
    const [ movieList, setMovieList ] = useState([]);
    const loadVideoList = async () => {
        try {
            let LANSERVER = window.location.hostname;
            const response = await fetch(`http://${LANSERVER}:4000/list`); // Make sure to include 'http://' or 'https://'
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const data = await response.json();
            console.log(data); // Handle the response data here
            setMovieList(data);
        } catch (error) {
            console.error('Error fetching video list:', error);
        }
    };
    
    useEffect(() => {
        loadVideoList();
    }, []);
    return(
        <div id='MainArea' className="bg-cover bg-center w-full flex-grow block">   
            <ListContainerComponent id="readyToWatchContent">
                <div className="sectionTitle">
                    <h1>Ready To Watch</h1>
                </div>
                <div className="watchContent flex flex-row">
                    
                    {movieList.length !== 0 ? movieList.map(
                        (item,index) => (
                            <MovieCard idx = {index} name={item.movieName} thumbNail={item.thumbNail} />
                        )   
                    ) : <p className="text-white">Loading...</p>}
                    
                </div>
            </ListContainerComponent>
            <ListContainerComponent id="toProcess">
                <div className="sectionTitle">
                    <h1>
                        Processing...
                    </h1>
                    <div className="watchContent">   
                    </div>
                </div>
            </ListContainerComponent>
            
        </div>
    ); 
}