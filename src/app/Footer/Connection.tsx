import React from "react";
import Logo from "../Header/Logo";
import Contacts from "./Contacts";
import Social from "./Social";
import { twMerge } from "tailwind-merge";

type prop = {
  className?:string;
}
const Connection = ({className}: prop) => {
  return (
    <div
      className={twMerge('text-white pt-24 pb-12 px-4 flex flex-col gap-8 lg:px-12 xl:px-16 lg:gap-16 lg:items-start lg:py-24 ', className)}
    >
      <section className="flex flex-col gap-4">
        <Logo className="invert brightness-0 w-42" />
        <p className="font-opens xl:pr-72">
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
