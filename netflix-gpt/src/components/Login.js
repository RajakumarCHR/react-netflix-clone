import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignIsForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignIsForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/de83335a-e44b-4515-97a9-8ebeb58b2cad/US-en-20240129-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          srcset="https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/de83335a-e44b-4515-97a9-8ebeb58b2cad/US-en-20240129-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/de83335a-e44b-4515-97a9-8ebeb58b2cad/US-en-20240129-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/de83335a-e44b-4515-97a9-8ebeb58b2cad/US-en-20240129-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
          alt=""
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black m-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {!isSignInForm ? "Sign Up" : "Sign In"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 w-full bg-gray-500"
          />
        )}
        <input
          type="text"
          placeholder="Email adress"
          className="p-2 my-4 w-full bg-gray-500"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-500"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {!isSignInForm ? "Sign Up" : "Sign In"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? " New to Netflix? Sign Up Now"
            : "Already a User?  Sign in Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
