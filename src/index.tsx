import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'x-data-spreadsheet/dist/xspreadsheet.css';
import 'antd/dist/antd.css';
import Root from './containers/Root';
import reportWebVitals from './reportWebVitals';
import { history, configuredStore } from './store';

const store = configuredStore();

ReactDOM.render(
  <Root store={store} history={history} />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
