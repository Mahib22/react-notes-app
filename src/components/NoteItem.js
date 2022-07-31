import React from "react";
import NoteItemAction from "./NoteItemAction";

class NoteItem extends React.Component {
  render() {
    return (
      <div className="p-2 lg:w-1/3 md:w-1/2">
        <div className="h-full bg-gray-100 bg-opacity-75 px-4 py-6 rounded-lg overflow-hidden">
          <h1 className="text-xl font-medium text-gray-900 mb-1">
            Raclette Blueberry Nextious Level
          </h1>
          <h2 className="text-sm font-medium text-gray-400 mb-3">
            Kamis, 14 April 2022
          </h2>
          <p className="leading-6 mb-3">
            Donec sollicitudin molestie malesuada. Vivamus magna justo, lacinia
            eget consectetur sed, convallis at tellus. Nulla quis lorem ut
            libero malesuada feugiat.
          </p>
          <NoteItemAction />
        </div>
      </div>
    );
  }
}

export default NoteItem;
