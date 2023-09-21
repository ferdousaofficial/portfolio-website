import Image from "next/image";

const Header: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="w-[182px] h-[192px] mx-auto">
        <Image
          src={"/images/myself.svg"}
          alt="person"
          height={192}
          width={182}
        />
      </div>
      <h2 className="text-[28px] font-semibold ">Hi, I'm Ferdous Al Hasan 👋</h2>
    </div>
  );
};
export default Header;
