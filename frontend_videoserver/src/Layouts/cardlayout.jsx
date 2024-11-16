import React , { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const useStyle = makeStyles((theme) => ({
    root: {
        display: 'flex-row',
        width: 345,
        marginLeft: 5,
        

    },
    media: {
        height: 140,
    }
}));
const MovieCard = ({title}) => {
    const classes = useStyle();
    return(
       <Card style={{ padding: '2%'}} className={classes.root} key={title}>
           <CardActionArea>
               <CardMedia className={classes.media} image={process.env.PUBLIC_URL+"/pictures/streamland.png"} title={title} />
               <CardContent>
                   <Typography gutterBottom variant="h5" component="h2">
                       {title}
                   </Typography>
               </CardContent>
           </CardActionArea>
       </Card>
        
    );
};
export default MovieCard;
