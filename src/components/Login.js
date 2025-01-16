import React, { useRef, useState } from "react";
import Header from "./Header";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "./utlils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { adduser } from "./utlils/userslice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [issignin, setissignin] = useState(true);
  const [message, setmessage] = useState(null);
  const username = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  function handleclick() {
    setmessage(null);
    if (message) return;

    const emailvalue = email.current ? email.current.value : "";
    const passwordvalue = password.current ? password.current.value : "";
    const usernamevalue =
      !issignin && username.current ? username.current.value : "";

    const usernamevalid =
      issignin ||
      /^[a-zA-Z0-9]([a-zA-Z0-9_-]{1,13}[a-zA-Z0-9])?$/.test(usernamevalue);
    const emailvalid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
      emailvalue
    );

    const passwordvalid =
      /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&?@ "]).*$/.test(
        passwordvalue
      );
    if (!issignin) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: usernamevalue,
            photoURL:
              "https://yt3.googleusercontent.com/ytc/AIf8zZSh4O0H7hSHJUxv2QDJU_gECyzbTX9_AifI9SukJg=s900-c-k-c0x00ffffff-no-rj",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                adduser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setmessage(error);
            });

          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setmessage(errorCode + "" + errorMessage);
          // ..
        });
    }
    if (issignin) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setmessage(errorCode + "" + errorMessage);
        });
    }
    if (!emailvalid) {
      setmessage("INVALID EMAIL");
    }
    if (!passwordvalid) {
      setmessage("INVALID PASSWORD");
    }
    if (!usernamevalid && !issignin) {
      setmessage("INVALID USERNAME");
    }

    if (username.current) username.current.value = "";
    if (email.current) email.current.value = "";
    if (password.current) password.current.value = "";

    setmessage("Form submitted successfully!");
  }
  function issigninnow() {
    setissignin(!issignin);
  }
  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_small.jpg"
          alt="backgoundimg"
        />
      </div>
      <div className="bg-black text-white py-8  p-12 absolute w-3/12 my-36 mx-auto left-0 right-0 bg-opacity-80">
        <form className=" rounded-lg mx-4" onSubmit={(e) => e.preventDefault()}>
          <h1 className="font-bold  text-3xl py-4">
            {issignin ? "Sign In" : "Sign Up"}
          </h1>
          {issignin ? (
            ""
          ) : (
            <input
              ref={username}
              type="text"
              placeholder="Fullname"
              className="p-4 m-4 w-full bg-gray-700"
            />
          )}
          <input
            ref={email}
            type="email"
            placeholder="Email Address"
            className="p-4 m-4 w-full  bg-gray-700"
          />

          <input
            ref={password}
            type="password"
            placeholder="password"
            className="p-4 m-4 w-full bg-gray-700"
          />
          <button
            className="w-full bg-red-600 p-4 m-4  rounded-lg"
            onClick={handleclick}
          >
            {issignin ? "Sign In" : "Sign Up"}
          </button>
          <p className="font-bold text-red-700">{message}</p>
        </form>
        <p className="p-4 cursor-pointer" onClick={issigninnow}>
          {issignin
            ? "Already Register? Sign in Now"
            : "New to netflex?Sign up Now"}
        </p>
      </div>
    </div>
  );
};

export default Login;
