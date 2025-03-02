import React, { useState } from "react";
import {AuthContext} from "../contexts/contexts"

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    
    const login = (username) => setUser({ username });
    const logout = () => setUser(null);
  
    return (
      <AuthContext.Provider value={{ user, login, logout }}>
        {children}
      </AuthContext.Provider>
    );
  };