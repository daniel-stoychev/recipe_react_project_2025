import { useContext } from "react";
import UserContext from "../../contexts/UserContext.js";
import RecipesContext from "../../contexts/RecipeContext.jsx";
import { Link } from "react-router";

export default function UserProfile() {
  const { user } = useContext(UserContext);
  let { recipes } = useContext(RecipesContext);
  console.log(user);
  recipes = recipes.filter((recipe) => recipe._ownerId === user._id);

  return (
    <>
      <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4 mb-20">
        <div className="sm:flex sm:items-center px-6 py-4">
          <img
            className="block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 w-16 rounded-full"
            src={"https://cdn-icons-png.flaticon.com/512/8792/8792047.png"}
            alt="Profile"
          />
          <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
            <p className="text-xl leading-tight">{user.username}</p>
            <p className="text-sm leading-tight text-gray-600">{user.email}</p>
            <div className="mt-4">
              <p className="text-gray-700">
                <span className="font-semibold">Recipes Added:</span>{" "}
                {recipes.length}
              </p>
              {/* <p className="text-gray-700">
                <span className="font-semibold">Commented Recipes:</span>{" "}
                {user.commentedRecipes}

              </p> */}
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-3xl text-center font-bold mt-10">My recipes</h1>
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
