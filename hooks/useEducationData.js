import axios from "axios";
import React, { useState, useEffect } from "react";

function useEducationData() {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    axios.get("api/education").then((response) => {
      const activeItems = response.data.filter((item) => item.IsActive);
      setEducation(activeItems);
    });
  }, []);

  return { education };
}

export default useEducationData;
