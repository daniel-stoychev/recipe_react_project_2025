import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchRecipesByCategory } from "../../../api/remoteApiRecipeService.js";

export default function RecipesByCategory() {
  const param = useParams();
  const category = param.category;

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const loadReciped = async () => {
      try {
        const result = await fetchRecipesByCategory(category);
        setRecipes(result.meals);
      } catch (err) {
        throw new Error("Failed to fetch recipes!");
      }
    };

    loadReciped();
  }, []);
  console.log(recipes);

  return (
    <>
      <h1>Recipes by category!</h1>
    </>
  );
}
