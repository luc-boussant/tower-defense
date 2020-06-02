import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { configureStore } from 'app/store';
import { Router } from 'react-router';
import { App } from './app';
import { saga } from 'app/middleware';
import rootSaga from 'app/sagas';

// prepare store
const history = createBrowserHistory();
const store = configureStore();

saga.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
