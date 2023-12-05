import { ServiceItems } from "@/config/constant";
import SectionTtitle from "../common/SectionTtitle";
import Image from "next/image";

const Services: React.FC = () => {
  return (
    <div className="pt-[50px]">
      <div className="container">
        <SectionTtitle title="Get More Customers with Our Web Developer Services" />

        <div
          className="flex items-center justify-center flex-wrap"
          id="#service"
        >
          {ServiceItems.map((item) => (
            <div
              key={item.id}
              className="xl:basis-[22%] lg:basis-[26%] md:basis-[36%] basis-[80%] space-y-4 mb-[50px] xl:mx-[30px] mx-[25px] "
            >
              <div className="bg-[#F5F5F5] w-[60px] h-[60px] rounded-sm grid place-content-center">
                {" "}
                <Image src={item.icon} alt="icon" width={32} height={32} />
              </div>
              <div className="space-y-1">
                <span className="text-[22px] capitalize font-medium text-mainColor">
                  {item.title}
                </span>
                <p className="text-[15px] text-textColor2">{item.text}</p>{" "}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Services;
