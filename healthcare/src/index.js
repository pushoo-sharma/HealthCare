import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter} from 'react-router-dom';

import { Provider} from 'react-redux';
import ConfigureStore from './store/ConfigureStore';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const store = ConfigureStore();
ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
 <App />
 </BrowserRouter>
</Provider>

, document.getElementById('root'));
registerServiceWorker();
