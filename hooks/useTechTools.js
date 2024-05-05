import axios from "axios";
import React, { useState, useEffect } from "react";

function useTechTools() {
  const [techTools, setTechTools] = useState([]);

  useEffect(() => {
    axios.get("api/techtools").then((response) => {
      const activeItems = response.data.filter((item) => item.IsActive);
      setTechTools(activeItems);
    });
  }, []);

  return { techTools };
}

export default useTechTools;
