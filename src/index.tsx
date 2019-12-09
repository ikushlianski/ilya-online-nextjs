import React from 'react';
import { combineReducers } from 'redux';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';

import { skillsReducer } from 'io-skills';
import { hi as hiword } from 'io-portfolio';

render(
  <BrowserRouter>
    <div>hello ilya!</div>
  </BrowserRouter>,
  document.getElementById('app'),
);

console.log(hiword);

const rootReducer = combineReducers({
  skills: skillsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});
