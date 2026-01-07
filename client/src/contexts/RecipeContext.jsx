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

  // removed services from here

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
