import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, onArchive, searchTitle }) {
  const noteToShow = (searchTitle) =>
    notes.filter((note) => note.title.toLowerCase().includes(searchTitle));

  return (
    <div className="flex flex-wrap -mx-2 mt-2">
      {noteToShow(searchTitle).map((note) => (
        <NoteItem
          key={note.id}
          id={note.id}
          onDelete={onDelete}
          onArchive={onArchive}
          {...note}
        />
      ))}
    </div>
  );
}

export default NoteList;
