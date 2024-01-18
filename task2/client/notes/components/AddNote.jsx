import axios from "axios";
import React, { useEffect, useState } from "react";

const AddNote = ({ setRefreshScreen }) => {
  const [formData, setFormData] = useState({ title: "", desc: "", date: null });

  const addNoteHandler = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8800/api/notes", formData);
    setRefreshScreen((prev) => !prev);
    setFormData({ title: "", desc: "" });
  };

  const onChangeHandler = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form className="form" onSubmit={addNoteHandler}>
      <input
        onChange={(e) => onChangeHandler(e)}
        type="text"
        name="title"
        placeholder="add a note title"
        value={formData.title}
      />
      <input
        onChange={(e) => onChangeHandler(e)}
        type="text"
        name="desc"
        placeholder="add a note desc"
        value={formData.desc}
      />
      <input onChange={(e) => onChangeHandler(e)} type="date" name="date" />
      <button className="form-button" type="submit">
        Add note
      </button>
    </form>
  );
};

export default AddNote;
