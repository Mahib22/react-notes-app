import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import { getInitialData } from "../utils/index";

function NoteApp() {
  const notes = getInitialData();

  return (
    <>
      <Header />
      <Body notes={notes} />
      <Footer />
    </>
  );
}

export default NoteApp;
