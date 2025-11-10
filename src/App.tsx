
import Sidebar from './components/Sidebar';
import NotesList from './components/NotesList';
import NoteEditor from './components/NoteEditor';

export default function App() {
  return (
    <div className="app-root">
      <Sidebar />
      <main className="editor-area">
        <NoteEditor />
      </main>
      <aside className="notes-list-area">
        <NotesList />
      </aside>
    </div>
  );
}

