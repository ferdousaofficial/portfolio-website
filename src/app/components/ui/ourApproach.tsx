import { OurApprochItems } from "@/config/constant";
import Image from "next/image";
import SectionTtitle from "../common/SectionTtitle";

const OurApproch: React.FC = () => {
  return (
    <div className="pt-[80px]">
      <div className="container">
        <SectionTtitle title="Our Step-by-Step Approach to build a website" />
        <div className="flex item-center md:justify-between justify-center flex-wrap">
          {OurApprochItems.map((item) => (
            <div key={item.id} className="lg:basis-[22%] md:basis-1/3 w-[90%] lg:m-0 m-6">
              <div className="flex items-center flex-col gap-3 relative">
                <span className="uppercase text-textColor2 text-sm">step</span>
                <Image src={item.icon} alt="icon" width={70} height={70} />
                {item.id !== 4 && (
                  <div className="h-[2px] xl:w-[190px] lg:w-[140px] bg-[#ECECEC] absolute left-[75%] bottom-[35%]" />
                )}
              </div>
              <div className="pt-[15px] text-center">
                <span className="text-mainColor xl:text-[22px] lg:text-xl text-[22px] capitalize ">
                  {item.title}
                </span>
                <p className="mt-2 text-textColor2">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default OurApproch;
