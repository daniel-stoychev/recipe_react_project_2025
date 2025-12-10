import { Link, useNavigate } from "react-router";
import hatImage from "../../assets/images/hat.png";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext.js";

export default function Login() {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();
  const { onLogin } = useContext(UserContext);
  const loginClickHandler = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { email, password } = Object.fromEntries(formData);
    //Error handling
    let valid = true;

    if (!email.trim()) {
      setEmailError("Email is required.");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!password.trim()) {
      setPasswordError("Password is required.");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (!valid) return;
    //=====
    fetch("http://localhost:3030/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((err) => {
            throw new Error(err.message);
          });
        }
        return response.json();
      })
      .then((result) => {
        // console.log(result);
        onLogin(result);
        navigate("/");
      })
      .catch((err) => alert(err.message));
  };

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Recipe"
            src={hatImage}
            className="mx-auto h-17 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Log in
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={loginClickHandler}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className={`block w-full rounded-md px-3 py-1.5 outline-1 ${
                    emailError ? "outline-red-500" : "outline-gray-300"
                  }`}
                />
                {emailError && (
                  <p className="text-red-500 text-sm mt-1">{emailError}</p>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  className={`block w-full rounded-md px-3 py-1.5 outline-1 ${
                    passwordError ? "outline-red-500" : "outline-gray-300"
                  }`}
                />
                {passwordError && (
                  <p className="text-red-500 text-sm mt-1">{passwordError}</p>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-amber-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-amber-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Not a member?{" "}
            <Link
              to="/admin/register"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
