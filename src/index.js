// Code goes here
import React from 'react';
import ReactDOM from 'react-dom';

import { message } from './components/foo.js'

ReactDOM.render(
  message,
  document.getElementById('global')
);
