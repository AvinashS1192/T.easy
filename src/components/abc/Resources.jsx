import React from "react";
import Cards from "./Cards";
import DSA from "@/DSA.png";
import DEV from "@/DEVV.png";
import DIS from "@/Discussion.png";

export const Resources = () => {
  return (
    <div className="bg-indigo-100 h-1/3 flex justify-between">
      <Cards image={DSA} alt={"DSA"} title={" DSA Resources"} />
      <Cards image={DEV} alt={"DEV"} title={" DEV Resources"} />
      <Cards image={DIS} alt={"Discussion"} title={"Disscussion"} />
    </div>
  );
};
