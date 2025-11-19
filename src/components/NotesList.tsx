import type { Note } from "../types";

function NotesList({
  notes,
  onSelectNote,
}: {
  notes: Note[];
  onSelectNote: (noteId: string) => void;
}) {
  return (
    <section className="notes-list">
      <h2>Notes List</h2>
      {notes.map((note) => (
        <div
          key={note.id}
          className="note-item"
          onClick={() => onSelectNote(note.id)}
        >
          <h3>{note.title}</h3>
          <p>{note.content}</p>
        </div>
      ))}
    </section>
  );
}
export default NotesList;
