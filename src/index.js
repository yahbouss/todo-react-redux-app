import React from 'react';
import { render } from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoapp from './redux/reducers'

const store = createStore(todoapp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);