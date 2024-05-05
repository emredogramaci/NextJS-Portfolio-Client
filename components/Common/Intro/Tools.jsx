import Badge from "../Badge";
import useTechTools from "hooks/useTechTools";
const Tools = () => {
  const { techTools } = useTechTools();

  return (
    <div className="flex flex-col space-y-1 pt-6">
      <div className="flex flex-col gap-y-4">
        <span className="text-Snow text-xs font-bold">Araçlar</span>
        <div className="flex flex-wrap gap-2">
          {techTools.map((item, index) => (
            <Badge key={index} title={item.ToolName} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;
