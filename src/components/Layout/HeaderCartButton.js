import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import CartContext from '../../store/cart-context';

import CartIcon from '../Cart/CartIcon';
import styles from './HeaderCartButton.module.css';

const HeaderCartButton = props => {

    const [buttonIsHightlighted, setButtonIsHightlighted] = useState(false);
    const ctx = useContext(CartContext);

    const { items } = ctx;

    const numberOfItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0);

    const btnClasses = `${styles.button} ${buttonIsHightlighted ? styles.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }

        setButtonIsHightlighted(true);

        const timer = setTimeout(() => {
            setButtonIsHightlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }


    }, [items]);

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span >Your Cart</span>
            <span className={styles.badge}>{numberOfItems}</span>
        </button>

    )

}

export default HeaderCartButton;