import React from 'react';

import './Toggle.scss';

export const Toggle = ({
  onChange,
  checkedColor,
  uncheckedColor,
  name,
  value = {},
  checked = false,
}) => (
  <div className="Toggle">
    <label className="switch">
      <input
        type="checkbox"
        onChange={onChange}
        value={value}
        checked={checked}
        name={name}
      />
      <span
        className="slider"
        style={{ backgroundColor: checked ? checkedColor : uncheckedColor }}
      />
    </label>
  </div>
);
