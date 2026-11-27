import { useState } from 'react';
import AdminNavbar from './AdminNavbar';
import AdminSidebar from './AdminSidebar';
import Reports from './Reports';
import ManagePrices from './ManagePrices';
import ManageProducts from './ManageProducts';
import ManageUsers from './ManageUsers';
import DashboardOverview from './DashboardOverview';
import './AdminDashboard.css';

const pages = {
  Overview: DashboardOverview,
  Products: ManageProducts,
  Prices: ManagePrices,
  Users: ManageUsers,
  Reports,
};

export default function AdminDashboard() {
  const [activePage, setActivePage] = useState('Overview');
  const [search, setSearch] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const Page = pages[activePage] ?? DashboardOverview;

  function navigate(page) {
    setActivePage(page);
    setSidebarOpen(false);
  }

  return (
    <div className="admin-app">
      <AdminSidebar
        activePage={activePage}
        isOpen={sidebarOpen}
        onNavigate={navigate}
        onClose={() => setSidebarOpen(false)}
      />
      <main className="admin-main">
        <AdminNavbar
          search={search}
          onSearchChange={setSearch}
          onMenuClick={() => setSidebarOpen(true)}
        />
        <div className="dashboard-content">
          <Page search={search} onNavigate={navigate} />
        </div>
      </main>
    </div>
  );
}
