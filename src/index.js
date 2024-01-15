import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './style.css';
import App from './App.js'
/*
  Два види компонентів:
    класові
    функціональні (2019 року додали хуки)
*/


//// класовий компонент 
// має усподковуватися від React.Component
// мати метод render() (що має повертати реакт елемент\компонент)

// class Heading extends React.Component{
//   render(){
//     // має повертати реакт елмент\копонент
//     return <h1>Some heading clas</h1>
//   }
// }


////функціональний компонент
/*
function HeadingFunction () {
  // має повертати реакт елeмент\копонент
  return <h1 className='someStyle'>Some heading fun</h1>;
}

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Our site</h1>
        <NavList />
      </header>
    );
  }
}
*/

//відмалювання компонента
//варіант 1
// const headerComponent = React.createElement(Heading); // старий варіант
// const headerComponent = <Heading/>


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //варіант 2
  // Фрагмент - спеціальний елемент який не залишає по собі вермстки у підсумку
  // використовувати якщо треба порендирити декілька елементівв без видимого контейнеру
  // ! не передавати атрибути / пропси
  // <></> === <React.Fragment></React.Fragment> === React.createElement(React.Fragment)
  <App/>
);


/*
  реакт не показує булеві значення, null, undefined, Symbol, ""
  реакт кидається помилкою якщо малювати звичайний об'єкт
  якщо малювати масив то все залежить від вмісту массиву
  усе інше реакт малює нормально
*/