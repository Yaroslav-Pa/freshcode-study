// /*
//   відмалювати параграф зі стилями та текстом у діві
// */
// const root = document.getElementById('root');

// const par = document.createElement('p');
// par.classList.add('text');
// par.textContent = 'some text';

// root.append(par);

/*
  React - interface for interaction with React
    Includes instruments for creating special React-elemns

  React.createElement - function for creating React element
  ReactDOM - interface for work with virtual DOM from React. 
  
  When something changes in React elements happens prosigure !"reconsilliation" (узгодження)! of virtual DOM state with real DOM state

  ReactDOM.createRoot - creating of react root element, in it will be displayed all others components
*/

const htmlContainer = document.getElementById('root');

const root = ReactDOM.createRoot(htmlContainer);
// const reactPar1 = React.createElement('p', {className: 'text'}, 'Hello1');
// const reactPar2 = React.createElement('p', {className: 'text'}, 'Hello2');
// const elemToCreate = [
//   reactPar1,
//   reactPar2
// ]
// const reactH1 = React.createElement('h1',{className:'somestyle'}, 'BigHello +',...elemToCreate);

//with babel
const reactH1 = <h1 className="style">biggg</h1>;

const user = {
  name: 'Jon',
  doing: 'eating a banana',
  neddedStyle: 'blue',
};
let reactH2 = (
  <h2 className={user.neddedStyle}>
    {user.name} is {user.doing}
  </h2>
);

root.render(reactH2);
htmlContainer.addEventListener('click', () => {
  user.name = 'Loki';
  reactH2 = (
    <h2 className={user.neddedStyle}>
      {user.name} is {user.doing}
    </h2>
  );
  root.render(reactH2);
});
