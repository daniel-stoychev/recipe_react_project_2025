import { Route, Routes, useNavigate } from "react-router";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Catalog from "./components/Catalog.jsx";
import Register from "./components/users/Register.jsx";
import Login from "./components/users/Login.jsx";
import UserProfile from "./components/users/UserProfile.jsx";
import UserContext from "./contexts/UserContext.js";
import { lazy, Suspense, useState } from "react";
import CreateRecipe from "./components/recipes/CreateRecipe.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function App() {
  //Creqte context
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
  const contextValue = {
    user,
    isAuthenticated: !!user.email,
    onLogin: loginHandler,
    onRegister: registerHandler,
    onLogout: logoutHandler,
  };

  //LazyLoad
  // const UserProfile = lazy(() => import("./components/users/UserProfile"));
  // const CreateRecipe = lazy(() =>
  //   import("./components/recipes/CreateRecipe.jsx")
  // );

  return (
    <UserContext.Provider value={contextValue}>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/admin">
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />

          <Route
            path="profile"
            element={<ProtectedRoute element={UserProfile} />}
          />
          <Route
            path="recipe/create"
            element={<ProtectedRoute element={CreateRecipe} />}
          />
          {/* <Route path="recipe/create" element={<CreateRecipe />} /> */}
        </Route>
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
