import "./navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";
import { useState } from "react";
import React from "react";
import { Navlinks } from "../../data/HomeData";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isActive, setIsActive] = useState("home")

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <div className="sticky top-0 left-0 z-[9999]">
      <header className="header">
        <nav className="nav nav_container">
          <div className="nav__data">
            <Link to="/" className="nav__logo">
              <img src="/header_logo.png" alt="Home_Logo" />
            </Link>

            <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
              {isMenuOpen ? (
                <MdClose color="#000" fontSize={20} />
              ) : (
                <RxHamburgerMenu color="#000" fontSize={20} />
              )}
            </div>
          </div>
          <div
            className={isMenuOpen ? "nav__menu show-menu" : "nav__menu"}
            id="nav-menu"
          >
            <ul className="nav__list uppercase text-sm">
              <li className="max-lg:border-b border-gray">
                <Link to="/" className={`nav__link ${isActive === "home" ? "text-primary": ""}`} onClick={() => setIsActive("home")}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className={`nav__link ${isActive === "about" ? "text-primary": ""}`} onClick={() => setIsActive("about")}>
                  About
                </Link>
              </li>
              <li className="dropdown__item focus:text-white">
                <div className={`nav__link`} onClick={toggleSubMenu}>
                    Products
                  <RiArrowDownSLine
                    fontSize={20}
                    className={`${subMenuOpen ? "rotate-180" : ""}`}
                  />
                </div>

                <ul
                  className={`dropdown__menu ${subMenuOpen ? "" : "hide-menu"}`}
                >
                  {Navlinks.map((item, index) => (
                    <li key={index}>
                      <Link to={item.link} className="dropdown__link">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li>
                <Link to="/gallery" className={`nav__link ${isActive === "gallery" ? "text-primary": ""}`} onClick={() => setIsActive("gallery")}>
                  Our Gallery
                </Link>
              </li>

              <li>
                <Link to="/contact" className={`nav__link ${isActive === "contact" ? "text-primary": ""}`} onClick={() => setIsActive("contact")}>
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
