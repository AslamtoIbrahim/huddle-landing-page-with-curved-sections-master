import React from "react";
import StartButton from "./StartButton";

const ReadyCard = () => {
  return (
    <div
      className="flex flex-col gap-4 items-center text-center px-4 md:mx-8 lg:mx-32 xl:mx-48 py-8 lg:py-12 xl:py-16 
           bg-white  lg:gap-8 xl:gap-16 "
    >
      <h2 className="text-very-dark-cyan text-xl font-bold lg:text-2xl xl:text-4xl">
        Ready To Build Your Community?
      </h2>
      <StartButton />
    </div>
  );
};

export default ReadyCard;
