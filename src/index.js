import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './index.css';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from './reducers/rootReducer';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.app')
);
