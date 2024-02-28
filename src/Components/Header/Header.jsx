import React from "react";
import CofeLogo from "../img/Cofe-logo.svg";
import Languages from "../Localization/Loacalization";
import { NavLink } from "react-router-dom";
import { Context } from "../Context/Localization";
import "./Header.scss";

function Header() {

  const {lang, setlang} = React.useContext(Context)

  return (
    <>
      <header className="header">
        <div className="container">
          <NavLink className="header__link" href="#link">
            <img
              className="header__logo"
              src={CofeLogo}
              alt="cofe logo"
              width="237"
              height="27"
            />
          </NavLink>

          <select value={lang} onChange={(evt) => setlang(evt.target.value)}>
                <option value="uz">UZ</option>
                <option value="en">EN</option>
                <option value="ru">RU</option>
          </select>

          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink className="nav__link" to="Home">{Languages[lang].header.nav.nav__link}</NavLink>
              </li>

              <li className="nav__item">
                <NavLink className="nav__link" href="#link">{Languages[lang].header.nav.nav__link1}</NavLink>
              </li>

              <li className="nav__item">
                <NavLink className="nav__link" href="#link">{Languages[lang].header.nav.nav__link2}</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
