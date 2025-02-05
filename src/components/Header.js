import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./utlils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adduser, removeuser } from "./utlils/userslice";
import { LOGO, SUPPORTED_LANGUAGE } from "./utlils/constant";
import { togglegptsearchview } from "./utlils/gptsearchSlice";

const Header = () => {
  const showgptsearch = useSelector((store) => store.gpt.showgptsearch);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handlesignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          adduser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeuser());
        navigate("/");
      }
    });
    //it unsubscribe when component is unmount
    return () => unsubscribe();
  }, []);
  return (
    <div className="w-full absolute px-14 py-2 bg-gradient-to-b from-black z-10    ">
      <div className="flex md:justify-between  justify-center ">
        <img className="md:w-48 w-1/4 h-3/4 " src={LOGO} alt="logo" />
        <div className=" flex justify-around md:relative top-[30px] right-[50px] mt-4 ">
          {user && (
            <div className="mt-2 md:mt-0  relative bottom-15 right-12 md:bottom-16 ">
              <div className="">
                <button
                  className="bg-red-700 relative top-14 right-32 text-white px-2 rounded-lg"
                  onClick={() => {
                    dispatch(togglegptsearchview());
                  }}
                >
                  {showgptsearch ? "HOME PAGE" : "GPT SEARCH"}
                </button>
              </div>
              <div className="">
                <div className="pr-14   ">
                  <img
                    src={user?.photoURL}
                    className="h-10 mt-6"
                    alt="User profile"
                  />
                  <p className="text-white ">{user.displayName}</p>
                </div>

                <button
                  onClick={handlesignout}
                  className="bg-red-500 relative bottom-14 left-20 rounded-md text-white"
                >
                  SIGNOUT
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
