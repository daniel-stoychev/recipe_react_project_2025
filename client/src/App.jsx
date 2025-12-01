import { Route, Routes, useNavigate } from "react-router";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Catalog from "./components/Catalog.jsx";
import Register from "./components/user/Register.jsx";
import Login from "./components/user/Login.jsx";
import UserProfile from "./components/user/UserProfile.jsx";
import UserContext from "./contexts/UserContext.js";
import { useState } from "react";

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const loginHandler = (user) => {
    setUser(user);
  };
  const logoutHandler = () => {
    setUser({}), navigate("/");
  };
  const contextValue = {
    user,
    isAuthenticated: !!user.email,
    onLogin: loginHandler,
    onLogout: logoutHandler,
  };

  return (
    <UserContext.Provider value={contextValue}>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/admin">
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<UserProfile />} />
        </Route>
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
