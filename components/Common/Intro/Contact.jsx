import React from "react";
import Link from "next/link";
import usePersonalInfo from "hooks/usePersonalInfo";

const Contact = () => {
  const { personalInfo } = usePersonalInfo();

  return (
    <div className="flex flex-col space-y-2 pt-6">
      <div className="flex flex-col mb-3">
        <span className="text-Snow text-xs font-bold">Email</span>
        <span className="text-xs text-gray-600">
          <Link href={`mailto:${personalInfo.MailAddress}`}>
            {personalInfo.MailAddress}
          </Link>
        </span>
      </div>
      {/* <div className="flex flex-col">
        <span className="text-Snow text-xs font-bold">Phone</span>
        <span className="text-xs text-gray-600">{CONTACTS.PHONE}</span>
      </div> */}
    </div>
  );
};

export default Contact;
