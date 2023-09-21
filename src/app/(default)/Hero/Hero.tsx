import Button from "@/common/components/shared/Button";
import Header from "./Header";
import Info from "./Info";

const Hero: React.FC = () => {
  return (
    <div className="text-center py-[85px]">
      <div className="container">
        <Header />
        <Info />
        <Button
          children={"Book A Quick Call "}
          href={"https://calendly.com/ferdousaofficial/discussion-consultation"}
          classname="px-7"
        />
      </div>
    </div>
  );
};
export default Hero;
