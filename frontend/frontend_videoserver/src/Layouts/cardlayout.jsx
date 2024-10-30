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
const MovieCard = ({url}) => {
    const classes = useStyle();
    return(
       <Card style={{ padding: '5px'}} className={classes.root} key={url}>
           <CardActionArea>
               <CardMedia className={classes.media} image={process.env.PUBLIC_URL+"/pictures/streamland.png"} title={url} />
               <CardContent>
                   <Typography gutterBottom variant="h5" component="h2">
                       {url}
                   </Typography>
               </CardContent>
           </CardActionArea>
       </Card>
        
    );
};
export default MovieCard;
