import React from 'react';
import NavLink from './NavLink';

const NavigationSection = () => {
  return (
    <nav className="cf-header-menu" id="header-menu">
      <ul>
        <li className="">
          <NavLink href="/">Accueil</NavLink>
        </li>
        <li className="">
          <NavLink href="/menu">Nos Pizzas</NavLink>
        </li>
        <li className="">
          <NavLink href="/about">A Propos</NavLink>
        </li>
        <li className="">
          <NavLink href="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationSection;
