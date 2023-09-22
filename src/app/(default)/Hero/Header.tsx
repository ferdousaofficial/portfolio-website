import Image from "next/image";

const Header: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="sm:w-[182px] sm:h-[192px] w-[160px] h-[160px]  mx-auto">
        <Image
          src={"/images/myself.svg"}
          alt="person"
          height={192}
          width={182}
        />
      </div>
      <h2 className="sm:text-[28px] text-[25px] font-semibold ">Hi, I'm Ferdous Al Hasan 👋</h2>
    </div>
  );
};
export default Header;
