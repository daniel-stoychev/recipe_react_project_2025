import hatImage from "../../assets/images/hat.png";
import { useContext, useState } from "react";
import RecipesContext from "../../contexts/RecipeContext.jsx";
import { useNavigate, useParams } from "react-router";

export default function EditRecipe() {
  const navigate = useNavigate();
  const { recipes, loadRecipes } = useContext(RecipesContext);
  const params = useParams();
  const recipeId = params.recipeId;
  const curRecipe = recipes.find((recipe) => recipe._id === recipeId);

  const updateRecipeHandler = async (e) => {
    e.preventDefault();

    console.log("EDIT TEST");
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);

    await fetch(`http://localhost:3030/jsonstore/recipes/${recipeId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((err) => alert(err.message));
    loadRecipes();
    navigate(`/recipe/${recipeId}/details`);
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src={hatImage}
          className="mx-auto h-17 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Edit Recipe
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={updateRecipeHandler}>
          <div>
            <label
              htmlFor="title"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Recipe Title
            </label>
            <div className="mt-2">
              <input
                id="title"
                name="title"
                type="text"
                required
                defaultValue={curRecipe.title}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="imageUrl"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Recipe Image URL
            </label>
            <div className="mt-2">
              <input
                id="imageUrl"
                name="imageUrl"
                type="text"
                required
                defaultValue={curRecipe.imageUrl}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="ingredients"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Ingredients
            </label>
            <div className="mt-2">
              <input
                id="ingredients"
                name="ingredients"
                type="text"
                required
                defaultValue={curRecipe.ingredients}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="preparation"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Preparation Steps
            </label>
            <div className="mt-2">
              <textarea
                id="preparation"
                name="preparation"
                required
                defaultValue={curRecipe.preparation}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 h-32 resize-none"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="category"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Recipe Category
            </label>
            <div className="mt-2">
              <select
                id="category"
                name="category"
                required
                defaultValue={curRecipe.category}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              >
                <option value="">Select a category</option>
                <option value="meat">Meat Recipes</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="desserts">Desserts</option>
              </select>
            </div>
          </div>

          <div>
            <input
              className="flex w-full justify-center rounded-md bg-amber-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-amber-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              type="submit"
              value="Save Changes"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
