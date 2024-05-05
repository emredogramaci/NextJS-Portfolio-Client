import usePersonalInfo from "hooks/usePersonalInfo";

const Location = () => {
  const { personalInfo } = usePersonalInfo();

  return (
    <div className="flex flex-col space-y-1 pt-6">
      <div className="flex items-center justify-between">
        <span className="text-Snow text-xs font-bold">Ülke</span>
        <span className="text-xs text-gray-600">{personalInfo.Country}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-Snow text-xs font-bold">Şehir</span>
        <span className="text-xs text-gray-600">{personalInfo.City}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-Snow text-xs font-bold">Doğum Tarihi</span>
        <span className="text-xs text-gray-600">{personalInfo.Birthday}</span>
      </div>
    </div>
  );
};

export default Location;
