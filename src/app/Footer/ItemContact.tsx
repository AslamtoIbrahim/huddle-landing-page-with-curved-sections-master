import React from "react";
import Image from "next/image";

interface links {
  icon: string;
  text: string;
}

type prop = {
  links: links;
};

const ItemContact = ({ links }: prop) => {
  return (
    <div className="flex items-start gap-4 ">
      <Image className="mt-1 lg:w-8" src={links.icon} alt={links.text} width={20} height={16} />
      <p className="lg:text-xl ">{links.text}</p>
    </div>
  );
};

export default ItemContact;
