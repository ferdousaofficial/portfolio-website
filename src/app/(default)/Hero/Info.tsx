const Info: React.FC = () => {
  return (
    <div className="py-5 space-y-7 relative">
      <h1 className="text-[55px] font-[600] w-5/6 mx-auto ">
        Crafting Modern, User-Friendly, and High-Performing Web Applications
      </h1>

      <img
        src="/images/needle-underline.png"
        alt=""
        className="absolute top-[65px] left-[8rem] max-w-[250px]"
      />

      <p className="text-lg pb-5 w-5/6 mx-auto leading-loose">
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
