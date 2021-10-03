import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AddingKeysTolists from './lessons/AddingKeysToLists'
import FetchingDataWithHooks from './lessons/FetchingDataWithHooks'
import DisplayingDataFromAnAPI from './lessons/DisplayingDataFromAnAPI'
import RenderComponentsConditionally from './lessons/RenderComponentsConditionally'
import HandlingLoadingStates from './lessons/HandlingLoadingStates'
import AppTest from './AppTest'
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router> 
    <App />  
  </Router>,
  document.getElementById('root')
);

// React.Strictmode removed 
// This is best practices for syntax when using React and will throw errors if bad practice