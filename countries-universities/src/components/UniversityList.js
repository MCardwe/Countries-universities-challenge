import React from "react";
import UniversityListItem from "./UniversityListItem";

function UniversityList({ universities }) {
  let universityNodes = [];

  if (universities) {
    universityNodes = universities.map((university, index) => {
      return <li><UniversityListItem university={university} key={index} /> </li>;
    });
  }

  return (
    <>
      {!universityNodes.length == 0 ? (
        <ul>
          {universityNodes}
        </ul>
      ) : (
        <h2>No universities found</h2>
      )}
    </>
  );
}

export default UniversityList;
