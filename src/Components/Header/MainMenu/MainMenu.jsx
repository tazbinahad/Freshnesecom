import React from 'react';
import cssClass from './MainMenu.module.scss';

const MainMenu = () => (
    <div className={cssClass.mainMenu}>
        <div className="container px-0">
            <ul className="navbar nav justify-content-start">
                <li className="nav-item">
                    <a href="#menu" className="nav-link">
                        Bakery
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#menu" className="nav-link">
                        Fruit and vegetables
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#menu" className="nav-link">
                        Meat and fish
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#menu" className="nav-link">
                        Drinks
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#menu" className="nav-link">
                        Kitchen
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#menu" className="nav-link">
                        Special nutrition
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#menu" className="nav-link">
                        Baby
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#menu" className="nav-link">
                        Pharmacy
                    </a>
                </li>
            </ul>
        </div>
    </div>
);

export default MainMenu;
