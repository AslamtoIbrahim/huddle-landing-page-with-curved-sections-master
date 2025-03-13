import React from "react";
import Image from "next/image";
import image from '../../../public/source/images/screen-mockups.svg'
import StartButton from "./StartButton";

const Community = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-16 pt-16 lg:pt-6 py-8 px-4
    text-very-dark-cyan font-popines 
    md:px-8 lg:px-12 xl:px-20">

      <section className='flex flex-col items-center gap-8 lg:gap-10 xl:gap-14 text-center lg:items-start lg:text-start'>

        <h1 className="text-2xl lg:text-3xl xl:text-5xl font-bold ">Build The Community Your Fans Will Love</h1>
        <p className="font-open lg:text-lg xl:text-xl">
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you engage
          in genuine discussion.
        </p>
        <StartButton  />
      </section>

      <Image className="h-auto mt-10 xl:w-[60rem]" src={image} alt="Illustration of mockups" width={512} height={512} />

    </div>
  );
};

export default Community;
