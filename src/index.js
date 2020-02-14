import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'


ReactDOM.render(
  
   <GithubState>
     <AlertState>
         <App />
     </AlertState>
   </GithubState>
   
, document.getElementById('root'));

