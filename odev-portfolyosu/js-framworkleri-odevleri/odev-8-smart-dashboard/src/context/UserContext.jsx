import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Muhammed",
    role: "Admin" 
  });

  const updateName = (newName) => {
    setUser({ ...user, name: newName });
  };

  return (
    <UserContext.Provider value={{ user, updateName }}>
      {children}
    </UserContext.Provider>
  );
};