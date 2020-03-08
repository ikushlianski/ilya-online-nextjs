import React from 'react';

import { Button, Toggle } from '../../ui-kit';

import './CVOptions.scss';

export const CVOptions = ({ value, setValue }) => {
  let accent2Color;
  React.useEffect(() => {
    const styles = getComputedStyle(document.documentElement);
    accent2Color = styles.getPropertyValue('--accent2');
  }, []);

  return (
    <div className="CVOptions">
      <h2 className="CVOptions__Header">CV printing options</h2>
      <div className="CVOptions__Container">
        <div className="CVOptions__Option">
          <span className="CVOptions__Label">Include space for notes</span>
          <label>
            <Toggle
              value={value.notes}
              checked={value.notes}
              onChange={() => setValue({ ...value, notes: !value.notes })}
              checkedColor={accent2Color}
              uncheckedColor="gray"
            />
          </label>
        </div>
        <div className="CVOptions__Option">
          <span className="CVOptions__Label">CV version</span>
          <div className="CVOptions__FormatOptions">
            <label className="CVOptions__FormatOption">
              <span className="CVOptions__FormatLabel">Short</span>
              <Toggle
                value={value.extended}
                checked={value.extended}
                onChange={() =>
                  setValue({
                    ...value,
                    extended: !value.extended,
                  })
                }
              />
              <span className="CVOptions__FormatLabel">Extended</span>
            </label>
          </div>
        </div>
        <Button onClick={print ? print : () => 0}>Preview & print</Button>
      </div>
    </div>
  );
};
