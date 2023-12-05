"use client";
import { skillItems } from "@/config/constant";
import { useRef } from "react";
import Marquee from "react-fast-marquee";

const Skills: React.FC = () => {
  return (
    <div className="overflow-x-auto lg:overflow-hidden">
      <div className="container">
        <Marquee>
          <div className="flex items-center 2xl:justify-center">
            {skillItems.map((item) => (
              <img
                key={item.id}
                src={item.image}
                alt={item.image}
                className="w-fit mx-5"
              />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};
export default Skills;
