import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import { getInitialData } from "../utils/index";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      searchTitle: "",
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchTitleChange = this.onSearchTitleChange.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: +new Date(),
            archived: false,
          },
        ],
      };
    });
  }

  onSearchTitleChange(e) {
    this.setState(() => {
      return {
        searchTitle: e.target.value,
      };
    });
  }

  render() {
    const activeNotes = this.state.notes.filter((note) => {
      return note.archived === false;
    });
    const archivedNotes = this.state.notes.filter((note) => {
      return note.archived === true;
    });

    return (
      <>
        <Header />
        <Body
          activeNotes={activeNotes}
          archivedNotes={archivedNotes}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
          addNote={this.onAddNoteHandler}
          searchTitle={this.state.searchTitle}
          onSearchTitleChange={this.onSearchTitleChange}
        />
        <Footer />
      </>
    );
  }
}

export default NoteApp;
