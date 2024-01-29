import React from 'react';
// import NavList from '../NavList';
import style from './style.module.css';
import {MyContext} from '../../Context/contextCreater'

class Header extends React.Component {

  
  render() {
    const classes = `${style.header}`
    return (
      <header className={classes}>
        {/* <NavList /> */}
        <MyContext.Consumer>
          {(theme)=> {return(<>
            <h1>Our site</h1>
            <div>header theme is {theme}</div></>)
            }
          }
        </MyContext.Consumer>
      </header>
    );
  }
}

export default Header;