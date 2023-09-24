interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div >
      <h2 className="lg:text-[35px] md:text-[32px] text-[28px] font-semibold text-center pb-[25px]">
        {title}
      </h2>
      {subtitle && (
        <p className="lg:text-lg sm:text-base text-[14px] pb-5 xl:w-[85%] mx-auto  ">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
