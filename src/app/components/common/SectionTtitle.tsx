const SectionTtitle: React.FC<{ title: string }> = ({ title }) => (
  <h2 className="xl:text-[50px] font-bold lg:w-4/5 lg:text-[46px] md:text-[42px] text-[32px] mx-auto leading-tight text-center pb-[60px]">
    {title}
  </h2>
);

export default SectionTtitle;
