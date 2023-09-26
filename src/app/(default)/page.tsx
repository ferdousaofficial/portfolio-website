import Contact from "./Contact/Contact";
import Hero from "./Hero/Hero";
import Service from "./Service/Service";
import Skills from "./Skills/Skills";
import Testimonial from "./Testimoinals/testimonial";
import Works from "./Works/Works";

export const metadata = {
  title: " Ferdous Al Hasan - Front-end Web Developer",
};

export default function Home() {
  return (
    <>
      <Hero />
      {/* service and skill section */}
      <div className="py-[80px] bg-[#f5f5f5]" id="skills">
        <div className=" container  flex flex-wrap lg:justify-between justify-center lg:space-y-0 space-y-[30px]">
          <Service />
          <Skills />
        </div>
      </div>

      {/* <Works /> */}
      <Testimonial />
      <Contact />
    </>
  );
}
