interface SkillTagProps {
  name: string;
  classname?: string;
}

const SkillTag: React.FC<SkillTagProps> = ({ name, classname }) => {
  return (
    <span
      className={`${classname} bg-[#eee] rounded-[10px] capitalize py-[10px] px-[15px]`}
    >
      {name}
    </span>
  );
};

export default SkillTag;
