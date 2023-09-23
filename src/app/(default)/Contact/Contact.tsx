import Button from "@/common/components/shared/Button";

const Contact: React.FC = () => {
  return (
    <div className="text-center">
      <div className="container pb-[80px] space-y-[12.5px]">
        <div className="space-y-[12.5px]">
          <h2 className="sm:text-[35px] text-[28px] font-semibold">Get In Touch</h2>
          <p className="lg:text-lg sm:text-base text-[14px] pb-5 mx-auto ">
            Let's work together to build a powerful and user-friendly website
            that'll help you achieve your business goals. I'm looking forward to
            help you.
          </p>
        </div>
        <div>
          <h3 className="pb-[20px] sm:text-[25px] text-[22px] font-semibold">Book your free 15 minutes online consultation</h3>
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
