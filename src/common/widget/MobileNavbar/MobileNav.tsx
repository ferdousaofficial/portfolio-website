import { navData, socialLinks } from "@/shared/config/constants";
import { motion, AnimatePresence } from "framer-motion";
import { menuSlide, slide } from "./animation";
import Curve from "./Curve";

interface MobileNavProps {
  isActive: boolean;
}

const MobileNav: React.FC<MobileNavProps> = ({ isActive }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {isActive && (
          <motion.div
            variants={menuSlide}
            animate="enter"
            exit={"exit"}
            initial="initial"
            className={` fixed top-0 right-0 w-[100%] z-[99] bg-[#050b0c] h-screen py-52 `}
          >
            <ul className=" text-center space-y-7">
              {navData.map((e, id) => (
                <motion.div
                  custom={id + 1}
                  variants={slide}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                >
                  <li key={id}>
                    <a
                      href={e.path}
                      className="text-[#fff]/50 smooth hover:text-[#fff] text-3xl"
                    >
                      {e.name}
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
