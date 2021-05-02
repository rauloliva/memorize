import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename='/memorize'>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.register();