import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./utlils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adduser, removeuser } from "./utlils/userslice";
import { LOGO } from "./utlils/constant";

const Header = () => {
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
    <div className="w-full absolute px-14 py-2 bg-gradient-to-b from-black z-10">
      <div className=" flex justify-between">
        <img className="w-48 " src={LOGO} alt="logo" />
        {user && (
          <div>
            <img
              src={user?.photoURL}
              className="h-10 mt-6"
              alt="User profile"
            />
            <div>
              {user.displayName}{" "}
              <nav
                className=" bg-red-400 cursor-pointer"
                onClick={handlesignout}
              >
                {" "}
                (SIGNOUT)
              </nav>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
