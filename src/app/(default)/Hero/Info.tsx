const Info: React.FC = () => {
  return (
    <div className="py-5 space-y-7 relative">
      <h1 className="xl:text-[55px] lg:text-[45px] md:text-[40px] text-[35px] font-[600] lg:w-5/6 lg:mx-auto ">
        Crafting Modern, User-Friendly, and High-Performing Web Applications
      </h1>

      <img
        src="/images/needle-underline.png"
        alt=""
        className="absolute max-w-[250px] xl:top-[65px] lg:top-[50px] xl:left-[8rem] lg:left-[6rem] md:top-[50px] md:left-[1rem] lg:w-[250px] md:w-[200px] top-[45px] w-[180px]"
      />

      <p className="lg:text-lg sm:text-base text-[14px] pb-5 lg:w-5/6 mx-auto leading-loose">
        I'm a passionate{" "}
        <span className="font-[600]">
          Full-stack web developer with over 1.5 years of experience
        </span>{" "}
        , and my true expertise lies in{" "}
        <span className="font-[600]">Front-end Development.</span> My forte is
        crafting cutting-edge, user-centric websites that deliver top-notch
        performance using the latest technologies.
      </p>
    </div>
  );
};
export default Info;
