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
