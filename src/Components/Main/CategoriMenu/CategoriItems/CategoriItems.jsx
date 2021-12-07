import React from 'react';
import Button from '../../../SingleComponent/Buttons/Butons';
import cssClass from './CategoriItems.module.scss';

const CategoriItems = () => (
    <div className={cssClass.categoriItem}>
        <h4>Category menu</h4>
        <ul className="navbar nav">
            <li className="nav-item">
                <a className="nav-link" href="#items">
                    Bakery
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#items">
                    Fruit and vegetables
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#items">
                    Meat and fish
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#items">
                    Drinks
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#items">
                    Kitchen
                </a>
            </li>
        </ul>
        <a href="#button">
            <Button Type="bright" Size="mediumButton" Text="More categories" />
        </a>
    </div>
);

export default CategoriItems;
