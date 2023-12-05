const SectionTtitle: React.FC<{ title: string }> = ({ title }) => (
  <h2 className="xl:text-[48px] capitalize font-bold xl:w-[65%] lg:w-4/5 lg:text-[46px] md:text-[42px] text-[32px] mx-auto leading-[1.4] text-center pb-[60px]">
    {title}
  </h2>
);

export default SectionTtitle;
