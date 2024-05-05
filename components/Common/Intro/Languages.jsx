import { Progress } from "antd";
import useSpeakLangs from "hooks/useSpeakLangs";

const Languages = () => {
  const { speakLangs } = useSpeakLangs();
  const chunks = chunkArray(speakLangs, 2);

  function chunkArray(array, size) {
    const chunkedArr = [];
    let index = 0;
    while (index < array.length) {
      chunkedArr.push(array.slice(index, size + index));
      index += size;
    }
    return chunkedArr;
  }

  return (
    <div className="flex flex-col space-y-1 pt-6">
      <div className="flex flex-col gap-y-4">
        <span className="text-Snow text-xs font-bold">Konuşulan Diller</span>
        {chunks.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-row items-center justify-center space-x-3">
            {row.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-y-2"
              >
                <Progress
                  strokeColor="#1fdf64"
                  type="circle"
                  percent={item.Percentage}
                  size={75}
                />
                <span className="text-xs font-bold text-Snow">
                  {item.LangName}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Languages;
