const STORAGE_KEY = "custom-notes";

export function getNotes() {
    try {
        const notes = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
        return notes;
    } catch (error) {
        console.error("Error getting notes: ", error);
        return [];
    }
}

export function saveNotes(newNote) {
    try {
        const notes = getNotes();
        notes.push(newNote);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
        return true;
    } catch (error) {
        console.error("Error saving notes: ", error);
        return false;
    }
}