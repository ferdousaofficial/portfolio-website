import Button from "@/common/components/shared/Button";
import SectionTitle from "@/common/components/shared/SectionTitle";

const Contact: React.FC = () => {
  return (
    <div className="text-center " id="contact">
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

          <div className="">
            <h3 className="text-2xl italic font-semibold pt-[30px] pb-[20px]">
              Or
            </h3>
            <p className="text-[#1C2833] text-lg">
              Email Me at:{" "}
              <a
                href="mailto:ferdousaofficial@gmail.com"
                className="font-medium "
              >
                ferdousaofficial@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
