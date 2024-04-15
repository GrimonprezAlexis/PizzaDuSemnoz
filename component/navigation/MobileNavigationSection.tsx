'use client';
import { useCafeuContext } from '@/context/CafeuContext';
import React from 'react';
import NavLink from './NavLink';
import Link from 'next/link';
const MobileNavigationSection = () => {
  const { closeSidebar } = useCafeuContext();

  const handleLinkClick = () => {
    closeSidebar(); // Close the sidebar when a link is clicked
  };

  return (
    <div className="mobile-menu-container">
      <a href="#nav" className="mobile-menu-reveal">
        <span>
          <span>
            <span></span>
          </span>
        </span>
      </a>
      <nav className="mobile-menu-nav">
        <div className="mobile-menu-bar">
          <a href="#nav" className="mobile-menu-reveal">
            <span>
              <span>
                <span></span>
              </span>
            </span>
          </a>
          <nav className="mobile-menu-nav"></nav>
        </div>
        <ul>
          <li className="has-submenu">
            <Link href="/" onClick={handleLinkClick}>
              Accueil
            </Link>
          </li>
          <li className="has-submenu">
            <Link href="/menu" onClick={handleLinkClick}>
              Nos Pizzas
            </Link>
          </li>
          <li className="has-submenu">
            <Link href="/about" onClick={handleLinkClick}>
              A propos
            </Link>
          </li>
          <li className="has-submenu">
            <Link href="/contact" onClick={handleLinkClick}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNavigationSection;
