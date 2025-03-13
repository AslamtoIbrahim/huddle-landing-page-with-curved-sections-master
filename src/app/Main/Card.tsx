import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface Component {
  title: string;
  description: string;
  image: string;
}

type prop = {
  component: Component;
  index?: number;
  className?: string;
};

const Card = ({ component, index, className }: prop) => {
  return (
    <div className={twMerge(` flex flex-col items-center text-center gap-14 
        lg:gap-16 xl:gap-48 py-32 px-6 lg:px-8 xl:px-28
      ${index == 1 ? `lg:flex-row` : `lg:flex-row-reverse`} `, className)}>
        
      <Image className='lg:h-auto lg:w-82 xl:w-[45rem]' src={component.image} alt={component.title} width={1078} height={813} />
      <div className="flex flex-col gap-6 lg:gap-8 xl:gap-10 lg:items-start lg:text-start ">
        <h2 className="text-very-dark-cyan text-2xl lg:text-3xl xl:text-5xl font-bold">{component.title}</h2>
        <p className="text-very-dark-cyan lg:text-lg xl:text-2xl">{component.description}</p>
      </div>
    </div>
  );
};

export default Card;
