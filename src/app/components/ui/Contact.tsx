import SectionTtitle from "../common/SectionTtitle";
import Button from "../common/button";

const Contact: React.FC = () => {
  return (
    <div className="md:pt-[80px] pt-[50px]" id="contact">
      <div className="container">
        <SectionTtitle title="Connect with Us for Collaboration and Support" styles="!pb-[20px]"/>
        <p className="md:text-lg text-base text-center text-textColor2 lg:w-1/2 mx-auto leading-[1.8]">
          Schedule a Quick Call or connect with us on Social Media.
          Alternatively, you can directly email us with details of your problem
          or the desired solution. We will respond within 24 hours.
        </p>
        <div className="mx-auto w-fit pt-8">
          <Button
            children={"Schedule Appointment"}
            href={
              "https://calendly.com/ferdousaofficial/discussion-consultation"
            }
          />
        </div>
      </div>
    </div>
  );
};
export default Contact;
