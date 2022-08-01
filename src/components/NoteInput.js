import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      maxChar: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value.slice(0, this.state.maxChar),
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <form
        className="flex flex-wrap -m-2"
        onSubmit={this.onSubmitEventHandler}
      >
        <div className="p-2 w-full">
          <div className="flex justify-between">
            <label className="leading-7 text-base font-semibold">Judul</label>
            <p className="leading-7 text-sm text-gray-600">
              Sisa karakter: {this.state.maxChar - this.state.title.length}
            </p>
          </div>
          <input
            type="text"
            className="w-full rounded border border-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none py-1 px-3 transition-colors duration-200 ease-in-out"
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
          />
        </div>
        <div className="p-2 w-full">
          <label className="leading-7 text-base font-semibold">
            Isi Catatan
          </label>
          <textarea
            className="w-full rounded border border-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 h-32 outline-none py-1 px-3 resize-none transition-colors duration-200 ease-in-out"
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
          ></textarea>
        </div>
        <div className="p-2 w-full">
          <button
            type="submit"
            className="w-full font-bold text-white bg-cyan-500 border-0 py-2 focus:outline-none hover:bg-cyan-500 rounded text-lg"
          >
            Buat Catatan
          </button>
        </div>
      </form>
    );
  }
}

export default NoteInput;
