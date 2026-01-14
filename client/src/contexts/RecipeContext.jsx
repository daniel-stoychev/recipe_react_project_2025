import { createContext, useState, useEffect, useRef } from "react";
import { allRecipes, updateRecipe } from "../api/recipeService.js";

const RecipesContext = createContext({
  recipes: [],
  loadRecipes: () => {},
  likeRecipe: () => {},
});

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  // const abortRef = useRef(null);
  useEffect(() => {
    loadRecipes();
    // return () => {
    //   if (abortRef.current) {
    //     abortRef.current.abort();
    //   }
    // };
  }, []);

  const loadRecipes = async () => {
    try {
      const recipesArray = await allRecipes();
      setRecipes(recipesArray);
    } catch (err) {
      alert("Error loading recipes:", err);
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
      await updateRecipe(recipe._id, updatedRecipe);

      setRecipes((prevRecipes) =>
        prevRecipes.map((r) => (r._id === id ? updatedRecipe : r))
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
