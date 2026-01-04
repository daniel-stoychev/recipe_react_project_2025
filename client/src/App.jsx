import { Route, Routes, useNavigate } from "react-router";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Catalog from "./components/Catalog.jsx";
import Register from "./components/users/Register.jsx";
import Login from "./components/users/Login.jsx";
// import UserProfile from "./components/users/UserProfile.jsx";
import { UserProvider } from "./contexts/UserContext.jsx";
// import CreateRecipe from "./components/recipes/CreateRecipe.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import RecipeDetails from "./components/recipes/RecipeDetails.jsx";
import { RecipeProvider } from "./contexts/RecipeContext.jsx";
import EditRecipe from "./components/recipes/EditRecipe.jsx";
import Footer from "./components/Footer.jsx";
import FilterRecipe from "./components/recipes/FilterRecipe.jsx";
import { lazy, Suspense } from "react";
import Spinner from "./components/ui/Spinner.jsx";
import Tips from "./components/Tips.jsx";
import RecipeCategories from "./components/recipes/recipesAPI/RecipeCategories.jsx";

function App() {
  const UserProfile = lazy(() => import("./components/users/UserProfile.jsx"));
  const CreateRecipe = lazy(() =>
    import("./components/recipes/CreateRecipe.jsx")
  );

  return (
    <UserProvider>
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
              element={
                <Suspense fallback={<Spinner />}>
                  {<ProtectedRoute element={UserProfile} />}
                </Suspense>
              }
            />
          </Route>

          <Route path="/recipe">
            <Route
              path="create"
              element={
                <Suspense fallback={<Spinner />}>
                  {<ProtectedRoute element={CreateRecipe} />}
                </Suspense>
              }
            />
            <Route
              path=":recipeId/edit"
              element={<ProtectedRoute element={EditRecipe} />}
            />
            <Route path=":recipeId/details" element={<RecipeDetails />} />
            <Route path=":category" element={<FilterRecipe />} />
            <Route path="tips" element={<Tips />} />
            <Route path="categories" element={<RecipeCategories />} />
          </Route>
        </Routes>
        <Footer />
      </RecipeProvider>
    </UserProvider>
  );
}

export default App;
