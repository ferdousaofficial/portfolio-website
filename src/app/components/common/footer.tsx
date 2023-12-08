import Link from "next/link";
import Image from "next/image";
import { socialIcons } from "@/config/constant";

const Footer: React.FC = () => {
  return (
    <div className="md:pt-[80px] pt-[50px] pb-[30px]">
      <div className="container">
        <div className="flex items-center flex-wrap justify-center gap-5 sm:justify-between">
          <div>
            <p className="sm:text-left text-center">
              This website designed and developed by{" "}
              <Link
                href={"https://www.linkedin.com/in/ferdousaofficial"}
                target="_blank"
              >
                <span className="font-medium text-mainColor">
                  {" "}
                  Ferdous Al Hasan
                </span>
              </Link>{" "}
            </p>
          </div>
          <div className="flex  items-center gap-5">
            {socialIcons.map((icon) => (
              <Link href={icon.link} key={icon.id} target="_blank">
                <div
                  className="w-[45px] h-[45px] grid place-content-center rounded-full bg-white "
                  style={{
                    boxShadow: "0px 0px 24px 21px rgba(221, 221, 221, 0.25)",
                  }}
                >
                  <Image
                    src={icon.imgSrc}
                    alt="social icon"
                    width={20}
                    height={20}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
