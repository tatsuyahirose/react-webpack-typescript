import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { createStore } from 'redux'
import { Provider } from 'react-redux';

import { AmebaPop } from './page/AmebaPop';
import "../style/style.css";

import reducer from '../reducers/reducer';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <AmebaPop />
  </Provider>,
  document.getElementById('root')
)
