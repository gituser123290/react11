import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./appmodules/style.css";
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Welcomepage from './Welcomepage';
import EmpLogin from './appmodules/emp/auth/EmpLogin';
import Empregistor from './appmodules/emp/auth/Empregistor';
import Empmainpage from './appmodules/emp/dashboard/Empmainpage';
import EmpHomepage from './appmodules/emp/dashboard/EmpHomepage';
import Empproperty from './appmodules/emp/dashboard/Empproperty';
import Empdatabinding from './appmodules/emp/dashboard/Empdatabinding';
import Myaxios from './appmodules/emp/dashboard/Myaxios';
import Userdetailspage from './appmodules/emp/dashboard/Userdetailspage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
            <Route path='' element={<Welcomepage/>}></Route>
            <Route path='employee' element={<EmpLogin/>}></Route>
            <Route path='employee/registor' element={<Empregistor/>}></Route>
            <Route path='empmainpage' element={<Empmainpage/>}>
              <Route path='' element={<EmpHomepage/>}></Route>
              <Route path='property' element={<Empproperty/>}></Route>
              <Route path='mydata' element={<Empdatabinding/>}></Route>
              <Route path='myaxios' element={<Myaxios/>}></Route>
              <Route path='myaxios/detailspage/:id' element={<Userdetailspage/>}></Route>
              
            </Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
