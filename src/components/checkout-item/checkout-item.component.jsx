import { useContext } from 'react';
import { CartContext } from '../../contexts/cart-context';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {

  const {name, price, quantity, imageUrl } = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);

  const clearItem = () => clearItemFromCart(cartItem);

  const addItem = () => addItemToCart(cartItem);

  const removeItem = () => removeItemFromCart(cartItem);

  return (
   <div className="checkout-item-container">
    <div className="image-container">
      <img src={imageUrl} alt={`${name}`} />
    </div>
    <span className='name'>{name}</span>
    <span className="quantity">
      <div className="arrow" onClick={removeItem}>&#10094;</div>
      <span className='value'>{quantity}</span>
      <div className="arrow" onClick={addItem}>&#10095;</div>
    </span>
    <span className="price">{price}</span>
    <div className="remove-button" onClick={ clearItem }>&#10005;</div>
   </div>
  )
}

export default CheckoutItem;