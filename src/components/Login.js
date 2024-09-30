import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignedInForm, setIsSignedInForm] = useState(true);

  const toggleSignIn = () => {
    setIsSignedInForm(!isSignedInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/GH-en-20240923-TRIFECTA-perspective_447250ce-3fca-43ba-bef8-dddcc8484c30_small.jpg"
          alt="background-image"
        />
      </div>
      <form className="w-3/12 absolute my-36 p-12 mx-auto right-0 left-0 bg-black text-white bg-opacity-70">
        <h1 className="font-bold text-3xl py-4">
          {isSignedInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignedInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignedInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignIn}>
          {isSignedInForm
            ? "New to Netflix? Sign Up Now!"
            : "Already registered? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
