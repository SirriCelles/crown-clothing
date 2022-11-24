
import { CartContext } from "../../contexts/cart-context";
import { useContext } from "react";


const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart } = useContext(CartContext);

  return (
    <div>
      <div>
        {
          cartItems.map((cartItem) => {
            const { id, name, quantity, price } = cartItem;
            return (
              <div key={id}>
                <h2>{name}</h2>
                <span>{quantity}</span>
                <div onClick={() => removeItemFromCart(cartItem)}>Decrement</div>
                <div onClick={() => addItemToCart(cartItem)}>Increment</div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Checkout;