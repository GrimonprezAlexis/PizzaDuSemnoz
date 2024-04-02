'use client'
import { useCafeuContext } from "@/context/CafeuContext";
import React from "react";
import NavLink from "./NavLink";
const MobileNavigationSection = () => {
    const {isDropdownOpen,handleDropdownToggle} = useCafeuContext()
  return (
    <div className="mobile-menu-container">
        <a 
        href="#nav" 
        className="mobile-menu-reveal" 
        ><span><span><span></span></span></span></a>
        <nav className="mobile-menu-nav">
        <div className="mobile-menu-bar">
            <a
            href="#nav"
            className="mobile-menu-reveal"
            >
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
            <a>
            Home <span 
            className="mobile-menu-expand"
            role='button' 
            onClick={() => handleDropdownToggle('home')}
            >{isDropdownOpen.home ? '-':'+'}</span>
            </a>
            <ul 
            className={`submenu ${isDropdownOpen.home ? 'd-block':'d-none'}`}
            >
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
            <a>
            About Us <span 
            className="mobile-menu-expand"
            role='button' 
            onClick={() => handleDropdownToggle('about')}
            >{isDropdownOpen.about ? '-':'+'}</span>
            </a>
            <ul 
            className={`submenu ${isDropdownOpen.about ? 'd-block':'d-none'}`}
            >
                <li>
                <NavLink href="/about">About 1</NavLink>
                </li>
                <li>
                <NavLink href="/about-2">About 2</NavLink>
                </li>
            </ul>
            </li>
            <li className="has-submenu">
            <a>
            Menu <span 
            className="mobile-menu-expand"
            role='button' 
            onClick={() => handleDropdownToggle('menu')}
            >{isDropdownOpen.menu ? '-':'+'}</span>
            </a>
            <ul 
            className={`submenu ${isDropdownOpen.menu ? 'd-block':'d-none'}`}
            >
                <li>
                <NavLink href="/menu">Menu 1</NavLink>
                </li>
                <li>
                <NavLink href="/menu-2">Menu 2</NavLink>
                </li>
            </ul>
            </li>
            <li className="has-submenu menu-lasts">
            <a>
                Blog 
                <span 
                className="mobile-menu-expand"
                role='button' 
                onClick={() => handleDropdownToggle('blog')}
                >{isDropdownOpen.blog ? '-':'+'}</span>
            </a>
            <ul 
            className={`submenu ${isDropdownOpen.blog ? 'd-block':'d-none'}`}
            >
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
            <li className="has-submenu menu-lasts">
            <a>Pages <span 
            className="mobile-menu-expand"
            role='button' 
                onClick={() => handleDropdownToggle('pages')}
                >{isDropdownOpen.pages ? '-':'+'}</span>
            </a>
            <ul 
            className={`submenu ${isDropdownOpen.pages ? 'd-block':'d-none'}`}
            >
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
            <a>
            Contact <span 
            className="mobile-menu-expand"
            role='button' 
            onClick={() => handleDropdownToggle('contact')}
            >{isDropdownOpen.contact ? '-':'+'}</span>
            </a>
            <ul 
            className={`submenu ${isDropdownOpen.contact ? 'd-block':'d-none'}`}
            >
                <li>
                <NavLink href="/contact">Contact 1</NavLink>
                </li>
                <li>
                <NavLink href="/contact-2">Contact 2</NavLink>
                </li>
            </ul>
            </li>
        </ul>
        </nav>
    </div>
  );
};

export default MobileNavigationSection;
