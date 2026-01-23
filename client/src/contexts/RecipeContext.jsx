import { createContext, useState, useEffect } from "react";
import { allRecipes, likeRecipeRequest } from "../api/recipeService.js";
import Swal from "sweetalert2";

const RecipesContext = createContext({
  recipes: [],
  loadRecipes: () => {},
  likeRecipe: () => {},
});

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  // const abortRef = useRef(null);
  // useEffect(() => {
  //   const controller = new AbortController();
  //   const signal = controller.signal;
  //   loadRecipes(signal);
  //   return () => {
  //     console.log('aborted');
  //     controller.abort();

  //   }
  // }, []);

  const loadRecipes = async (signal) => {
    try {
      const recipesArray = await allRecipes(signal);
      setRecipes(recipesArray);
    } catch (err) {
      throw new Error("Failed to fetch!");

      // Swal.fire({
      //   icon: "error",
      //   title: "Sorry...",
      //   text: err.message,
      // });
    }
  };

  const likeRecipe = async (id, userId) => {
    const recipe = recipes.find((recipe) => recipe._id === id);

    if (!recipe) {
      console.error("Recipe not found with ID:", id);
      return;
    }

    const updatedRecipe = {
      ...recipe,
      likes: recipe.likes ? recipe.likes + 1 : 1,
      likedUsers: recipe.likedUsers ? [...recipe.likedUsers, userId] : [userId],
    };

    try {
      await likeRecipeRequest(recipe._id, updatedRecipe);

      setRecipes((prevRecipes) =>
        prevRecipes.map((r) => (r._id === id ? updatedRecipe : r)),
      );
    } catch (err) {
      alert("Error updating recipe:", err);
    }
  };

  const value = {
    recipes,
    loadRecipes,
    likeRecipe,
  };

  return (
    <RecipesContext.Provider value={value}>{children}</RecipesContext.Provider>
  );
};

export default RecipesContext;
