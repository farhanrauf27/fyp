import { XLg,List } from 'react-bootstrap-icons';
import './Navbar.css'
import React, { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  let x;
  if (!menuOpen) {
    x = <List></List>;
  } else {
    x = <XLg></XLg>;
  }

  return (
    <>
      <div>
        <div className={`overlay ${menuOpen ? 'open' : ''}`} onClick={closeMenu}></div>
        <div className={`hamburger-menu ${menuOpen ? 'open' : ''}`}>
          <div className="hamburger-icon" onClick={toggleMenu}>
            <p className='mx-2' style={{ textAlign: 'right' }}>{x}</p>
          </div>
          {menuOpen && (
            <ul className="menu-items d-flex" style={{ justifyContent: 'space-between', textAlign: 'center' }}>
              <span><li>Edit Profile</li></span>
              <span><li>Change Password</li></span>
              <span><li>My Projects</li></span>
              <span><li>Logout</li></span>
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
