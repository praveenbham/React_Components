import React from 'react';
import ReactDOM from 'react-dom/client';
import FunctionComponent from './FunctionComponent'
import ClassComponent from './ClassComponent';
import Greeting from './components/Greeting';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FunctionComponent></FunctionComponent>
    <ClassComponent></ClassComponent>
    <Greeting name="Praveen" surname="Mishra"></Greeting>
    <Greeting name="Azlan" surname="Tripathi"></Greeting>
  </React.StrictMode>
);

