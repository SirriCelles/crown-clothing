import { useContext } from 'react';
import { CartContext } from '../../contexts/cart-context';


import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';

import  { CartDropdownContainer, EmptyMessage, CartItems} from './cart-dropdown.styles.jsx';

const CartDropdown = () => {

    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckout = () => {
        navigate('/checkout');
    }

    return (
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length ? (
                        cartItems.map(item => <CartItem key={item.id} cartItem={item}></CartItem> )
                    ) : (
                        <EmptyMessage>Add Idtems to Cart</EmptyMessage>
                    )
                }
                {cartItems.map(item => <CartItem key={item.id} cartItem={item}></CartItem> )}
            </CartItems>
            <Button onClick={goToCheckout}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    )
};

export default CartDropdown;