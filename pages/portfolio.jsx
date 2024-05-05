import { useQuery } from "react-query";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import PortfolioCard from "../components/Portfolio/PortfolioCard";
import axios from "axios";
import ImageAndParagraphSkeleton from "../components/Common/ImageAndParagraphSkeleton";
import useWorksData from "hooks/useWorksData";

const Portfolio = () => {
  const { works, isLoading } = useWorksData();

  return (
    <BannerLayout>
      <div className="grid justify items-center grid-flow-row md:grid-cols-2 grid-rows-auto gap-4 px-8 my-6">
        {isLoading
          ? [1, 2, 3, 4].map(() => (
              <ImageAndParagraphSkeleton className={"w-full object-cover"} />
            ))
          : works?.map((data, key) => <PortfolioCard key={key} data={data} />)}
      </div>
      <Footer />
    </BannerLayout>
  );
};

export default Portfolio;
