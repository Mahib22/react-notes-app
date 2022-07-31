import React from "react";

class SearchInput extends React.Component {
  render() {
    return (
      <input
        type="text"
        placeholder="Cari catatan..."
        className="md:w-1/3 w-2/3 focus:bg-transparent text-gray-700 text-base rounded border border-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none py-1 px-3 transition-colors duration-200 ease-in-out"
      />
    );
  }
}

export default SearchInput;
