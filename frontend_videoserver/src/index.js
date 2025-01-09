import React from 'react';
import ReactDOM from 'react-dom';
import './output.css';
//import './index.css';
import App from './App';
//import ListPage from './components/listpage';
import reportWebVitals from './reportWebVitals';
//import VideoPage from './components/videopage';
import VideoPage from './components/videoPageComponent';
import { HashRouter as Router,Route,Routes } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
        <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/video/:videoId/:segmentId?" element={<VideoPage />} />
        <Route path="*" element={<div><h1>Not Found!</h1><p>Go to to <a href="/">HOME</a></p></div>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
