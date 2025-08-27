import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
export const Hero = () => {
  return (
    <>
      <div
        className=" 
       h-screen w-screen  bg-no-repeat bg-cover bg-[linear-gradient(to_right,rgba(8,0,58,0.7),rgba(8,0,58,0.7)),url('@/hero.jpg')]
       text-white   px-[10%] flex justify-center items-center
        "
      >
        <div className="text-center w-3xl">
          <h1 className=" text-6xl font-semibold">
            All You Need to Learn, Build, and Grow
          </h1>
          <br />
          <p className="w-2xl ml-2.5 mr-5 ">
            Your one-stop hub for every tech resource that matters. From
            mastering Data Structures & Algorithms to building real-world
            projects in Web Development, and diving into the future with AI/ML,
            everything is organized in a single space. No endless searching, no
            scattered links—just the best curated guides, tools, and roadmaps to
            help you learn smarter, build faster, and grow stronger in your tech
            journey.
          </p>
          <br />
          <div className="">
            <button className="text-[16px] bg-white px-4 py-2 rounded-full cursor-pointer text-[#212121] font-semibold justify-center items-center inline-flex">
              Explore More
              <FaArrowRightLong className="m-2" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
