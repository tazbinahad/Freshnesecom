import React from 'react';
import MainMenu from './MainMenu/MainMenu';
import MiddleHeader from './MiddleHeader/MiddleHeader';
import TopHeader from './TopHeader/TopHeader';

const Header = () => (
    <header>
        <TopHeader />
        <MiddleHeader />
        <MainMenu />
    </header>
);

export default Header;
