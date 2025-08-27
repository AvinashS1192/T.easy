import React from "react";
import DSA from "@/DSA.png";

const Cards = ({ image, alt, title }) => {
  return (
    <div className=" h-fit max-w-fit flex-col m-4 p-6 pb-0 rounded-2xl ">
      <div className="hover:scale-110 duration-300  text-center">
        <img src={image} alt={alt} className=" h-48 rounded-2xl  " />
        <span className="font-semibold text-2xl block p-3 text-blue-700">
          {title}
        </span>
      </div>
    </div>
  );
};

export default Cards;
