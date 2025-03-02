import { createContext, useContext} from "react";
export const  CartContext = createContext();
export const AuthContext = createContext();
export const useCart = () => useContext(CartContext);
export const useAuth = () => useContext(AuthContext);


