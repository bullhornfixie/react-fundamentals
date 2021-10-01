import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AddingKeysTolists from './AddingKeysToLists'
import FetchingDataWithHooks from './FetchingDataWithHooks'

ReactDOM.render(<FetchingDataWithHooks />, document.getElementById('root'));

// React.Strictmode removed 
// This is best practices for syntax when using React and will throw errors if bad practice