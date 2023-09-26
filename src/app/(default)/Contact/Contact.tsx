import Button from "@/common/components/shared/Button";
import SectionTitle from "@/common/components/shared/SectionTitle";

const Contact: React.FC = () => {
  return (
    <div className="text-center  relative" id="contact">
   
      <div className="container pt-[50px] md:pb-[80px] pb-[30px] space-y-[12.5px]">
        <SectionTitle
          title="Get In Touch"
          subtitle="Let's work together to build a powerful and user-friendly website that'll help you achieve your business goals. I'm looking forward to help you."
        />

        <div>
          <h3 className="pb-[20px] sm:text-[25px] text-[22px] font-semibold">
            Book your free 15 minutes online consultation
          </h3>
          <Button
            children={"Book Free Consultation"}
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
