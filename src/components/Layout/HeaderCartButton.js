import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';

import CartIcon from '../Cart/CartIcon';
import styles from './HeaderCartButton.module.css';

const HeaderCartButton = props => {

    const ctx = useContext(CartContext);

    const numberOfItems = ctx.items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0);
    return (

        <button className={styles.button} onClick={props.onClick}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span >Your Cart</span>
            <span className={styles.badge}>{numberOfItems}</span>
        </button>

    )

}

export default HeaderCartButton;