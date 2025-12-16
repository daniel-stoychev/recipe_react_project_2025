import { createContext, useState } from "react";
import { useNavigate } from "react-router";

export const UserContext = createContext({
  user: {},
  isAuthenticated: false,
  onLogin() {},
  onRegister() {},
  onLogout() {},
});

export const userProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const loginHandler = (user) => {
    setUser(user);
  };
  const registerHandler = (user) => {
    setUser(user);
  };
  const logoutHandler = () => {
    setUser({}), navigate("/");
  };
  const userContextValue = {
    user,
    isAuthenticated: !!user.email,
    onLogin: loginHandler,
    onRegister: registerHandler,
    onLogout: logoutHandler,
  };

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
