import React from "react";
import { data } from "./data";
import Card from "./Card";

const Features = () => {
  return (
    <div className="py-16 flex flex-col gap-8 xl:gap-10 lg:px-0">
      <Card component={data[0]} className="first" />
      <Card component={data[1]} className="" />
      <Card component={data[2]} className="second" />
    </div>
  );
};

export default Features;
