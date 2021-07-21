import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactPlayer from 'react-player';
import {Jumbotron, Button, Rows, Columns, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Videoplayer from './videoplayer';
class App extends React.Component {
  state = {
    listDemo: [],
    visible: false,
    videourlprop: '',
    serverUrl: "",
  };
    constructor(props) {
      super(props);
      
      this.listRef = React.createRef();

    }
    componentDidMount() {
        var temp = window.location.href;
        var temparray = temp.split(":",3);
        console.log(temparray);
        var server = temparray[1];
        this.setState({serverUrl:"http:"+ server});

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

    callVideo = (e) => {
      // e.preventDefault();
      console.log("clicked on " + e.target.value);
      // window.location.href = "http://192.168.1.112:4000/video/" + e.target.value;
      this.setState({videourlprop: this.state.serverUrl+':4000/video/'+ e.target.value});
      this.setState({visible: true});


    }

    
    render(){
      return(
          <div className="root">
            <Jumbotron>
              <h1>StreamLANd</h1>
              <Button variant="primary" onClick={this.demoFunction}> Go to list</Button>
              </Jumbotron>
              <div>
              {this.state.listDemo.length > 0 && (
                        <Container>
                        {this.state.listDemo.map((element) => (
                            <Button variant="warning" onClick={this.callVideo} value={element}>{element}</Button>
                        ))}
                    
                    </Container> )}
                    </div>
                    {this.state.visible? 
                    <div>
                      <Videoplayer videourl={this.state.videourlprop}/>

                    </div> :null}
            
          </div>
      );
    }

} 

export default App;
