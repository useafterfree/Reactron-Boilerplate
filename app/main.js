import 'babel-polyfill';
import React from 'react';
import thunk from 'redux-thunk';

import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import Root from './components/Root';
import reducers from './reducers';
import './styles/main.styl';

const NextRoot = require('./components/Root.js').default;

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

const rootElement = document.getElementById('root');

render(
  <Root store={store} />,
  rootElement
);

if (module.hot && typeof module.hot.accept === 'function') {
  module.hot.accept('./components/Root.js', () => {
    render(
      <NextRoot store={store} />,
      rootElement
    );
  });
}
