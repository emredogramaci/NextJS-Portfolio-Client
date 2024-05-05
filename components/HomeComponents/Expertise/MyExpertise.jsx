import ExpertiseCard from "./ExpertiseCard";
import { useQuery } from "react-query";
import axios from "axios";
import ParagraphSkeleton from "../../Common/ParagraphSkeleton";
import useAboutData from "hooks/useAboutData";

const MyExpertise = () => {
  const { aboutData, isLoading } = useAboutData();
console.log(aboutData);
  return (
    <>
      <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">
        Yetenekler
      </div>
      <div className="grid justify items-center grid-flow-row md:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-4 px-2 md:px-8 ">
        {isLoading
          ? [1, 2, 3, 4, 5, 6].map(() => (
              <ParagraphSkeleton className={"space-y-2 p-8"} />
            ))
          : aboutData.map((data, key) => <ExpertiseCard key={key} data={data} />)}
      </div>
    </>
  );
};

export default MyExpertise;
