# Recipe Manager

## Project Overview

Recipe Manager is a web application that allows users to explore, create, and manage recipes. It provides a platform for culinary enthusiasts to share their favorite recipes and discover new ones. The application includes both public and private sections, with features such as viewing a catalog of recipes, detailed recipe information, recipes filtering and user authentication for personalized experiences.

## Application Structure

- **Public Part**:

  - Home Page
  - Recipe Catalog
  - Recipe Details
  - Login and Register Pages
  - Not found page

- **Private Part (User Area)**:
  - User Dashboard
  - Recipe Management (Create, Edit, Delete)

## Technologies Used

- **React** for building the user interface
- **React Router** for client-side routing
- **Context API** for storing recipes & user data
- **Tailwind CSS** for styling components
  - **Headlessui** for menu dropdown wrapper & other
  - **Heroicons** for icons
- **SoftUni Practice Server** for backend CRUD operations
- **Git** for version control

## Getting Started

### Download repository and run client

To get started with the project, clone the repository and install the dependencies using the following commands:

```bash
git clone https://github.com/daniel-stoychev/recipe_react_project_2025.git
cd client
npm install
npm run start
```

### Start the server

- Server available at: `https://github.com/softuni-practice-server/softuni-practice-server`
- Navigate to server folder & run: `node server.js`

Once the server and client are running, navigate to http://localhost:5173 to access the application. Users can browse recipes, register for an account, and explore additional features available to authenticated users.

---

---

---

## TODO Tasks after project defence

- [] fix AbortController
- [x] fix LazyLoad
  - [x] Profile page
  - [x] Create page
- [x] update userContext to use UserContext.jsx

- [x] implement "Recipes creation tips" page
- [] add persitence
- [x] optimize fetch requests

  - [x] create API folder and add recipeService.js
  - [x] update likeRecipe functionality
  - [x] refactor EditRecipe
  - [x] refactor CreateRecipe
  - [x] refactor RecipeDetails
  - [x] add deleteRecipe to recipeService.js

### implement remote recipes API page (`https://www.themealdb.com/api.php`)

- [x] list recipes categories
  - [x] add separate component & update route
  - [x] update page with repipe categories for client to choose from
    - [x] fetch for API recipe categories data
    - [x] list categories with appropriate UI
  - [x] implement <Snpinner/> LazyLoad for categopries
  - [x] create API folder and add remoteApiRecipeService.js
  - [x] move categories fetch to remoteApiRecipeService.js
  - [x] move RecipeCategories.jsx to recipesAPI folder
  - [x] add fetchRecipesByCategory to remoteApiRecipeService.js
  - [x] add fetchRecipeDetails to remoteApiRecipeService.js
