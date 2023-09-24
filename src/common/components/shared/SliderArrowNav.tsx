import Icon from "./icon";

const SliderArrowNav: React.FC = () => {
  return (
    <div className="flex items-center gap-3 cursor-pointer ">
      <div className="group bg-transparent smooth border border-[#485460] hover:bg-[#485460] px-3 py-[8px] rounded-[12px]">
        <Icon
          name={"leftArrow"}
          className="smooth group-hover:text-[#f5f5f5] "
        />
      </div>
      <div className="group bg-transparent smooth border border-[#485460] hover:bg-[#485460] px-3 py-[8px] rounded-[12px]">
        <Icon
          name={"rightArrow"}
          className="smooth group-hover:text-[#f5f5f5] "
        />
      </div>
    </div>
  );
};
export default SliderArrowNav;
