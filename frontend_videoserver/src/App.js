import logo from './logo.svg';
import './App.css';
import React from 'react';
// import ReactPlayer from 'react-player';
// import {Jumbotron, Button, Rows, Columns, Container } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Videoplayer from './Layouts/videoplayer';
// import Welcome from './components/homepage';
// import Footer from './components/footer';
import Header from './components/header';
import Footer from './components/footer';
import MainArea from './components/mainarea';

export default function App() {
  return(
    <div className='App w-screen min-h-screen flex flex-col'>
      <Header/>
      <MainArea/>
      <Footer/>
    </div>
  )
}
