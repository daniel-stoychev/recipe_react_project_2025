import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/jsonstore/recipes")
      .then((response) => response.json())
      .then((result) => {
        // console.log(Object.values(result));
        const recipiesObj = Object.values(result);
        setRecipes(recipiesObj);
      })
      .catch((err) => alert(err.message));
  }, []);

  console.log(recipes);

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
                    <button className="text-amber-900 font-semibold hover:text-amber-700">
                      👍 0
                    </button>
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
