import Button from "@/common/components/shared/Button";
import Card from "@/common/components/shared/Card";
import SkillTag from "@/common/components/ui/SkillTag";
import Image from "next/image";

const Works: React.FC = () => {
  return (
    <div className="bg-[#f5f5f5] pb-[50px]">
      <div className="container">
        <h3 className="pb-5 lg:text-[35px] md:text-[32px] text-[30px] font-semibold">
          Some Things I’ve Built
        </h3>
        <Card
          title="BookStore "
          subtitle=" A platform where you can purchase any book and read its summary"
          body={
            <div>
              <div className="flex items-center gap-5 pb-5">
                <SkillTag name="Next Js" />
                <SkillTag name="Type Js" />
                <SkillTag name="Tailwind Css" />
              </div>
              <Button children={"View Live"} classname={"px-[40px]"} />
            </div>
          }
          colBody={
            <div>
              <Image src={'/public'} />
            </div>
          }
        />
      </div>
    </div>
  );
};
export default Works;
