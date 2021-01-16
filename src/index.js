import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {applyPolyfills, defineCustomElements} from 'h8k-components/loader';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render
     (
          <BrowserRouter>
               <App />
          </BrowserRouter>
          , document.getElementById('root'));
registerServiceWorker();

applyPolyfills().then(() => {
     defineCustomElements(window);
});
