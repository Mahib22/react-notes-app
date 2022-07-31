import React from "react";
import NoteItem from "./NoteItem";
import SearchInput from "./SearchInput";

class NoteList extends React.Component {
  render() {
    return (
      <div className="lg:w-4/5 mx-auto mt-8">
        <div className="flex justify-between items-center">
          <h1 className="lg:text-2xl font-bold mb-3 text-gray-900">
            Daftar Catatan
          </h1>
          <SearchInput />
        </div>

        <div className="flex flex-wrap -mx-2 mt-2">
          <NoteItem />
          <NoteItem />
          <NoteItem />
          <NoteItem />
        </div>
      </div>
    );
  }
}

export default NoteList;
