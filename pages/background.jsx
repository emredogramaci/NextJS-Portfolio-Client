import { useEffect, useState } from "react";
import Edu_Card from "../components/Background/Edu_Card";
import Exp_Card from "../components/Background/Exp_Card";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import { useQuery } from "react-query";
import axios from "axios";
import { Skeleton } from "antd";
import ParagraphSkeleton from "../components/Common/ParagraphSkeleton";
import useEducationData from "hooks/useEducationData";
import useExperiencesData from "hooks/useExperiencesData";

function Background() {
  const [isLoading1, setIsLoading1] = useState(true);
  const [isLoading2, setIsLoading2] = useState(true);
  const { education } = useEducationData();
  const { experiences } = useExperiencesData();

  useEffect(() => {
    if (education.length > 0) {
      setIsLoading1(false);
    }
    if (experiences.length > 0) {
      setIsLoading2(false);
    }
  }, [education]);

  return (
    <BannerLayout>
      <div className="grid md:grid-cols-2 md:divide-x-4 md:divide-Green px-4 pb-2 pt-10">
        <div className="flex flex-col gap-y-4 order-2 md:order-1  md:mr-12">
          <div className="mt-10 md:mt-0 text-xl text-Snow font-semibold">
            Education
          </div>
          {isLoading1
            ? [1, 2, 3].map(() => (
                <ParagraphSkeleton className={"p-8 h-full w-full relative"} />
              ))
            : education &&
              education.map((data, key) => <Edu_Card key={key} data={data} />)}
        </div>
        <div className="order-1 md:order-2">
          <div className="flex flex-col gap-y-4 md:ml-12">
            <div className=" md:pt-0 pt-4 text-xl text-Snow font-semibold">
              Experience
            </div>

            {isLoading2
              ? [1, 2, 3].map(() => (
                  <ParagraphSkeleton className={"p-8 h-full w-full relative"} />
                ))
              : experiences &&
                experiences.map((data, key) => (
                  <Exp_Card key={key} data={data} />
                ))}
          </div>
        </div>
      </div>
      <Footer />
    </BannerLayout>
  );
}

export default Background;
