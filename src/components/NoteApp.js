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
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  render() {
    return (
      <>
        <Header />
        <Body notes={this.state.notes} onDelete={this.onDeleteHandler} />
        <Footer />
      </>
    );
  }
}

export default NoteApp;
