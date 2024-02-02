import { useState, useEffect } from 'react';

const useClicker = () => {
  const [clicks, setClick] = useState(0);

  const Click = () => {
    setClick((prevClicks) => prevClicks + 1);
  };
  // useEffect(() => {
  //   document.body.addEventListener('click', Click);
  //   return () => {
  //     document.body.removeEventListener('click', Click);
  //   };
  // }, []);
  return [clicks, Click];
};

function Cliker() {
  const [clicks, Click] = useClicker();
  useEffect(() => {
    document.body.addEventListener('click', Click);
  }, []);
  return <div>clicks on body: {clicks}</div>;
}

export default Cliker;
