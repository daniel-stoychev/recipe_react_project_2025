import { createContext, useState, useEffect, useRef } from "react";

export const RecipesContext = createContext({
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
      // if (abortRef.current) {
      //   abortRef.current.abort();
      // }

      const response = await fetch("http://localhost:3030/jsonstore/recipes");
      // {signal: controller.signal}
      const result = await response.json();
      const recipesArray = Object.values(result);

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
      await fetch(`http://localhost:3030/jsonstore/recipes/${recipe._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedRecipe),
      });

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
