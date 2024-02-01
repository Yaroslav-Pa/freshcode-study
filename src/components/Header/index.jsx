import style from '../../Sass/header.module.scss';

function Header() {
  return (
    <section className={style.allHeader}>
      <div className={style.iconNameDiv}>
        <img src="./images.png" alt="icon" />
        <h1>White House</h1>
      </div>
      <nav className={style.pageNav}>
        <a href="./">Home</a>
        <a href="./">Information</a>
        <a href="./">Documents</a>
        <a href="./">Contacts</a>
        <a href="./">Register</a>
      </nav>
    </section>
  );
}

export default Header;
