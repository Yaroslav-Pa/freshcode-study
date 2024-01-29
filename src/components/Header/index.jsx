import { Component } from 'react';
import classNames from 'classnames';
import styles from './style.module.scss';
import CONSTANTS from '../../constants';
import { withTheme } from '../../hocs';
const {THEMES} = CONSTANTS;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  
  render() { 
    const { theme, setTheme } = this.props;
    const classes = classNames(styles.newHeader, {[styles.newHeaderLight]: theme === THEMES.LIGHT, [styles.newHeaderDark]: theme === THEMES.DARK});
    return ( <header className={classes}>
      <h1>Site with todo and theme</h1>
      <select value={theme} onChange={(e)=>{setTheme(e.target.value);}}>
      <option value={THEMES.LIGHT}>Light theme</option>
        <option value={THEMES.DARK}>DarkTheme</option>
      </select>
    </header> );
  }
}

export default withTheme(Header);