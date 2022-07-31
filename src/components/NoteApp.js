import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";

class NoteApp extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Body />
        <Footer />
      </>
    );
  }
}

export default NoteApp;
