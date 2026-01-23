import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchRecipesByCategory } from "../../../api/remoteApiRecipeService.js";
import Spinner from "../../ui/Spinner.jsx";

export default function RecipesByCategory() {
  const param = useParams();
  const category = param.category;

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const loadReciped = async () => {
      try {
        const result = await fetchRecipesByCategory(category, signal);
        setRecipes(result.meals);
      } catch (err) {
        throw new Error("Failed to fetch recipes!");
      }
    };

    loadReciped();
    return () => {
      console.log("Request aborted");
      controller.abort();
    };
  }, []);

  return (
    <>
      <h1 className="text-3xl text-center font-bold mt-10">
        {category} recipes
      </h1>
      <div className="border-t-4 border-amber-700 mt-4"></div>

      {recipes.length > 0 ? (
        // <div className="max-w-4xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-6 w-4/5 mr-auto ml-auto">
          {recipes.map((meal) => (
            <div
              key={meal.idMeal}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <h2 className="text-xl font-semibold text-gray-800 mt-4">
                {meal.strMeal}
              </h2>
              <a
                href={`/recipe/api/${category}/${meal.idMeal}`}
                className="text-amber-900 font-semibold hover:underline mt-4 inline-block"
              >
                View Recipe
              </a>
            </div>
          ))}
        </div>
      ) : (
        // </div>
        <Spinner />
      )}
    </>
  );
}
