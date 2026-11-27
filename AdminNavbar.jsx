export default function AdminNavbar({ search, onSearchChange, onMenuClick }) {
  return (
    <header className="admin-topbar">
      <button
        className="mobile-menu"
        type="button"
        aria-label="Open navigation"
        onClick={onMenuClick}
      >
        Menu
      </button>
      <div className="breadcrumb">Workspace <span>/</span> <strong>Admin</strong></div>
      <div className="topbar-actions">
        <label className="global-search">
          <span aria-hidden="true">Search</span>
          <input
            aria-label="Search products"
            placeholder="Search products..."
            value={search}
            onChange={event => onSearchChange(event.target.value)}
          />
        </label>
        <button
          className="top-icon notification-button"
          type="button"
          aria-label="4 pending price submissions"
          title="4 pending price submissions"
        >
          Alerts <i />
        </button>
        <span className="top-avatar" aria-label="Maria Clara">MC</span>
      </div>
    </header>
  );
}
