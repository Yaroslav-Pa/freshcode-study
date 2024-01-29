import { Component } from "react";
import {MyContext} from '../../../Context/contextCreater'
class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  
  render() { 
    return ( 
    <>

    dasdasdasdasdas
    <MyContext.Consumer>
      {(theme)=>
        <div>Selected theme is: {theme}</div>
      }
    </MyContext.Consumer>
    </> );
  }
}
 
export default Sidebar;