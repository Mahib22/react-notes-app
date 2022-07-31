import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

function Body({ notes }) {
  return (
    <section className="container px-5 py-6 mx-auto">
      <NoteInput />
      <NoteList notes={notes} />
    </section>
  );
}

export default Body;
