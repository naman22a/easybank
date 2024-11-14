import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <img src="/images/logo.svg" alt="" />
            <nav>
                <a href="#">Home</a>
                <a href="#about">About</a>
                <a href="#articles">Articles</a>
            </nav>
            <button>Request Invite</button>
        </header>
    );
};

export default Header;
