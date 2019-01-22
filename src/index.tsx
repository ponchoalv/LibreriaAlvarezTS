import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
// import { createStore } from 'redux';
// import { enthusiasm } from './reducers/index';
// import { StoreState } from './types/index';
// import Hello from './components/StatefulHello'
// import Hello from './components/Hello'
// import Hello from './containers/Hello';
// import { Provider } from 'react-redux';
// import { EnthusiasmAction } from './actions/index';
// import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App'

// const store = createStore<StoreState, EnthusiasmAction, any, any>(enthusiasm, {
//   enthusiasmLevel: 1,
//   languageName: 'Typescript',
// });

ReactDOM.render(
  //  <Provider store = { store }>
  //    <Hello />
  //  </Provider>
  <App />
  ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
