import React from 'react';
import Logo from './image/bankLogo.png'
import  './header.css';

function Header() {
  return (
    <div>
        <div className="header">
            <div className="header-container">
                <div className="header-logo">
                    <img src={Logo} alt="DFCC_Logo" className="header-Logo" />
                </div>
                <div className="header-content">
                    <nav className="header-nav">
                        <div className="header-nav-item">
                            
                        </div>
                    </nav>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Header
