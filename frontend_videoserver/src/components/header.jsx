import React from 'react';
import Container from './edgeContainer';

/**
 * Header component for displaying the application header.
 *
 * @component
 * @example
 * return (
 *   <Header />
 * )
 *
 */

export default function Header(){
    return(
        <Container >
            <div name="leftSideLogo" className="flex">
                <img alt="StreamLand" src={`http://${window.location.host}/pictures/logofile.png`} className='h-[100px] w-auto object-contain hover:scale-110 transform transition duration-300' />  
            </div>
        </Container>
    ); 
}