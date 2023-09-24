import Card from "@/common/components/shared/Card";
import SkillTag from "@/common/components/ui/SkillTag";
import { skills } from "@/shared/config/constants";

const Skills: React.FC = () => {
  return (
    <div className="lg:w-[48%] w-11/12">
      <Card
        title="Skills"
        body={
          <div className=" flex flex-wrap items-center gap-[15px]">
            {skills.map((e, id) => (
              <SkillTag key={id} name={e} />
            ))}
          </div>
        }
      />
    </div>
  );
};
export default Skills;
