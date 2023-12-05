import Image from "next/image";
import SectionTtitle from "../common/SectionTtitle";
import { portfolioItems } from "@/config/constant";
import Button from "../common/button";

const Works: React.FC = () => {
  return (
    <div className="pt-[80px]" id="works">
      <div className="container">
        <SectionTtitle title="Highlights from My Portfolio" />
        {portfolioItems.map((item) => (
          <div
            key={item.id}
            className={`flex items-center sm:justify-normal justify-center flex-wrap sm:gap-6 gap-3 ${
              item.align === "right" && "sm:flex-row-reverse"
            } sm:pb-[60px] pb-[40px] `}
          >
            <div className="sm:w-[60%] w-[95%] z-10">
              <Image
                src={item.thumbnail}
                width={845}
                height={600}
                alt="work-item-thumbnail"
              />
            </div>
            <div
              className={`${
                item.align === "right" && "sm:!text-right "
              } z-50 sm:basis-[35%] basis-[95%]`}
            >
              <h2
                className={`${
                  item.align === "right"
                    ? "2xl:-mr-20 lg:-mr-16 md:-mr-12"
                    : "2xl:-ml-20 lg:-ml-16 md:-ml-12"
                } xl:text-[38px] lg:text-[36px] md:text-[34px] text-[32px] font-medium `}
              >
                {item.title}
              </h2>
              <p
                className={`!my-3 leading-[1.75] text-textColor2 xl:text-base lg:text-[15px] md:text-[14px] w-11/12 ${
                  item.align === "right" && "sm:ml-auto"
                }`}
              >
                {item.text}
              </p>
              <Button seconday children={"visit website"} href={item.link} />
            </div>
          </div>
        ))}
        <div className="mx-auto w-fit">
          {" "}
          <Button href={"/showcase"} children={"See More work"} />
        </div>
      </div>
    </div>
  );
};
export default Works;
