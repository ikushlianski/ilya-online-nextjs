import React from 'react';

import './List.module.scss';

export const List = ({ items, title, noItemsText = null }) => {
  return (
    <div className="List">
      {title ? <div className="List__Title">{title}</div> : null}
      {items.length > 0 ? (
        <ul className="List__Items">
          {items.map((item, i) => (
            <li key={i} className="List__Item">
              {item}
            </li>
          ))}
        </ul>
      ) : (
        noItemsText
      )}
    </div>
  );
};
