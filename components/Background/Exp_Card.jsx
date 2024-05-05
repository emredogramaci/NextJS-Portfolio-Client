import React from "react";
import CardLayout from "../Common/CardLayout";

const Exp_Card = ({ data }) => {
  return (
    <CardLayout>
      <div className="card_stylings transition px-8 py-10 ">
        <div className="flex-initial text-[17px] text-Snow font-medium">
          {data.Corp}
        </div>
        <div className="text-sm text-LightGray font-normal italic mt-1 ">
          {data.Position}
        </div>
        <div className="text-LightGray text-xs opacity-50 font-normal italic">
          <a href={`${data.CorpSite}`} target="_blank" rel="noreferrer">
            {data.CorpSite}
          </a>
        </div>
        <div className="text-LightGray text-sm font-normal mt-4 text-justify">
          {data.Description}
        </div>
        <div className="flex justify-between text-LightGray bg-DeepNightBlack w-full h-auto text-xs rounded-full py-3 px-6 mt-4 font-normal opacity-50">
          <div>
            {data.StartDate} - {data.EndDate}
          </div>{" "}
          <div>{data.Location}</div>
        </div>
      </div>
    </CardLayout>
  );
};

export default Exp_Card;
