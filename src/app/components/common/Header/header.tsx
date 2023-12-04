"use client";

import { useState } from "react";
import Brand from "./brand";
import MobileNav from "./mobileNav";
import { navItems } from "@/config/constant";
import Link from "next/link";

const Header: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div className="container">
      <header className="flex items-center justify-between py-[5px]">
        <Brand />

        {/* toggle navbar button */}
        <div
          className="cursor-pointer block lg:hidden relative !z-[100]"
          onClick={() => setIsActive(isActive ? false : true)}
        >
          <div
            className={` h-[2px] w-[30px] bg-mainColor smooth mb-2 ${
              isActive && "!bg-[#ececec] rotate-45 absolute right-0 "
            }`}
          ></div>
          <div
            className={` h-[2px] w-[30px] bg-mainColor smooth ${
              isActive && "!bg-[#ececec] -rotate-45 absolute right-0 "
            }`}
          ></div>
        </div>

        {/* nav items */}
        <nav className="lg:block hidden">
          <ul className="flex items-center gap-7">
            {navItems.map((navItem) => (
              <Link key={navItem.id} href={navItem.route}>
                <li className="text-textColor2 smooth hover:text-mainColor capitalize">
                  {navItem.name}
                </li>
              </Link>
            ))}
          </ul>
        </nav>

        {/* mobile nav */}
        <MobileNav isActive={isActive} setIsActive={setIsActive} />
      </header>
    </div>
  );
};
export default Header;
