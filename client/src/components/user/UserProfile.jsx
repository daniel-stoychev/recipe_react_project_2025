import { useContext } from "react";
import UserContext from "../../contexts/UserContext.js";

export default function UserProfile({}) {
  const { user } = useContext(UserContext);
  console.log(user);

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4">
      <div className="sm:flex sm:items-center px-6 py-4">
        <img
          className="block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 w-16 rounded-full"
          src={"https://cdn-icons-png.flaticon.com/512/8792/8792047.png"}
          alt="Profile"
        />
        <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
          <p className="text-xl leading-tight">{user.username}</p>
          <p className="text-sm leading-tight text-gray-600">{user.email}</p>
          <div className="mt-4">
            <p className="text-gray-700">
              <span className="font-semibold">Recipes Added:</span>{" "}
              {/* {user.recipesAdded} */}
              {"5"}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Commented Recipes:</span>{" "}
              {/* {user.commentedRecipes} */}
              {"3"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
