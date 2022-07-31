import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

class Body extends React.Component {
  render() {
    return (
      <section className="container px-5 py-6 mx-auto">
        <NoteInput />
        <NoteList />
      </section>
    );
  }
}

export default Body;
