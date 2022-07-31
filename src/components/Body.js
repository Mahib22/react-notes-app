import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";
import SearchInput from "./SearchInput";

function Body({ notes, onDelete }) {
  return (
    <section className="container px-5 py-6 mx-auto">
      <NoteInput />

      <div className="lg:w-4/5 mx-auto mt-8">
        <div className="flex justify-between items-center">
          <h1 className="lg:text-2xl font-bold mb-3 text-gray-900">
            Daftar Catatan
          </h1>
          <SearchInput />
        </div>

        {notes.length !== 0 ? (
          <NoteList notes={notes} onDelete={onDelete} />
        ) : (
          <h1 className="text-center text-gray-500 mt-2">Tidak ada catatan</h1>
        )}
      </div>
    </section>
  );
}

export default Body;
