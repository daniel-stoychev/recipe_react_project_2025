import { useContext, useEffect } from "react";
import { Link } from "react-router";
import RecipesContext from "../../contexts/RecipeContext.jsx";

export default function FilterRecipe() {
  const { recipes, loadRecipes } = useContext(RecipesContext);
  useEffect(() => {
    loadRecipes();
  }, []);

  return (
    <>
      <h1 className="text-3xl text-center font-bold mt-10">All Recipes</h1>
      <div className="border-t-4 border-amber-700 mt-4"></div>
      {recipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-6 w-4/5 mr-auto ml-auto">
          {recipes.map((recipe) => (
            <div
              key={recipe._id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={recipe.imageUrl}
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {recipe.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">{recipe.category}</p>
                <div className="flex justify-between items-center">
                  <Link
                    to={`/recipe/${recipe._id}/details`}
                    className="text-amber-900 font-semibold hover:underline"
                  >
                    Details
                  </Link>
                  <div className="flex items-center">
                    {recipe.likes > 0 ? (
                      <button disabled className="text-amber-900 font-semibold">
                        👍 {recipe.likes}
                      </button>
                    ) : (
                      <button disabled className="text-amber-900 font-semibold">
                        👍 0
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h1 className="text-3xl text-center font-bold mt-10">
            There are no recipes!
          </h1>
        </div>
      )}
    </>
  );
}
