import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

render(
  <BrowserRouter>
    <div>hello ilya!</div>
  </BrowserRouter>,
  document.getElementById('app'),
);
