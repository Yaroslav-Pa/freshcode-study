import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom/cjs/react-router-dom.min';

function NewrRouter() {
  return (
    <>
      <BrowserRouter>
        {/*Switch перевіряє посимвольно тож потрібно home або у кінець або писати exact*/}
        <Switch>
          {/* Всього 3 варіанти відображення: */}
          {/* children, render, component */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Profile/:id" component={Profile}/>
          <Route
            path="/Contacts"
            render={(routeProps) => <Contacts {...routeProps} />}
          />
          <Route path="/Something" component={Something} />
          {/* routeProps це три об'єкта *доки*: history(перемішення туди сюди ), location(уся інфа по URL), match(інфо об'єкт: isExact (12строка), поточний юрл та пасс)*/}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default NewrRouter;

function Home() {
  return (
    <>
      <Navigation />
      <h2>HOME</h2>
    </>
  );
}
function Contacts() {
  return (
    <>
      <Navigation />
      <h2>Contacts</h2>
    </>
  );
}
function Something() {
  return (
    <>
      <Navigation />
      <h2>Something</h2>
    </>
  );
}
function Profile(props) {
  return (
    <>
      <Navigation />
      <h2>Profile {props.match.params.id}</h2>
    </>
  );
}
function Navigation() {
  return (
    <>
      {/* NavLink знає на якої сторінці ти сидиш, потрібно наприклад для змінення стилів якщо ти на цій сторінці */}
      <NavLink to="/">Home</NavLink>
      <Link to="/Contacts">Contacts</Link>
      <Link to="/Something">Something</Link>
      <Link to="/Profile/12312">Profile</Link>
    </>
  );
}
