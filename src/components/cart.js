import {useCart} from "../contexts/contexts"
import { Link } from "react-router-dom";

export const Cart = () => {
    const { cart, removeFromCart } = useCart();
    return (
      <div className="p-4">
        <h1 className="text-xl font-bold">Cart</h1>
        {cart.length === 0 ? <p>Cart is empty</p> :
          cart.map((item, index) => (
            <div key={index} className="p-2 border-b">
              {item.name} - ${item.price}
              <button
                className="ml-2 text-red-500"
                onClick={() => removeFromCart(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <Link to="/checkout" className="mt-4 block text-blue-500">Proceed to Checkout</Link>
      </div>
    );
  };