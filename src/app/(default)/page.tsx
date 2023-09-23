import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import Service from "./Service/Service";
import Skills from "./Skills/Skills";
import Works from "./Works/Works";

export const metadata = {
  title: " Ferdous Al Hasan - Front-end Web Developer",
};

export default function Home() {
  return (
    <>
      <Hero />
      {/* service and skill section */}
      <div className="container pb-[80px]" id="skills">
        <div className="flex flex-wrap lg:justify-between justify-center lg:space-y-0 space-y-[30px]">
          <Service />
          <Skills />
        </div>
      </div>

      <Works />
      <Contact />
      <Footer />
    </>
  );
}
