import React from "react";
import { Styled } from "./HeroForm.styled";

const HeroForm = () => {
  return (
    <section
      className="w-full md:w-auto  bg-cover bg-no-repeat bg-center "
      style={{
        backgroundImage: `url("/images/hero.webp")`,
        height: "80vh",
      }}
    >
      <h1 className="text-6xl font-bold text-center pt-20 text-white animate-pulse ">
        Transportation At Its Finest
      </h1>
      <h2 className="text-3xl font-bold text-center text-white pt-6  ">
        Affordable luxury car service in Pakistan
      </h2>
      <div className="grid place-items-center">
        <button className="  rounded-full bg-orange-500 text-white hover:bg-pink-500 font-bold py-4 px-8 mt-5  items-center">
          Call US Now
        </button>
      </div>
    </section>
  );
};

export { HeroForm };
