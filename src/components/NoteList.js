import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete }) {
  return (
    <div className="flex flex-wrap -mx-2 mt-2">
      {notes.map((note) => (
        <NoteItem key={note.id} id={note.id} onDelete={onDelete} {...note} />
      ))}
    </div>
  );
}

export default NoteList;
