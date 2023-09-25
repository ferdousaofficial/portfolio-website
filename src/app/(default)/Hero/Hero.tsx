import Button from "@/common/components/shared/Button";
import Header from "./Header";
import Info from "./Info";

const Hero: React.FC = () => {
  return (
    <div className="text-center py-[80px] h-screen ">
      <div className="container">
        <div className="relative">
          <img
            src="images/bg-victor-2.png"
            alt=""
            className="absolute w-screen -z-10  2xl:top-0 xl:bottom: xl:top-0 sm:top-[5.5rem] bottom-[38%] "
          />
          <Header />
          <Info />
          <Button
            children={"Book A Quick Call "}
            href={
              "https://calendly.com/ferdousaofficial/discussion-consultation"
            }
            classname="px-7"
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
