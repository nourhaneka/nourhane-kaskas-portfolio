'use client';

import MobileMenu from './MobileMenu/MobileMenu';

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Desktop links */}
      <div className="desktop-navbar">
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact" className="nav-contact">Hire ME</a>
      </div>

      {/* Mobile / tablet menu */}
      <div className="mobile-menu-wrapper">
        <MobileMenu />
      </div>
    </nav>
  );
}
