import Image from "next/image";
import Button from "../common/button";

const Hero: React.FC = () => {
  return (
    <div className="h-full py-[50px] 2xl:mt-[120px] grid place-content-center">
      <div className="container">
        <div className="space-y-5">
          <Image
            src={"/images/myself.png"}
            width={200}
            height={200}
            alt="myself"
            className="mx-auto rounded-md"
          />

          <div className="text-center">
            <h1 className="xl:text-[50px] font-bold lg:w-11/12 lg:text-[46px] md:text-[42px] text-[38px] mx-auto leading-tight pb-5">
              Build Modern, User-Friendly, And High-Performing Web Applications
            </h1>
            <p className="lg:w-[85%] mx-auto leading-[30px] lg:text-base md:text-[15px] text-[14.5px] ">
              I'm a passionate{" "}
              <span className="font-medium">Full-stack Web Developer</span> with
              over <span className="font-medium">1.5 years of experience</span>{" "}
              and I specialize in creating high-performing, user-centric
              websites using the latest technologies. Currently, I work as a{" "}
              <span className="font-medium">
                Junior Front-end Web Developer at Upsoul Digital.
              </span>
            </p>
          </div>

          <div className="mx-auto text-center pt-2">
            {" "}
            <Button
              children={"Book A Quick Call"}
              href={
                "https://calendly.com/ferdousaofficial/discussion-consultation"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
