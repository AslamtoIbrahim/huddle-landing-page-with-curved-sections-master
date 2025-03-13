import Image from "next/image";
import React from "react";

interface privs {
  number: string;
  text: string;
  icon: string;
}

type prop = {
    privs: privs;
}
const Preview = ({privs}: prop) => {
  return <div className="flex flex-col font-popines gap-4">
    <Image className="w-8" src={privs.icon} alt={privs.text} width={47} height={41} />
    <section className="flex flex-col font-popines gap-4 items-center text-start">
        <p className="text-very-dark-cyan text-6xl font-semibold">{privs.number}</p>
        <p className="text-neutral-500">{privs.text}</p>
    </section>
  </div>;
};

export default Preview;
