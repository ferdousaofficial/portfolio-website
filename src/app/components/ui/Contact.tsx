import { contactFormInputs } from "@/config/constant";
import Input from "../common/Input";
import SectionTtitle from "../common/SectionTtitle";
import Button from "../common/button";

const Contact: React.FC = () => {
  return (
    <div className="md:pt-[80px] pt-[50px]" id="contact">
      <div className="container">
        <SectionTtitle
          title="Connect with Us for Collaboration and Support"
          styles="!pb-[20px]"
        />
        <p className="text-lg text-center">
          Book a Quick Call or Jump on Social Media. We will respond within 24
          hours.
        </p>
        <form
          action={"#"}
          className="pt-[50px] lg:w-1/2 w11/12 justify-center mx-auto space-y-7"
        >
          {contactFormInputs.map((input) => (
            <Input
              type={input.type}
              placeholder={input.placeholder}
              key={input.id}
            />
          ))}
          <div>
            <Button children={"Submit"} styles={"w-full"} />
          </div>
        </form>
      </div>
    </div>
  );
};
export default Contact;
