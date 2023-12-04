import Hero from "./components/ui/hero";
import Services from "./components/ui/services";
import Skills from "./components/ui/skills";

const page: React.FC = () => {
  return (
    <div>
      <Hero />
      <Skills />
      <Services />
    </div>
  );
};
export default page;
