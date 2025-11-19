import { useState } from 'react';
import type { Note } from './types';
import Sidebar from './components/Sidebar';
import NoteEditor from './components/NoteEditor';
import NotesList from './components/NotesList';


export default function App() {
  // State to hold the list of notes
    const [notes, setNotes] = useState<Note[]>([
      {
        id: '1',
        title: 'My First Note',
        content: 'This is a test note to see if everything works!',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);

    // State to track the selected note ID
    const [selectedNoteId, setSelectedNoteId] = useState<string | null>(null);   

    // Find the selected note based on selectedNoteId
    const selectedNote = notes.find(note => note.id === selectedNoteId); 
  
    // Handler to add a new note
  function handleAddNote () { 
      const newNote = {
        id: Date.now().toString(),
        title: 'New Note',
        content: '',
        createdAt: new Date(),
        updatedAt: new Date()
      }
      setNotes([...notes, newNote]); 
  }

  // Handler to select a note by its ID
  function handleSelectNoteId(noteId: string) {
    console.log('Selecting note:', noteId);  // Extra: logging
    setSelectedNoteId(noteId);               // Update state
    // Maybe also: close a modal, play a sound, etc.

  } 

  function handleUpdateNote (noteId: string, updates: Partial<Note> ) {
    //Get the state of notes and map through them
    setNotes(prevNotes => prevNotes.map(note => {
      //If the note ID matches the one we want to update
      if (note.id === noteId) {
        //Return a new note object with the updates applied
        return {
          ...note,
          ...updates,
          updatedAt: new Date() //Update the updatedAt timestamp
        };
      }
      //Otherwise, return the note unchanged
      return note;
    }));
  }
  
  
  return (
    <div className="app-root">
      <Sidebar onAddNote={handleAddNote} />
      <main className="editor-area">
        <NoteEditor note={selectedNote} onUpdateNote={handleUpdateNote} />
      </main>
      <aside className="notes-list-area">
        <NotesList notes={notes} onSelectNote={handleSelectNoteId} />
      </aside>
      <section>
          

      </section>
    </div>
  );
}

