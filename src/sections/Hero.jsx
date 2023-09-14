import React from "react";
import Card from "../components/Card";
import DUMMY_MEALS from "../constants";

const Hero = () => {
  return (
    <div className="min-h-screen hero bg-hero-pattern font-fira">
      <div className="flex flex-col items-center justify-center text-center hero-content">
        <h2 className="my-20 text-3xl font-bold">Eat to your hearts content</h2>
        <div className="">
          <Card data={[...DUMMY_MEALS]}/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
