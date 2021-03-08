import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Main from './Main';
import Header from './Header';
import Sidebar from './Sidebar';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Main />
  </React.StrictMode>,
  document.getElementById('racine')
);
