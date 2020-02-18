import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store'
import { AmebaPop } from './page/AmebaPop';
import "../style/style.css";

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <AmebaPop />
  </Provider>,
  rootElement
)
