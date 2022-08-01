import React from "react";
import CancelIcon from "./icons/CancelIcon";
import TrashIcon from "./icons/TrashIcon";
import ArchiveIcon from "./icons/ArchiveIcon";

function NoteItemAction({ id, archived, onDelete, onArchive }) {
  return (
    <div className="flex justify-end mt-4">
      <button className="text-red-500 mr-2" onClick={() => onDelete(id)}>
        <TrashIcon />
      </button>

      <button className="text-yellow-400" onClick={() => onArchive(id)}>
        {archived ? <CancelIcon /> : <ArchiveIcon />}
      </button>
    </div>
  );
}

export default NoteItemAction;
