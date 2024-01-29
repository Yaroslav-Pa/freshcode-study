import React from 'react';
import { ThemeContext } from '../Context';

export function withTheme(Component) {
  function ComponentWithTheme(props) {
    return (
      <ThemeContext.Consumer>
        {([theme, setTheme]) => (
          <Component theme={theme} setTheme={setTheme} {...props} />
        )}
      </ThemeContext.Consumer>
    );
  }

  return ComponentWithTheme;
}