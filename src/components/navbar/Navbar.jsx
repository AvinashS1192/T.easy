import React from "react";
import logo from "../../assets/image.png";
export const Navbar = () => {
  return (
    <div className="flex justify-between  items-center w-screen bg-zinc-800 text-white font-medium fixed z-10 px-[10%] ">
      <div>
        <img className="h-14 rounded-2xl " src={logo} alt="T.easy" />
      </div>
      <div className="mr-10 ">
        <div className="flex list-none">
          <li className="mx-4 text-[16px]">Home</li>
          <li className="mx-4 text-[16px]">Resouces</li>
          <li className="mx-4 text-[16px]">About Us</li>
          <li className="mx-4 text-[16px]">Contact Us</li>
        </div>
      </div>
    </div>
  );
};
