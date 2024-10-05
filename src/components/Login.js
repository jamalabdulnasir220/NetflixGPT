import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateForm } from "../utils/validateForm";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUND_IMAGE, NETLIX_USER_ICON } from "../utils/constants";

const Login = () => {
  const [isSignedInForm, setIsSignedInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonSubmit = () => {
    const message = isSignedInForm
      ? validateForm(
          email.current.value,
          password.current.value
          // fullName.current.value
        )
      : validateForm(
          email.current.value,
          password.current.value,
          fullName.current.value
        );
    setErrorMessage(message);

    if (message) return;

    // Sign Up
    if (!isSignedInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed UP
          const user = userCredential.user;
          // After the user is created, we update the profile of the user using
          updateProfile(user, {
            displayName: fullName.current.value,
            photoURL: NETLIX_USER_ICON,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = user;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode && errorMessage) {
            setErrorMessage("Email is already in use");
          }
        });
    }
    // Sign In
    else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed In
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode && errorMessage) {
            setErrorMessage("User Not Found! Create User");
          }
        });
    }
  };

  const toggleSignIn = () => {
    setIsSignedInForm(!isSignedInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="h-screen object-cover md:w-screen" src={BACKGROUND_IMAGE} alt="background-image" />
      </div>
      <form
        className="w-full my-28 p-6  md:w-3/12 absolute md:my-36 md:p-12 md:mx-auto right-0 left-0 bg-black text-white bg-opacity-70"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-xl font-bold md:text-3xl py-4">
          {isSignedInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignedInForm && (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonSubmit}
        >
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
