"use client";

import { navData } from "@/shared/config/constants";
import Button from "../components/shared/Button";
import Brand from "../components/ui/brand";
import MobileNav from "./MobileNavbar/MobileNav";
import { useState } from "react";

const header: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div className="flex items-center lg:justify-around justify-between py-5 lg:px-0 px-5">
      <Brand />

      {/* toggle navbar button */}
      <div
        className="cursor-pointer block lg:hidden relative !z-[100]"
        onClick={() => setIsActive(isActive ? false : true)}
      >
        <div
          className={` h-[2px] w-[30px] bg-[#485460] smooth mb-2 ${
            isActive && "!bg-[#ececec] rotate-45 absolute right-0 "
          }`}
        ></div>
        <div
          className={` h-[2px] w-[30px] bg-[#485460] smooth ${
            isActive && "!bg-[#ececec] -rotate-45 absolute right-0 "
          }`}
        ></div>
      </div>

      {/* nav data */}
      <div className="hidden lg:block">
        <ul className="flex items-center gap-10">
          {" "}
          {navData.map((e, i) => (
            <li key={i}>
              <a href={e.path} className="smooth hover:text-black">
                {e.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* contact button */}
      <div className="hidden lg:block">
        <Button children={"Get in touch 👋"} href={"#contact"} />
      </div>

      {/* mobile nav */}
      <MobileNav isActive={isActive} />
    </div>
  );
};
export default header;
