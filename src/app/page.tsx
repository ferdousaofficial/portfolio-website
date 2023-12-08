import Articles from "./components/ui/Articles";
import Contact from "./components/ui/Contact";
import Hero from "./components/ui/hero";
import OurApproch from "./components/ui/ourApproach";
import Services from "./components/ui/services";
import Skills from "./components/ui/skills";
import Works from "./components/ui/works";

const page: React.FC = () => {
  return (
    <div>
      <Hero />
      <Skills />
      <Services />
      <OurApproch />
      <Works />
      <Articles />
      <Contact />
    </div>
  );
};
export default page;
