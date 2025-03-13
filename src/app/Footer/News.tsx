import React from "react";
import Input from "./Input";

const News = () => {
  return (
    <div className="text-white font-opens flex flex-col items-start gap-6">
      <h2 className="uppercase text-lg font-semibold">Newsletter</h2>
      <p>
        To recieve tips on how to grow your community, sign up to our weekly
        newsletter. We’ll never send you spam or pass on your email address
      </p>
      
      <Input />
      
    </div>
  );
};

export default News;
