import { cx } from "@/config/constant";

const SectionTtitle: React.FC<{ title: string; styles?: string }> = ({
  title,
  styles,
}) => (
  <h2
    className={cx(
      `xl:text-[46x] capitalize font-bold xl:w-[65%] lg:w-4/5 lg:text-[46px] md:text-[42px] text-[32px] mx-auto leading-[1.4] text-center pb-[50px] ${styles}`
    )}
  >
    {title}
  </h2>
);

export default SectionTtitle;
