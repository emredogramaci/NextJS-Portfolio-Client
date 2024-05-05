import axios from "axios";
import React, { useState, useEffect } from "react";

function useSkillsData() {
  const [skillsData, setSkillsData] = useState([]);

  useEffect(() => {
    axios.get("api/skills").then((response) => {
      const activeItems = response.data.filter((item) => item.IsActive);
      setSkillsData(activeItems);
    });
  }, []);

  return { skillsData };
}

export default useSkillsData;
