import React from 'react';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';

import { skillsReducer } from 'io-skills';

import App from './App';
import { defaultTheme, ThemeContext } from './styles/theme';

const rootReducer = combineReducers({
  skills: skillsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeContext.Provider value={defaultTheme}>
        <App />
      </ThemeContext.Provider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'),
);

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept();
}
