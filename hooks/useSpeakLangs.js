import axios from "axios";
import React, { useState, useEffect } from "react";

function useSpeakLangs() {
  const [speakLangs, setSpeakLangs] = useState([]);

  useEffect(() => {
    axios.get("api/speaklangs").then((response) => {
      const activeItems = response.data.filter((item) => item.IsActive);
      setSpeakLangs(activeItems);
    });
  }, []);

  return { speakLangs };
}

export default useSpeakLangs;
