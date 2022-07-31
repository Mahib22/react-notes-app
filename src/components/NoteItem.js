import React from "react";
import NoteItemAction from "./NoteItemAction";
import NoteItemContent from "./NoteItemContent";

function NoteItem({ title, body, createdAt, id, onDelete }) {
  return (
    <div className="p-2 lg:w-1/3 md:w-1/2">
      <div className="h-full bg-gray-100 bg-opacity-75 px-4 py-6 rounded-lg overflow-hidden">
        <NoteItemContent title={title} body={body} createdAt={createdAt} />
        <NoteItemAction id={id} onDelete={onDelete} />
      </div>
    </div>
  );
}

export default NoteItem;
