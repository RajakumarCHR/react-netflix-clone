import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
      <img
        className="w-44"
        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt="logo"
      />
      <div className="p-2 flex">
        <img
          className="w-12 h-12"
          src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
        ></img>
        <button className="text-white m-2" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
