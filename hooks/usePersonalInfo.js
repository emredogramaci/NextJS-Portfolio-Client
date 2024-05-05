import axios from "axios";
import React, { useState, useEffect } from "react";

function usePersonalInfo() {
  const [personalInfo, setPersonalInfo] = useState({
    Name: "",
    Surname: "",
    Title: "",
    Corp: "",
    Link: "",
    Country: "",
    City: "",
    Birthday: "",
    MailAddress: "",
    IsActive: "",
  });

  useEffect(() => {
    axios.get("api/personalinfo").then((response) => {
      const activeItems = response.data.filter((item) => item.IsActive);
      setPersonalInfo(activeItems[0]);
    });
  }, []);

  return { personalInfo };
}

export default usePersonalInfo;
