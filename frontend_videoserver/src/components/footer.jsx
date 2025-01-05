import React from 'react';
import Container from './edgeContainer';

/**
 * Footer component for displaying the application footer.
 *
 * @component
 * @example
 * return (
 *   <Footer />
 * )
 *
 */

export default function Footer({ className=''}){
    return(
        <Container className={`bottom-0 ${className}`}>
                <p>&copy; StreamLANd 2024 by sachmo99. All rights reserved.</p>
        </Container>
    ); 
}