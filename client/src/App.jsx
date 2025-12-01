import { Route, Routes } from "react-router";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Catalog from "./components/Catalog.jsx";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";
import UserContext from "./contexts/UserContext.js";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({});
  const loginHandler = (user) => {
    setUser(user);
  };
  const logoutHandler = () => {
    setUser({});
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
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
