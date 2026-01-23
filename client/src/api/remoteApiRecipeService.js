const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const fetchCategories = async (signal) => {
    const response = await fetch(`${BASE_URL}/categories.php`, { signal });
    if (!response.ok) {
        throw new Error("Failed to fetch categories");
    }
    return response.json();
};

export const fetchRecipesByCategory = async (id, signal) => {
    const response = await fetch(`${BASE_URL}/filter.php?c=${id}`, { signal });
    if (!response.ok) {
        throw new Error("Failed to fetch data!");
    }
    return response.json();
}

export const fetchRecipeDetails = async (recipeId, signal) => {
    const response = await fetch(`${BASE_URL}/lookup.php?i=${recipeId}`, { signal });
    if (!response.ok) {
        throw new Error("Failed to fetch recipe details!");
    }
    return response.json();
}