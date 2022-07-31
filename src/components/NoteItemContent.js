import React from "react";
import { showFormattedDate } from "../utils/index";

function NoteItemContent({ title, body, createdAt }) {
  return (
    <>
      <h1 className="text-xl font-medium text-gray-900 mb-1">{title}</h1>
      <h2 className="text-sm font-medium text-gray-400 mb-3">
        {showFormattedDate(createdAt)}
      </h2>
      <p className="leading-6 mb-3">{body}</p>
    </>
  );
}

export default NoteItemContent;
