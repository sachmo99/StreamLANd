import React, { useEffect, useState } from 'react';
import { motion } from  'framer-motion';
import { withStyles } from '@material-ui/core/styles';
import MovieCard from '../Layouts/cardlayout.jsx';
import { Grid } from '@material-ui/core';
import Videoplayer from '../Layouts/videoplayer.js';
import { Navigate } from 'react-router';
const useStyles = (themes) => ({
    root: {
        color: '#000',
        height: 'auto',
        width: '100vw',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        
        background: `url(${process.env.PUBLIC_URL + '/pictures/MegaTron.png'})`,
    },
    list: {
        display: 'flex-box',
        background: 'white',
        borderRadius: '25px',
        width: '95%',
        height: '100vh',
        margin: '0 auto',
        boxShadow: '5px 5px #888888',
        flexGrow: '1',
        padding: themes.spacing(2),

    },
    boxtitle: {
        color: '#0f3443',
            fontWeight: 'fontWeightBold',
            fontFamily: 'Otomanopee One',
            justifyContent: 'center',
            width: '100%',
            padding : '20px',
            textAlign:'center',
    },
    videoplayer:{
        width: '100%',
        padding: themes.spacing(2),
        height: '100vh'
    }

});

class ListPage extends React.Component {
    state = {
        serverUrl: '',
        listDemo: [],
        visible: false,
        videourlprop: '',
    }
    constructor(props) {
        super(props);
        //const navigate = useNavigate();
    }
    
    componentDidMount() {
        var temp = window.location.href;
        var temparray = temp.split(":",3);
        console.log(temparray);
        var server = temparray[1];
        this.setState({serverUrl:"http:"+ server});
        const requestOptions = {
            method: 'GET',
        };
        fetch("http:"+server+":4000/list", requestOptions)
            .then((response) => response.json())
            .then(data => {console.log(data);this.setState({listDemo: data.map(ele => ele.movieName)})}); 
    }
    demoFunction = (e) => {
        e.preventDefault();
        const requestOptions = {
          method: 'GET',
      };
      fetch(this.state.serverUrl+":4000/list", requestOptions)
          .then((response) => response.json())
          .then(data => {console.log(data);this.setState({listDemo: data})}); 
          
        
      }
      loadVideo = (name) => {
        console.log("clicked on " + name);
        // window.location.href = "http://192.168.1.112:4000/video/" + e.target.value;
        this.setState({ videourlprop: '/video/'+ name });
        window.location.href = "/video/" + name;
        // this.setState({visible: true});
        
      }
      handlecards = (e) => {
          // console.log(e.target.title);
          var title = e.target.title;
          if(title.length != 0) {
            this.loadVideo(title);
          }
      }

    render() {
            if(this.state.videourlprop.length > 0 ) {
                return <Navigate to={this.videourlprop} replace/>;
            }
       
        const { classes } = this.props; 
        return(
            <div className={classes.root} id="listpage">
                
                <div className={classes.list} onClick={this.handlecards}>
                <h3 className={classes.boxtitle}>List of Movies on Your Drive</h3>
                    <Grid container spacing={2} direction="row" justifyContent="flex-start" alignItems="flex-start" style={{ padding: '10px'}}>
                    {this.state.listDemo.map((element) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={element.id} >
                            <MovieCard url={element} onClick={()=> this.loadVideo}></MovieCard>
                        </Grid>
                        ))}
                    </Grid>
                </div>
            </div>
        );
    }
}
export default withStyles(useStyles)(ListPage);