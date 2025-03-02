import { Link} from "react-router-dom";
import {useCart } from "../contexts/contexts";
import {fetchProducts} from "../api/product"
import React, { useState, useEffect } from "react";


export const Home = () => {
    const { addToCart } = useCart();
    const [products, setProducts] = useState([]);
    //setProducts(fetchProducts());
    //fetchProducts().then(setProducts);
    useEffect(() => {
        fetchProducts().then(setProducts);
      }, []);
    return (
      <div className="p-4">
        <h1 className="text-xl font-bold">Products</h1>
        <div className="grid grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="p-4 border rounded-lg">
              <h2>{product.name}</h2>
              <p>${product.price}</p>
              <Link to={`/product/${product.id}`} className="text-blue-500">View Details</Link>
              <button
                className="mt-2 p-2 bg-blue-500 text-white rounded"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };