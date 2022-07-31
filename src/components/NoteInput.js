import React from "react";

class NoteInput extends React.Component {
  render() {
    return (
      <div className="lg:w-2/5 md:w-2/4 mx-auto">
        <h1 className="text-2xl text-center font-bold mb-3 text-gray-900">
          Buat Catatan
        </h1>
        <form className="flex flex-wrap -m-2">
          <div className="p-2 w-full">
            <div className="flex justify-between">
              <label className="leading-7 text-base font-semibold">Judul</label>
              <p className="leading-7 text-sm text-gray-600">
                Sisa karakter: 50
              </p>
            </div>
            <input
              type="text"
              id="title"
              className="w-full rounded border border-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none py-1 px-3 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="p-2 w-full">
            <label className="leading-7 text-base font-semibold">
              Isi Catatan
            </label>
            <textarea
              id="body"
              className="w-full rounded border border-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 h-32 outline-none py-1 px-3 resize-none transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <div className="p-2 w-full">
            <button className="w-full font-bold text-white bg-cyan-500 border-0 py-2 focus:outline-none hover:bg-cyan-500 rounded text-lg">
              Buat Catatan
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NoteInput;
