import { useState, useEffect } from "react";
import noteService from './services/notes'
import Note from "./components/Note";
import Notification from "./components/Notification";
import './index.css'

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState('some error happened...')

  
  
  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  /* useEffect(() =>{
    axios
      .get('http://localhost:3000/notes')
      .then(response => {
        setNotes(response.data)
      })
  }, []) */

  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes =>{
        setNotes(initialNotes)
      })
  }, [])
  
  const toggleImportanceOf = (id) => {
    const url = `http://localhost:3000/notes/${id}`
    const note = notes.find(n => n.id === id)
    
    const changedNote = { ...note, important: !note.important}

    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      })
      .catch(error => {

        setErrorMessage(
          `Note ${note.content} was already removed from server`
        )
        setTimeout(()=> {setErrorMessage(null)}, 5000)
        setNotes(notes.filter(n => n.id !== id))
      })
  }

  const addNote = (event) => {
    event.preventDefault();
    if (newNote === "") return;
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
    };
    noteService
    .create(noteObject)
    .then(returnedNote => {
      setNotes(notes.concat(returnedNote))
      setNewNote('')
    })
  };

  const notesToShow = showAll ? notes : notes.filter(note => note.important === true)

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note key={note.id} 
          note={note}
          toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input type="text" value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default App;
