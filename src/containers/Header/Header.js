import React, { useState, useEffect } from "react";
import { navItems } from "./navigation";
import Icon from "../../components/Icon/Icon";

import "./style.scss";

const Header = () => {
  const [isOpenHam, setOpenHam] = useState(true);
  const hideElement = isOpenHam ? "hide" : "";

  const handleResize = () => {
    if (window.innerWidth <= 767) {
      setOpenHam(true);
    }
  };

  const navItem = (item) => {
    return (
      <li key={item.label} className="header__item">
        <a className="header__anchor" href={item.link}>
          {item.label}
        </a>
      </li>
    );
  };

  const handleHamClick = () => {
    setOpenHam(!isOpenHam);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="header" id="header">
      <div className="grid">
        <div className="header__wrapper">
          <a className="header__logo" href="/#header">
            Landerz<span className="text--main">.</span>
          </a>
          <nav className="header__nav">
            <div
              onClick={handleHamClick}
              className={`overlay ${hideElement}`}
            ></div>
            <div className="header__ham" onClick={handleHamClick}>
              <Icon icon="ham" className="header__icon-ham" />
              <Icon
                icon="close"
                onClick={handleHamClick}
                className={`header__icon-close ${hideElement}`}
              />
            </div>
            <ul className={`header__list ${hideElement}`}>
              {navItems.map((item) => navItem(item))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
