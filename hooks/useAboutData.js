import axios from "axios";
import React, { useState, useEffect } from "react";

function useAboutData() {
  const [aboutData, setAboutData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("api/about").then((response) => {
      const activeItems = response.data.filter((item) => item.IsActive);
      setAboutData(activeItems);
      setIsLoading(false);
    });
  }, []);

  return { aboutData, isLoading };
}

export default useAboutData;
