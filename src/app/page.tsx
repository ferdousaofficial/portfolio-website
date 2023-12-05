import Hero from "./components/ui/hero";
import OurApproch from "./components/ui/ourApproach";
import Services from "./components/ui/services";
import Skills from "./components/ui/skills";

const page: React.FC = () => {
  return (
    <div>
      <Hero />
      <Skills />
      <Services />
      <OurApproch />
    </div>
  );
};
export default page;
