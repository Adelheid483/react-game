import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.scss';

import App from "./components/App/App";

const application = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDom.render(
  application, document.getElementById('root')
);
