import React from "react";

function UniversityListItem({ university }) {
  let universityUrl;

  if (university.web_pages !== undefined || university.web_pages.length !== 0) {
    universityUrl = `${university.web_pages[0]}`;
  }

  return (
    <div className="university-list-item">
      {university ? (
        <a href={universityUrl} target="_blank">{university.name}</a>
      ) : (
        <h2>Couldn't find universities</h2>
      )}
    </div>
  );
}

export default UniversityListItem;
