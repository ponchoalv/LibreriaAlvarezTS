import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import App from './App'
import configureStore, { history } from './configureStore'

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>
  ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
