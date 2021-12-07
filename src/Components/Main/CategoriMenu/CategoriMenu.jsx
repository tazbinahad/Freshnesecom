import React from 'react';
import CategoriItems from './CategoriItems/CategoriItems';
import CategoriRecipe from './CategoriRecipe/CategoriRecipe';

const CategoriMenu = () => (
    <div className="categoriMenu">
        <div className="container">
            <CategoriItems />
            <CategoriRecipe />
        </div>
    </div>
);

export default CategoriMenu;
