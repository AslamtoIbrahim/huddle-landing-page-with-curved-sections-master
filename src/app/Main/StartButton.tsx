import React from 'react'
import { twMerge } from 'tailwind-merge';

type prop = {
    className?: string;
    text?: string;
    onclick?: () => void;
  }
const StartButton = ({onclick,className, text = 'Get Started For Free'}:prop) => {
  return (
    <button onClick={onclick} className={twMerge(`bg-pink text-white text-sm px-12 py-3 rounded-full font-opens xl:py-4 xl:text-lg
        shadow-xl cursor-pointer hover:opacity-80 md:w-fit md:px-12 lg:px-16`, className)}>
          {text}
      </button>
  )
}

export default StartButton


 

 