import axios from "axios";
import React, { useState, useEffect } from "react";

function useWorksData() {
  const [works, setWorks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("api/works").then((response) => {
      const activeItems = response.data.filter((item) => item.IsActive);
      setWorks(activeItems);
      setIsLoading(false);
    });
  }, []);

  return { works, isLoading };
}

export default useWorksData;
