import React, { Fragment } from 'react';

import styles from './Header.module.css';
import mealImage from '../../assets/meals.jpeg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return <Fragment>
        <header className={styles.header}>
            <h1>Food App</h1>
            <HeaderCartButton onClick={props.onCartVisible} />
        </header>
        <div className={styles['main-image']}>
            <img src={mealImage} alt="Meals" />
        </div>
    </Fragment>
}

export default Header;