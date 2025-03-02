import {useAuth} from "../contexts/contexts"
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    
    const handleLogin = () => {
      login("testuser");
      navigate("/");
    };
    
    return (
      <div className="p-4">
        <h1 className="text-xl font-bold">Login</h1>
        <button className="mt-2 p-2 bg-blue-500 text-white rounded" onClick={handleLogin}>Login</button>
      </div>
    );
  };