// if (abortRef.current) {
//   abortRef.current.abort();
// }

const BASE_URL = "http://localhost:3030/jsonstore/recipes";

export async function allRecipes() {
    const response = await fetch(BASE_URL);
    // {signal: controller.signal}
    if (!response.ok) {
        throw new Error("Failed to fetch recipes!");
    }
    const result = await response.json();
    const recipesArray = Object.values(result);
    return recipesArray;
}

export const likeRecipeRequest = async (id, updatedRecipe) => {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedRecipe)
    })
    if (!response.ok) {
        throw new Error("Failed to update recipe!");
    }
    return response.json();
}

export const editRecipe = async (recipeId, recipeData) => {
    const response = await fetch(`${BASE_URL}/${recipeId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(recipeData)
    });
    if (!response.ok) {
        throw new Error("Failed to update recipe!");
    }
    return response.json();
}
