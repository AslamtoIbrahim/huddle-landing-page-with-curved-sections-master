'use client'
import React, { useRef, useState } from "react";
import StartButton from "../Main/StartButton";

const Input = () => {
  const userRef = useRef<HTMLInputElement>(null);
  const [isValidate, setisValidate] = useState(true);
  const handleChange = () => {
    const value = userRef.current?.value || "";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setisValidate(false);
    } else {
      setisValidate(true);
    }
  }
  return (
    <div className="w-full  h-full flex flex-col items-start gap-2 lg:flex-row lg:gap-6 xl:gap-12 xl:h-10">

      <section className="w-full flex flex-col items-start gap-1 ">
        <input
          ref={userRef}
          className="bg-white text-very-dark-cyan outline-none px-2 w-full py-2   rounded-md "
          type="text"
        />
        {!isValidate && <p className="text-sm pl-2 text-light-red">Please check your email</p>}
      </section>

      <StartButton onclick={handleChange} className="self-end rounded-md px-10 xl:py-2" text="Subscribe" />
    </div>
  );
};

export default Input;
