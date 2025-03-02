import {Link, useParams } from "react-router-dom";
import {useCart } from "../contexts/contexts";
import {products} from "../api/product"
export const ProductDetails = () => {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));
    const { addToCart } = useCart();
    
    if (!product) return <p>Product not found</p>;
  
    return (
      <div className="p-4">
        <h1 className="text-xl font-bold">{product.name}</h1>
        <p>{product.description}</p>
        <p className="text-lg font-semibold">${product.price}</p>
        <button
          className="mt-2 p-2 bg-blue-500 text-white rounded"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
        <Link to="/" className="block mt-4 text-blue-500">Back to Home</Link>
      </div>
    );
  };