import axios from "axios";
import React, { useState, useEffect } from "react";

function useExperiencesData() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    axios.get("api/experiences").then((response) => {
      const activeItems = response.data.filter((item) => item.IsActive);
      setExperiences(activeItems);
    });
  }, []);

  return { experiences };
}

export default useExperiencesData;
