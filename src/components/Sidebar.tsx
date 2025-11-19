function Sidebar({ onAddNote }: { onAddNote: () => void }) {
  return (
    <nav className="sidebar" aria-label="Main navigation">
      <header style={{ marginBottom: "0.75rem" }}>
        <h2>Notes</h2>
      </header>
      <button className="new-note-button" onClick={onAddNote}>
        + New Note
      </button>
    </nav>
  );
}

export default Sidebar;
