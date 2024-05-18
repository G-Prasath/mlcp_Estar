import "./navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";
import { useState } from "react";
import React from "react";
import { Navlinks } from "../../data/HomeData";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <a href="/" className="nav__logo">
              <img src="/header_logo.png" alt="Home_Logo" />
            </a>

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
                <a href="/" className="nav__link">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="nav__link">
                  About
                </a>
              </li>
              <li className="dropdown__item focus:text-white">
                <div className={`nav__link`} onClick={toggleSubMenu}>
                    Services
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
                      <a href={item.link} className="dropdown__link">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>

              <li>
                <a href="#" className="nav__link">
                  Our Gallery
                </a>
              </li>

              <li>
                <a href="/contact" className="nav__link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
