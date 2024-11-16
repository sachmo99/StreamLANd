import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import { motion,MotionConfig } from 'framer-motion';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        position: 'relative',
        bottom:'0',
        width: '100%',
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 'fontWeightBold',
        
    },
}));

export default function Footer() {
    const classes  = useStyles();
    return (
        <div className={classes.root}>
            <div ><b>&copy;Streamland 2024</b></div>
        </div>
    );
}