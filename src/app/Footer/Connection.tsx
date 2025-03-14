import React from "react";
import Logo from "../Header/Logo";
import Contacts from "./Contacts";
import Social from "./Social";

const Connection = () => {
  return (
    <div
      className="bg-very-dark-cyan text-white pt-24 pb-12 px-4 flex flex-col gap-8 lg:px-12 xl:px-16
    lg:flex-row lg:gap-16 lg:items-start xl:py-32 "
    >
      <section className="flex flex-col gap-4">
        <Logo className="invert brightness-0 w-42" />
        <p className="font-opens">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam,
          atque. Minima pariatur optio amet ipsum eos tempore delectus tenetur
          sint.
        </p>
      </section>
      <Contacts />
      <Social />
    </div>
  );
};

export default Connection;
