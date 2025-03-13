import React from "react";
import Image from "next/image";
import logo from "../../../public/source/images/logo.svg";
import { twMerge } from "tailwind-merge";

type prop = {
  className?: string;
};
const Logo = ({ className }: prop) => {
  return (
    <div>
      <Image
        className={twMerge("h-auto w-32 xl:w-40", className)}
        src={logo}
        alt="logo"
        width={240}
        height={39}
      />
    </div>
  );
};

export default Logo;
