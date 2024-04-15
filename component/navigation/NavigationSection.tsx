import React from 'react';
import NavLink from './NavLink';

const NavigationSection = ({ classStyle }: { classStyle: string }) => {
  return (
    <nav className="cf-header-menu" id="header-menu">
      <ul>
        <li className="">
          <NavLink className={`${classStyle}`} href="/" activeClassName="active">
            Accueil
          </NavLink>
        </li>
        <li className="">
          <NavLink className={classStyle} href="/menu" activeClassName="active">
            Nos Pizzas
          </NavLink>
        </li>
        <li className="">
          <NavLink className={classStyle} href="/about" activeClassName="active">
            A Propos
          </NavLink>
        </li>
        <li className="">
          <NavLink className={classStyle} href="/contact" activeClassName="active">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationSection;
