import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNoteAsync, selectnotes } from "./noteSlice";
const MyNotes = () => {
  const dispatch = useDispatch();
  const notes = useSelector(selectnotes);
  return (
    <div>
      MyNotes
      <button onClick={() => dispatch(getNoteAsync())}>Get notes </button>
      <h1>Notes: {notes.length}</h1>
    </div>
  );
};

export default MyNotes;
