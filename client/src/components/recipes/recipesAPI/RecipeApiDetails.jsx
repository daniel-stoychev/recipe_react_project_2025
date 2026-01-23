import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchRecipeDetails } from "../../../api/remoteApiRecipeService.js";

export default function RecipeDetails() {
  const [recipeDetails, setRecipeDetails] = useState([]);
  const params = useParams();
  const recipeId = params.mealId;
  console.log(recipeId);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const loadRecipeData = async () => {
      try {
        const recipeDetails = await fetchRecipeDetails(recipeId, signal);
        setRecipeDetails(recipeDetails.meals[0]);
      } catch (err) {
        throw new Error("Failed to recipe data!");
      }
    };
    loadRecipeData();
    return () => {
      console.log("Request aborted!");
      controller.abort();
    };
  }, []);

  console.log(recipeDetails);

  // Extract and filter non-empty ingredients and their measurements
  const ingredients = Object.keys(recipeDetails)
    .filter((key) => key.startsWith("strIngredient") && recipeDetails[key])
    .map((key, index) => {
      const ingredient = recipeDetails[key];
      const measure = recipeDetails[`strMeasure${index + 1}`];
      return `${measure ? measure + " " : ""}${ingredient}`;
    });

  return (
    <>
      <div className="max-w-6xl mx-auto mt-10 p-6">
        <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Image Section */}
          <div className="lg:w-1/2">
            <img
              src={recipeDetails.strMealThumb}
              alt={recipeDetails.strMeal}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details Section */}
          <div className="lg:w-1/2 bg-gray-50 p-6">
            <h2 className="text-2xl font-bold text-gray-800">
              {recipeDetails.strMeal}
            </h2>
            <div className="border-b-2 border-amber-700 mb-4 mt-4"></div>

            {/* Ingredients */}
            <h3 className="text-lg font-semibold text-gray-800 mb-5">
              Ingredients
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>

            {/* Preparation Steps */}
            <h3 className="text-lg font-semibold text-gray-800 mb-5">
              Preparation
            </h3>
            <p className="text-gray-700">{recipeDetails.strInstructions}</p>
          </div>
        </div>
      </div>
    </>
  );
}
