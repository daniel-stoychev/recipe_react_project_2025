import { useEffect, useState } from "react";
import Spinner from "../../ui/Spinner.jsx";
import { fetchCategories } from "../../../api/remoteApiRecipeService.js";

export default function RecipeCategories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const loadCategories = async () => {
      try {
        const result = await fetchCategories();
        setCategories(result.categories);
      } catch (err) {
        setError("Failed to fetch categories");
      }
    };
    loadCategories();
  }, []);

  return (
    <>
      <h1 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
        Online API recipes categories
      </h1>
      <div className="border-t-4 border-amber-700 mt-4"></div>
      {categories.length > 0 ? (
        // <div className="max-w-4xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-6 w-4/5 mr-auto ml-auto">
          {categories
            .filter((category) =>
              [
                "Beef",
                "Chicken",
                "Pork",
                "Dessert",
                "Pasta",
                "Seafood",
                "Side",
                "Breakfast",
                "Vegetarian",
              ].includes(category.strCategory)
            )
            .map((category) => (
              <div
                key={category.idCategory}
                className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={category.strCategoryThumb}
                  alt={category.strCategory}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <h2 className="text-xl font-semibold text-gray-800 mt-4">
                  {category.strCategory}
                </h2>
                <p className="mt-2 text-gray-600">
                  {category.strCategoryDescription.length > 200
                    ? category.strCategoryDescription.slice(0, 200) + "..."
                    : category.strCategoryDescription}
                </p>
                <a
                  href={`/recipe/api/${category.strCategory}`}
                  className="text-amber-900 font-semibold hover:underline mt-4 inline-block"
                >
                  View Recipes
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
