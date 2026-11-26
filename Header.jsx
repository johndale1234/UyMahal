import { Search, Bell, ChevronDown } from "lucide-react";

const titles = {
  dashboard: ["Dashboard", "Here's what's happening with your price records."],
  products: ["Products", "Manage the products listed in UyMahal."],
  stores: ["Stores", "Keep store information up to date."],
  prices: ["Price Records", "Add and maintain product prices from local stores."],
  reports: ["Reports", "Review the current price information."]
};

export default function Header({ activePage }) {
  const [title, subtitle] = titles[activePage] || titles.dashboard;

  return (
    <header className="topbar">
      <div className="page-heading">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <div className="topbar-actions">
        <div className="search-box">
          <Search size={17} />
          <input aria-label="Search" placeholder="Search..." />
          <kbd>⌘ K</kbd>
        </div>
        <button className="icon-button" aria-label="Notifications"><Bell size={18} /><i /></button>
        <div className="user-chip">
          <div className="avatar">AD</div>
          <div className="user-name"><strong>Admin</strong><span>Administrator</span></div>
          <ChevronDown size={15} />
        </div>
      </div>
    </header>
  );
}
