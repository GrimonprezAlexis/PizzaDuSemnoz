import React from "react";
import NavLink from "./NavLink";

const NavigationSection = () => {
  return (
    <nav className="cf-header-menu" id="header-menu">
      <ul>
        <li className="has-submenu">
          <a>Home</a>
          <ul className="submenu">
            <li>
              <NavLink href="/">Home 1</NavLink>
            </li>
            <li>
              <NavLink href="/home-2">Home 2</NavLink>
            </li>
            <li>
              <NavLink href="/home-3">Home 3</NavLink>
            </li>
            <li>
              <NavLink href="/home-4">Home 4</NavLink>
            </li>
            <li>
              <NavLink href="/home-5">Home 5</NavLink>
            </li>
            <li>
              <NavLink href="/home-6">Home 6</NavLink>
            </li>
            <li>
              <NavLink href="/home-7">Home 7</NavLink>
            </li>
          </ul>
        </li>
        <li className="has-submenu">
          <a>About Us</a>
          <ul className="submenu">
            <li>
              <NavLink href="/about">About</NavLink>
            </li>
            <li>
              <NavLink href="/about-2">About Two</NavLink>
            </li>
          </ul>
        </li>
        <li className="has-submenu">
          <a>Menu</a>
          <ul className="submenu">
            <li>
              <NavLink href="/menu">Menu</NavLink>
            </li>
            <li>
              <NavLink href="/menu-2">Menu Two</NavLink>
            </li>
          </ul>
        </li>
        <li className="has-submenu">
          <NavLink href="/blog">Blog</NavLink>
          <ul className="submenu">
            <li>
              <NavLink href="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink href="/blog-grid">Blog Grid</NavLink>
            </li>
            <li>
              <NavLink href="/blog/make-authentic-italian-margherita-pizza-at-home">Blog Details</NavLink>
            </li>
          </ul>
        </li>
        <li className="has-submenu">
          <a>Pages</a>
          <ul className="submenu">
            <li>
              <NavLink href="/faq">FAQs</NavLink>
            </li>
            <li>
              <NavLink href="/gallery">Gallery</NavLink>
            </li>
            <li>
              <NavLink href="/service">Service</NavLink>
            </li>
            <li>
              <NavLink href="/service/mouthwatering-culinary">Service Details</NavLink>
            </li>
            <li>
              <NavLink href="/gallery/potato-wedges">Gallery Details</NavLink>
            </li>
            <li>
              <NavLink href="/team">Team</NavLink>
            </li>
            <li>
              <NavLink href="/team/mike-dooley">Team Details</NavLink>
            </li>
            <li>
              <NavLink href="/pricing">Pricing</NavLink>
            </li>
            <li>
              <NavLink href="/reservation">Reservation</NavLink>
            </li>
            <li>
              <NavLink href="/shop">Shop</NavLink>
            </li>
            <li>
              <NavLink href="/shop/spaghetti-bolognese">Shop Details</NavLink>
            </li>
            <li>
              <NavLink href="/cart">Cart</NavLink>
            </li>
            <li>
              <NavLink href="/wishlist">Wishlist</NavLink>
            </li>
            <li>
              <NavLink href="/checkout">Checkout</NavLink>
            </li>
            <li>
              <NavLink href="/my-account">My Account</NavLink>
            </li>
          </ul>
        </li>
        <li className="has-submenu">
          <a>Contact</a>
          <ul className="submenu">
            <li>
              <NavLink href="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink href="/contact-2">Contact Two</NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationSection;
