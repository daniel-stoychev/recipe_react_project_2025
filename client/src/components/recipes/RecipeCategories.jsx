export default function RecipeCategories() {
  const apiCategories =
    "https://www.themealdb.com/api/json/v1/1/categories.php";
  fetch(apiCategories)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((err) => alert("Failed listing categories", err));
  return (
    <>
      <h1>Online API recipes</h1>
    </>
  );
}
