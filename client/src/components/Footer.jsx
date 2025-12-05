import { useContext } from "react";
import UserContext from "../contexts/UserContext.js";
import hatImage from "../assets/images/hat.png";

export default function Footer() {
  const { user } = useContext(UserContext);
  return (
    <footer className="bg-white mt-30">
      <div className="border-t-4 border-amber-700"></div>
      <div className="flex justify-between items-center py-4 px-6">
        <div className="flex justify-center items-center w-full">
          <img src={hatImage} alt="Logo" className="flex mx-auto h-17 w-auto" />
        </div>
        {user && (
          <p className="absolute right-6 text-base font-semibold text-gray-500 pl-2 pr-2">
            {user.email}
          </p>
        )}
      </div>
    </footer>
  );
}
