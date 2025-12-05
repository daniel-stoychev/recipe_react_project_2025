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
import RecipeDetails from "./components/recipes/RecipeDetails.jsx";
import { RecipeProvider } from "./contexts/RecipeContext.jsx";
import EditRecipe from "./components/recipes/EditRecipe.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  //User Create context
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

  //LazyLoad
  // const UserProfile = lazy(() => import("./components/users/UserProfile"));
  // const CreateRecipe = lazy(() =>
  //   import("./components/recipes/CreateRecipe.jsx")
  // );

  return (
    <UserContext.Provider value={userContextValue}>
      <RecipeProvider>
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
          </Route>

          <Route path="/recipe">
            <Route
              path="create"
              element={<ProtectedRoute element={CreateRecipe} />}
            />
            <Route
              path=":recipeId/edit"
              element={<ProtectedRoute element={EditRecipe} />}
            />
            <Route path=":recipeId/details" element={<RecipeDetails />} />
          </Route>
        </Routes>
        <Footer />
      </RecipeProvider>
    </UserContext.Provider>
  );
}

export default App;
