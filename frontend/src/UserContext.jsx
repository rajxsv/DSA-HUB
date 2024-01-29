import { createContext, useContext, useState } from "react";
const UserContext = createContext();

// just a helper
const useUser = () => {
  const context = useContext(UserContext);
  return context ? context : "Cant Access Context here !";
};

// main function
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    return localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null;
  });

  const login = (loggedInUser) => {
    localStorage.setItem("user", JSON.stringify(loggedInUser));
    setUser(loggedInUser);
  };
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, useUser };
