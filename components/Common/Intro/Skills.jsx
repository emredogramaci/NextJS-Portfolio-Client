import LinearBar from "./LinearBar";
import useSkillsData from "hooks/useSkillsData";

const Skills = () => {
  const { skillsData } = useSkillsData();

  return (
    <div className="flex flex-col space-y-1 pt-6">
      <div className="flex flex-col gap-y-4">
        <span className="text-Snow text-xs font-bold bg-gradient-to-bl">
          Yetenekler
        </span>
        <div className="flex flex-col space-y-4">
          {skillsData.map((skill, index) => {
            return (
              <LinearBar
                key={index}
                title={skill.SkillName}
                percent={`${skill.Level}%`}
                bgColor="bg-Green"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
