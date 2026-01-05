const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const fetchCategories = async () => {
    const response = await fetch(`${BASE_URL}/categories.php`);
    if (!response.ok) {
        throw new Error("Failed to fetch categories");
    }
    return response.json();
};

export const fetchRecipesByCategory = async (id) => {
    const response = await fetch(`${BASE_URL}/filter.php?c=${id}`);
    if (!response.ok) {
        throw new Error("Failed to fetch data!");
    }
    return response.json();
}

export const fetchRecipeDetails = (recipeId) => {
    const response = `${BASE_URL}/lookup.php?i=${recipeId}`;
    if (!response.ok) {
        throw new Error("Failed to fetch recipe details!");
    }
    return response.json();
}