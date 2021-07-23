import React from 'react';
import {} from 'react-bootstrap';
import { motion } from 'framer-motion';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './header';
import ListPage from './listpage';
const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

function Welcome() {
    /* This is the welcome page of the Frontend page. 
    This page should show the name of the application and allow sliding to next page with a button */
        const useStyles = makeStyles((theme) => ({
            welcome: {
                minHeight: '100vh',
                backgroundImage: `url(${process.env.PUBLIC_URL + '/pictures/pacificdream.png'})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                
            },
        }));
        const classes = useStyles();
          
        return(
            <div className= {classes.welcome} >
                <CssBaseline/>
                <Header/>
                <ListPage />
            </div>
        );
    }
export default Welcome;