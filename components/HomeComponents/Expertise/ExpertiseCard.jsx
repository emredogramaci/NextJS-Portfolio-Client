import CardLayout from "../../Common/CardLayout";

const ExpertiseCard = ({ data }) => {
  return (
    <CardLayout>
      <div className="h-full space-y-2 p-8 card_stylings">
        <div className=" text-Snow">{data.Title}</div>
        <div className="text-sm text-LightGray font-normal">
          {data.AboutText}
        </div>
      </div>
    </CardLayout>
  );
};

export default ExpertiseCard;
