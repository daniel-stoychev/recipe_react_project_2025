# Recipe Manager

## Project Overview

Recipe Manager is a web application that allows users to explore, create, and manage recipes. It provides a platform for culinary enthusiasts to share their favorite recipes and discover new ones. The application includes both public and private sections, with features such as viewing a catalog of recipes, detailed recipe information, and user authentication for personalized experiences.

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

## General Requirements

- [ ] Use React.js for the client-side
- [ ] Communicate with the SoftUni Practice Server for all CRUD operations
- [ ] Implement authentication
- [ ] Implement client-side routing to at least 5 pages (at least 2 with parameters)
- [ ] Meaningful commits to a source control system like GitHub for at least 3 days
- [ ] Must have specific views:
  - [ ] Catalog – list of all created recipes
  - [ ] Details – information about a specific recipe
- [ ] At least one collection, different from the User collection, with all CRUD operations (create, read, update, delete)
- [ ] Logged in users – create records and request to the REST API, interaction with the records (via Likes, Comments, etc.)
- [ ] Logged in (author) – to be able to Edit / Delete their recipes
- [ ] A Guest should have access to basic website information (catalog, details), but not to the functional activities

## Other Requirements

- [ ] Apply error handling and data validation to avoid crashes when invalid data is entered
- [ ] The application should be divided into components
- [ ] Use appropriate folder structure
- [ ] Brief documentation on the project and project architecture (as .md file)
- [ ] Demonstrate use of the following programming concepts, specific to the React library:
  - [ ] React Hooks
  - [ ] Context API
  - [ ] Stateless and stateful components
  - [ ] Bound forms
  - [ ] Synthetic events
  - [ ] Component lifecycle (mount, update, unmount)
- [ ] Component Styling (use at least some external CSS files)
- [ ] Implement route guards for the private AND the public part
- [ ] Good usability. Good UI and UX (follow Design Best Practice guide)

## Technologies Used

- **React** for building the user interface
- **React Router** for client-side routing
- **Tailwind CSS** for styling components
- **SoftUni Practice Server** for backend CRUD operations
- **TheMealDB API** for fetching recipe data
- **AbortController** for managing API requests and handling cancellations
- **Git** for version control

## Getting Started

To get started with the project, clone the repository and install the dependencies using the following commands:

```bash
git clone <repository-url>
cd recipe-sharing-app
npm install
npm run dev
```
