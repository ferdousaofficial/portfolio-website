import { articles } from "@/config/constant";
import SectionTtitle from "../common/SectionTtitle";
import Link from "next/link";
import Image from "next/image";
import Button from "../common/button";

const Articles: React.FC = () => {
  return (
    <div className="mt-[80px] py-[50px] bg-[#f4f4f4] ">
      <div className="container">
        <SectionTtitle title="featured articles for business" />
        <div className="flex items-center flex-wrap lg:justify-between justify-center lg:gap-0 gap-10">
          {articles.map((article) => (
            <div className="xl:basis-[30%] lg:basis-[32%] md:basis-[45%] basis-[95%] h-fit bg-white rounded-[12px] p-5" key={article.id}>
              <Link href={article.link}>
                <div className="pb-5">
                  <Image
                    src={article.coverImage}
                    alt="aritle image"
                    width={350}
                    height={270}
                  />
                </div>
                <div>
                  <p className="text-lg font-medium pb-2">{article.title}</p>
                  <Button seconday children={"Read Article"} />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Articles;
