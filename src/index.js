import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";


import Abc,{Mypage1} from './Page';
import Myabout from './About';


import "./style.css";
import Mybootstrap, { Inlinecsstyle } from './Mybootstrap';
import Myreactbootstrap from './Myreactbootstrap';
import Mymui from './Mymui';
import Mystate from './Mystate';
import Mycondition from './Mycondition';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     {/* <Abc></Abc>
     <Mypage1></Mypage1>
     <Myabout></Myabout>
     <Mybootstrap></Mybootstrap>
     <Inlinecsstyle></Inlinecsstyle>
     <Myreactbootstrap></Myreactbootstrap>
     <Mymui></Mymui> */}
     <Mystate></Mystate>
     <Mycondition></Mycondition>

  </React.StrictMode>
);
