import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactPlayer from 'react-player';
import {Jumbotron, Button, Rows, Columns } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        'listDemo':null,
      };
      this.listRef = React.createRef();

    }
    componentWillMount(){

    }
    demoFunction = (e) => {
      e.preventDefault();
      const requestOptions = {
        method: 'GET',
    };
    fetch(window.location.href+"/list", requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ listDemo: data.list }));

    this.state.listDemo.map((item) => {
      
        
    });
    
      
    }


    render(){
      return(
          <div ClassName="root">
            <Jumbotron ClassName="Jumbotron">
              <h1>Plug and Play Video Player</h1>
              <Button variant="primary" onClick={this.demoFunction}> Go to list</Button>
              <div className="list-feed" id="list-feed" >
                <ol ref={this.listRef} id="list-ref" >
                  {}

                </ol>


              </div>
            </Jumbotron>
          </div>
      );
    }

} 

export default App;
