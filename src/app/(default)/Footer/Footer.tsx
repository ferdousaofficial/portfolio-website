import Icon from "@/common/components/shared/icon";
import { socialLinks } from "@/shared/config/constants";

const Footer: React.FC = () => {
  return (
    <div className="text-center">
      <div className="container pb-[50px] flex items-center flex-wrap lg:justify-between gap-5 justify-center ">
        <p>
          Email Me at:{" "}
          <a href="mailto:ferdousaofficial@gmail.com" className="font-medium">
            ferdousaofficial@gmail.com
          </a>
        </p>
        <p>
          Built & Designed by{" "}
          <a
            href="https://www.linkedin.com/in/ferdousaofficial/"
            target="_blank"
            className="text-[#3D7DBC]"
          >
            @Ferdous Al Hasan
          </a>
        </p>
        <div className="flex items-center gap-[10px]">
          {socialLinks.map((e, id) => (
            <a href={e.path} key={id} target="_blank">
              <img src={e.src} alt="" className="w-[30px] h-[30px] smooth hover:scale-110" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Footer;
