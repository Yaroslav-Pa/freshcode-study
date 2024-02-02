import { useContext } from "react";
import { ThemeContextHook } from "../../Context/contextCreater";

function UseContextTest() {
  const theme = useContext(ThemeContextHook);
  return ( 
    <div>
      now theme is: {theme}
    </div>
   );
}

export default UseContextTest;