import { FaUser } from "react-icons/fa";

import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import UserContext from "../../contexts/UserContext.js";

export default function RecipeDetails() {
  const { user } = useContext(UserContext);
  const { recipeId } = useParams();
  let isOwner = false;

  const [recipe, setRecipe] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3030/jsonstore/recipes/${recipeId}`)
      .then((response) => response.json())
      .then((result) => {
        setRecipe(result);
      })
      .catch((err) => alert(err.message));
  }, [recipeId]);

  //   return <h1>{recipe.title}</h1>;
  console.log(user);
  console.log(recipe);

  if (user._id === recipe._ownerId) {
    isOwner = true;
  }

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6">
      <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Image Section */}
        <div className="lg:w-1/2">
          <img
            src={recipe.imageUrl}
            alt={recipe.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details Section */}
        <div className="lg:w-1/2 bg-gray-50 p-6">
          <h2 className="text-2xl font-bold text-gray-800">{recipe.title}</h2>
          <div className="flex items-center mt-4 mb-2">
            <FaUser className="text-gray-600 mr-2" />
            <span className="text-gray-700 font-medium">
              {recipe._ownerName}
            </span>
          </div>
          <div className="border-b-2 border-amber-700 mb-4"></div>

          {/* Ingredients */}
          <h3 className="text-lg font-semibold text-gray-800 mb-5">
            Ingredients
          </h3>
          {recipe.ingredients && (
            <ul className="list-disc list-inside text-gray-700 mb-4">
              {recipe.ingredients.split(",").map((ingredient, index) => (
                <li key={index}>{ingredient.trim()}</li>
              ))}
            </ul>
          )}
          {/* <p>{console.log(recipe.ingredients)}</p> */}

          {/* Preparation Steps */}
          <h3 className="text-lg font-semibold text-gray-800 mb-5">
            Preparation
          </h3>
          {recipe.preparation && (
            // <ul className="list-disc list-inside text-gray-700 mb-4">
            //   {recipe.preparation.split(",").map((step, index) => (
            //     <li key={index}>{step.trim()}</li>
            //   ))}
            // </ul>
            <p>{recipe.preparation}</p>
          )}

          {/* Edit and Delete Buttons */}
          {isOwner && (
            <div className="flex space-x-4 mb-6 mt-5">
              <Link
                to={`/recipe/${recipe._id}/edit`}
                className="bg-amber-600 text-white font-semibold py-2 px-4 rounded hover:bg-amber-700"
              >
                Edit Recipe
              </Link>
              <Link
                to={`/recipe/${recipe._id}/delete`}
                className="bg-red-700 text-white font-semibold py-2 px-4 rounded hover:bg-red-900"
              >
                Delete Recipe
              </Link>
            </div>
          )}

          {/* Likes */}
          <div className="text-gray-800 font-semibold">
            Likes: {recipe.likes}
          </div>
        </div>
      </div>
    </div>
  );
}
