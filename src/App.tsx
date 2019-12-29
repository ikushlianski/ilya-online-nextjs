import React from 'react';
import cx from 'classnames';

import { ThemeContext, Themes } from 'styles';
import { Button } from 'ui-kit';

import 'styles/styles.scss';

const App = () => {
  const theme = React.useContext(ThemeContext);

  const classes = cx('App', {
    'App--light': theme === Themes.light,
  });

  return (
    <div className={classes}>
      <span>Hi someone! this is the app!</span>
      <Button inverted>Some btn text</Button>
    </div>
  );
};

export default App;
