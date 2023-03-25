import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import APP from './APP';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//   {/*  strict mode provides security */}
//   <div>
//     <APP/>
//   </div>
//   </React.StrictMode>
// );
// this code can also be written as below

ReactDOM.render(
    <APP/>
,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
