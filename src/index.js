import React from 'react';
import ReactDOM from 'react-dom/client';
import Abc,{Mypage1} from './Page';
import Myabout from './About';
import "./style.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Abc></Abc>
     <Mypage1></Mypage1>
     <Myabout></Myabout>

  </React.StrictMode>
);
