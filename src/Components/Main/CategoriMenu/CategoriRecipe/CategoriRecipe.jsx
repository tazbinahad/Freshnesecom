import React from 'react';
import Button from '../../../SingleComponent/Buttons/Butons';
import cssClass from './CategoriRecipe.module.scss';

const CategoriRecipe = () => (
    <div className={cssClass.CategoriRecipe}>
        <div className={cssClass.singleRecipe}>
            <h6>Banner subfocus</h6>
            <h3>Space for heading</h3>
            <a href="#button">
                <Button Type="default" Size="mediumButton" Text="Read recepies" />
            </a>
        </div>
    </div>
);

export default CategoriRecipe;
