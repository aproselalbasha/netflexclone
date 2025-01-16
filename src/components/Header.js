import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./utlils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adduser, removeuser } from "./utlils/userslice";

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
    onAuthStateChanged(auth, (user) => {
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
  }, []);
  return (
    <div className="w-full absolute px-14 py-2 bg-gradient-to-b from-black z-10">
      <div className=" flex justify-between">
        <img
          className="w-48 "
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
        {user && (
          <div>
            <img
              src={user?.photoURL}
              className="h-10 mt-6"
              alt="User profile"
            />
            <p>
              {user.displayName}{" "}
              <nav
                className=" bg-red-400 cursor-pointer"
                onClick={handlesignout}
              >
                {" "}
                (SIGNOUT)
              </nav>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
