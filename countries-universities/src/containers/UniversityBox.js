import React from "react";
import UniversityList from "../components/UniversityList";
import { PulseLoader } from "react-spinners";

function UniversityBox({ universities }) {
  if (universities) {
    return (
      <UniversityList universities={universities} />
    );
  }

  return <PulseLoader />;
}

export default UniversityBox;
