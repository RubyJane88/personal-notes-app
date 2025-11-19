import type { Note } from "../types";

function NoteEditor({ note, onUpdateNote  }: { note: Note | undefined, onUpdateNote: (noteId: string, updates: Partial<Note>) => void }) {
  if (!note) {
    return <section className="note-editor">Select a note to edit</section>;
  }
  return (
    <section className="note-editor">
      Note Editor Content
      <input value={note.title} onChange={(e) => onUpdateNote(note.id, {title: e.target.value})} />
      <textarea value={note.content} onChange={(e) => onUpdateNote(note.id, {content: e.target.value})} />
    </section>
  );
}
export default NoteEditor;
