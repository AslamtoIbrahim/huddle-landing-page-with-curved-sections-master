import React from "react";
import Input from "./Input";
import { twMerge } from "tailwind-merge";

type prop = {
  className?:string;
}

const News = ({className}: prop) => {
  return (
    <div className={twMerge('text-white font-opens flex flex-col items-start gap-6 lg:px-12 xl:px-16 lg:py-24 ', className)}>
      <h2 className="uppercase text-lg font-semibold">Newsletter</h2>
      <p className="xl:pr-72">
        To recieve tips on how to grow your community, sign up to our weekly
        newsletter. We’ll never send you spam or pass on your email address
      </p>
      
      <Input />
      
    </div>
  );
};

export default News;
