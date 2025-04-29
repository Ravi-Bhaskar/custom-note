import React, { useState } from "react";
import { saveNotes } from "../utils/storage";

// Why I chose useState + this submit handler: It allows real-time form control and immediate feedback.
const AddNote = ({ onNoteAdded }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmitBtn = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const saveSuccess = saveNotes({ title, content });

    if (!saveSuccess) {
      setError("Failed to save note.");
    } else {
      onNoteAdded();
      setTitle("");
      setContent("");
    }
    setLoading(false);
  };

  return (
    <div className="form-container">
      <h2>Add a New Note</h2>
      {/* // Why display error banner: To Notify user of failure. */}
      {error && <div className="error-banner">{error}</div>}
      <form onSubmit={handleSubmitBtn}>
        <input
          type="text"
          placeholder="Note Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Note Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        <button type="submit" disabled={loading}>
          {loading ? "Saving..." : "Add Note"} {/* // Why show spinner here: It will Indicate the user Saving after they click on add note button */}
        </button>
      </form>
    </div>
  );
};

export default AddNote;
