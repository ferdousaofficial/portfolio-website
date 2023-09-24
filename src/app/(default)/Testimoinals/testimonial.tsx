import SectionTitle from "@/common/components/shared/SectionTitle";
import SliderArrowNav from "@/common/components/shared/SliderArrowNav";
import { Testimonials } from "@/shared/config/constants";

const Testimonial: React.FC = () => {
  return (
    <div className=" bg-[#f7fbfe] py-[50px]" id="testimonial">
      <div className="container  ">
        <SectionTitle title="What My Clients Say About Me" />

        <div className="space-y-[25px]">
          <h2 className="xl:text-[24px] lg:text-[20px] md:text-[18px] text-base leading-relaxed ">
            {Testimonials[0].review}
          </h2>
          <div className="flex items-end justify-between">
            <div className="flex items-center gap-3">
              <div className="h-[1px] sm:w-[25px] w-[18px] bg-[#1c2833]" />
              <div>
                <h3 className="text-[24px] lg:text-[20px] md:text-[18px] text-base font-medium">
                  {Testimonials[0].name}
                </h3>
                <p className="text-[14px]">{Testimonials[2].profession}</p>
              </div>
            </div>
            <SliderArrowNav />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
