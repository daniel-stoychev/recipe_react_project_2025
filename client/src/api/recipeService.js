// if (abortRef.current) {
//   abortRef.current.abort();
// }
export async function recipeArray() {
    const response = await fetch("http://localhost:3030/jsonstore/recipes");
    // {signal: controller.signal}
    const result = await response.json();
    const recipesArray = Object.values(result);
    return recipesArray;
}
