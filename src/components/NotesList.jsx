import React, { useEffect, useState } from "react";
import { getNotes } from "../utils/storage";

const NotesList = () => {
  const [notes, setNotes] = useState([]);

  // Why useEffect to sync storage → state: Ensures latest data is fetched on mount.
  useEffect(() => {
    const savedNotes = getNotes();
    setNotes(savedNotes);
  }, []);

  return (
    <div className="note-list-container">
      <h2>All Notes</h2>
      {notes.length === 0 ? (
        <h4>No Note Found.</h4>
      ) : (
        notes.map((note, index) => (
          <div className="note-card" key={index}>
            <div className="note-details">
              <h3>{note.title}</h3>
              <p>{note.content}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default NotesList;
