import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './component/login/Login'
import MainPage from './component/mainPage/MainPage'
import PostCard from './component/mainPage/Post'
import Card from './component/mainPage/Popular'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<MainPage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
