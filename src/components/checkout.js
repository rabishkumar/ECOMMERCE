import {useCart,useAuth} from "../contexts/contexts"
import { Link } from "react-router-dom";
export const Checkout = () => {
    const { cart } = useCart();
    const { user } = useAuth();
    
    if (!user) {
      return <p>Please <Link to="/login" className="text-blue-500">log in</Link> to proceed to checkout.</p>;
    }
  
    return (
      <div className="p-4">
        <h1 className="text-xl font-bold">Checkout</h1>
        {cart.length === 0 ? <p>Your cart is empty</p> :
          cart.map((item, index) => (
            <div key={index} className="p-2 border-b">
              {item.name} - ${item.price}
            </div>
          ))}
        }
        <button className="mt-4 p-2 bg-green-500 text-white rounded">Proceed to Payment</button>
      </div>
    );
  };
  