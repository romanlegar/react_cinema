import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from "react-redux";
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';

const supportsHistory = 'pushState' in window.history;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/" forceRefrech={!supportsHistory}>
      <Route path="/" component={App}/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
