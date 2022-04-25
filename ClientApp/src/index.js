import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ThemeReducer from './store/reducers/ThemeReducer';
import './i18n';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

const store =  process.env.NODE_ENV == 'production' ? configureStore({
  reducer:{
    theme: ThemeReducer
  }
}) : configureStore({reducer:{
  theme: ThemeReducer
}},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
    <Provider store={store}>
    <App />
    </Provider>
    
  </BrowserRouter>,
  rootElement);

registerServiceWorker();

