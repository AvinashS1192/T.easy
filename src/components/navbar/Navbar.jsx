import React from "react";
import logo from "@/image.png";
export const Navbar = () => {
  return (
    <div className="flex justify-between  items-center w-screen bg-[rgba(0,0,0,.55)] text-white font-medium fixed z-10 px-[10%] ">
      <div>
        <img
          className="h-14 rounded-2xl opacity-80 cursor-pointer"
          src={logo}
          alt="T.easy"
        />
      </div>
      <div className="mr-10 ">
        <div className="flex list-none ">
          <li className="mx-4 text-[16px]px-2 py-1 cursor-pointer">Home</li>
          <li className="mx-4 text-[16px]px-2 py-1 cursor-pointer">Resouces</li>
          <li className="mx-4 text-[16px]px-2 py-1 cursor-pointer">About Us</li>
          <li className="mx-4 text-[16px] bg-white px-2 py-1 rounded-full ">
            <button className="cursor-pointer text-[#212121]">
              Contact Us
            </button>
          </li>
        </div>
      </div>
    </div>
  );
};
