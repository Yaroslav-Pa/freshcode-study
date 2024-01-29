import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom/cjs/react-router-dom.min';

function NewrRouter() {
  return (
    <>
      <BrowserRouter>
        {/*Switch перевіряє посимвольно тож потрібно home або у кінець або писати exact*/}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Contacts">
            <Contacts />
          </Route>
          <Route path="/Something">
            <Something />
          </Route>
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
function Navigation() {
  return (
    <>
    {/* NavLink знає на якої сторінці ти сидиш, потрібно наприклад для змінення стилів якщо ти на цій сторінці */}
      <NavLink to="/">Home</NavLink> 
      <Link to="/Contacts">Contacts</Link>
      <Link to="/Something">Something</Link>
    </>
  );
}
