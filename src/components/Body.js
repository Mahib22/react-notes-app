import React from "react";
import EmptyText from "./EmptyText";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";
import SearchInput from "./SearchInput";
import SectionTitle from "./SectionTitle";

function Body({
  activeNotes,
  archivedNotes,
  onDelete,
  onArchive,
  addNote,
  searchTitle,
  onSearchTitleChange,
}) {
  return (
    <section className="container px-5 py-6 mx-auto">
      <div className="lg:w-2/5 md:w-2/4 mx-auto">
        <h1 className="text-2xl text-center font-bold mb-3 text-gray-900">
          Buat Catatan
        </h1>
        <NoteInput addNote={addNote} />
      </div>

      <div className="lg:w-4/5 mx-auto mt-8">
        <div className="flex justify-between items-center">
          <SectionTitle title={"Daftar Catatan"} />

          <SearchInput
            searchTitle={searchTitle}
            onSearchTitleChange={onSearchTitleChange}
          />
        </div>

        {activeNotes.length !== 0 ? (
          <NoteList
            notes={activeNotes}
            onDelete={onDelete}
            onArchive={onArchive}
            searchTitle={searchTitle}
          />
        ) : (
          <EmptyText />
        )}
      </div>

      <div className="lg:w-4/5 mx-auto mt-8">
        <div className="flex justify-between items-center">
          <SectionTitle title={"Arsip Catatan"} />
        </div>

        {archivedNotes.length !== 0 ? (
          <NoteList
            notes={archivedNotes}
            onDelete={onDelete}
            onArchive={onArchive}
            searchTitle={searchTitle}
          />
        ) : (
          <EmptyText />
        )}
      </div>
    </section>
  );
}

export default Body;
