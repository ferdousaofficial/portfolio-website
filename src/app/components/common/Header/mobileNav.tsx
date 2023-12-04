import { motion, AnimatePresence } from "framer-motion";
import { menuSlide, slide } from "./animation";
import Curve from "./Curve";
import { navItems } from "@/config/constant";

interface MobileNavProps {
  isActive: boolean;
  setIsActive: Function;
}

const MobileNav: React.FC<MobileNavProps> = ({ isActive, setIsActive }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {isActive && (
          <motion.div
            variants={menuSlide}
            animate="enter"
            exit={"exit"}
            initial="initial"
            className={` fixed top-0 right-0 w-[100%] z-[99] bg-mainColor h-screen py-52 `}
          >
            <ul className=" text-center space-y-7">
              {navItems.map((navitem) => (
                <motion.div
                  custom={navitem.id + 1}
                  variants={slide}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                >
                  <li key={navitem.id} onClick={() => setIsActive(!isActive)}>
                    <a
                      href={navitem.route}
                      className="text-[#fff]/50 smooth hover:text-[#fff] text-4xl capitalize"
                    >
                      {navitem.name}
                    </a>
                  </li>
                </motion.div>
              ))}
            </ul>
            <Curve />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default MobileNav;
