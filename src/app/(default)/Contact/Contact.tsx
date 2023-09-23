import Button from "@/common/components/shared/Button";

const Contact: React.FC = () => {
  return (
    <div className="text-center " id="contact">
      <div className="container py-[70px] space-y-[12.5px]">
        <div className="space-y-[12.5px]">
          <h2 className="sm:text-[35px] text-[28px] font-semibold">
            Get In Touch
          </h2>
          <p className="lg:text-lg sm:text-base text-[14px] pb-5 xl:w-[85%] mx-auto  ">
            Let's work together to build a powerful and user-friendly website
            that'll help you achieve your business goals. I'm looking forward to
            help you.
          </p>
        </div>
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
