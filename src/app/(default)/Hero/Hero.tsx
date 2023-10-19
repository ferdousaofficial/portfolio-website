import Button from "@/common/components/shared/Button";
import Header from "./Header";
import Info from "./Info";

const Hero: React.FC = () => {
  return (
    <div className="text-center h-screen grid place-content-center">
      <div className="container">
        <div className="relative">
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
