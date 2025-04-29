
import { useState } from 'react'
import './App.css'
import AddNote from './components/AddNote';
import NotesList from './components/NotesList';

function App() {

  const [viewNote, setViewNote] = useState('add');
  const [refresh, setRefresh] = useState(false);

  const toggleRefresh = () => setRefresh(!refresh);

  return (
    <>
      <div className='main-container'>
        <nav className='nav-bar'>
          <button onClick={() => setViewNote('add')}>Add Note</button>
          <button onClick={() => setViewNote('list')}>View Notes</button>
        </nav>
        {/* // Why this nav approach for simplicity: Keeps state routing minimal without needing React Router. */}
        {viewNote === 'add' ? <AddNote onNoteAdded={toggleRefresh} /> : <NotesList key={refresh} /> }
      </div>
    </>
  )
}

export default App
