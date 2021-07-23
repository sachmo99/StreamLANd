import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import { motion,MotionConfig } from 'framer-motion';
import { Link } from 'react-scroll';
const useStyles = makeStyles((theme) => ({
    root : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        
        
    },
    container: {
        textAlign:'center'
    },
        appbar: {
            background: 'none',  
        },
        icon: {
            color: '#f12711',
            fontSize: '2rem', 
        },
        appbarTitle: {
            flexGrow: '1',
            color: '#0f3443',
            fontWeight: 'fontWeightBold',
            fontFamily: 'Otomanopee One'
                
        },
        appbarWrapper : {
            width: '80%',
            margin:'0 auto',
        },
        textColor: {
            color: '#f5af19',
        },
        downarrow : {
            color: '#f12711',
            fontSize: '3rem',
        },

}));

const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  const scrollToComponent = (e) => {
      e.preventDefault();
      window.document.getElementById("listpage").scrollIntoView({ behavior: 'smooth' });
  }

export default function Header() {
    const classes = useStyles();
        return(
            <div className={classes.root}>
                <AppBar className={classes.appbar} elevation={0} >
                    <Toolbar className={classes.appbarWrapper}>
                        <h1 className={classes.appbarTitle}>Stream<span className={classes.textColor}>LAN</span>d</h1>
                        <IconButton>
                            <SortIcon className={classes.icon}/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <div className={classes.container}>
                <MotionConfig transition={{ duration: 0.5 }}>
                    <motion.div   whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.8 }}
                                    initial={{opacity: 0, y: -100}}
                                    animate={{opacity: 1, y: 0}}
                                    >
                <h1><span className={classes.appbarTitle}>Stream<span className={classes.textColor}>LAN</span>d</span> <br/> at your service!</h1>
                <br/>
                <IconButton>
                    <ArrowDropDownCircleIcon className={classes.downarrow} onClick={scrollToComponent}></ArrowDropDownCircleIcon>
                </IconButton>
                </motion.div>
                </MotionConfig>
                </div>
            </div>

        );

}
