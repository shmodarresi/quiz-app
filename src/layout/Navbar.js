import React from 'react';
import logo from '../logo.webp';

const Navbar = () => {
    return (
        <header className="main-header row p-2">
            <img src={logo} alt="deevio" />
        </header>
    );
};

export default Navbar;