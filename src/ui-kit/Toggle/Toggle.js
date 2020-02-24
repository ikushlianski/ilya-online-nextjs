import React from 'react';

import './Toggle.scss';

export const Toggle = ({ onChange, value }) => (
  <div className="Toggle">
    <label className="switch">
      <input type="checkbox" onChange={onChange} />
      <span className="slider" />
    </label>
  </div>
);
