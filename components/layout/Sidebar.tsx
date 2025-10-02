import React from 'react';
import { UserPage, AdminPage, AppView, BrandPage } from '../../types';
import Icon from '../ui/Icon';

interface SidebarProps {
  view: AppView;
  setView: (view: AppView) => void;
  userPage: UserPage;
  setUserPage: (page: UserPage) => void;
  adminPage: AdminPage;
  setAdminPage: (page: AdminPage) => void;
  brandPage: BrandPage;
  setBrandPage: (page: BrandPage) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ view, setView, userPage, setUserPage, adminPage, setAdminPage, brandPage, setBrandPage }) => {
  const userNavItems = [
    { page: 'dashboard', icon: 'dashboard', label: 'Dashboard' },
    { page: 'games', icon: 'games', label: 'Games' },
    { page: 'leaderboard', icon: 'leaderboard', label: 'Leaderboard' },
    { page: 'wallet', icon: 'wallet', label: 'Wallet' },
    { page: 'profile', icon: 'profile', label: 'Profile' },
  ];

  const adminNavItems = [
    { page: 'admin_dashboard', icon: 'dashboard', label: 'Dashboard' },
    { page: 'admin_games', icon: 'games', label: 'Manage Games' },
    { page: 'admin_users', icon: 'profile', label: 'Manage Users' },
  ];
  
  const brandNavItems = [
    { page: 'brand_dashboard', icon: 'dashboard', label: 'Dashboard' },
    { page: 'brand_tasks', icon: 'games', label: 'Manage Tasks' },
    { page: 'brand_teams', icon: 'profile', label: 'Teams' },
    { page: 'brand_wallet', icon: 'wallet', label: 'Wallet' },
  ];

  const getNavItems = () => {
    switch(view) {
        case 'user': return userNavItems;
        case 'admin': return adminNavItems;
        case 'brand': return brandNavItems;
    }
  }
  
  const getCurrentPage = () => {
    switch(view) {
        case 'user': return userPage;
        case 'admin': return adminPage;
        case 'brand': return brandPage;
    }
  }
  
  const navItems = getNavItems();
  const currentPage = getCurrentPage();
  
  return (
    <nav className="w-20 lg:w-64 bg-brand-secondary p-4 lg:p-6 flex flex-col justify-between transition-all duration-300">
      <div>
        <div className="flex items-center justify-center lg:justify-start mb-12">
          <Icon name="logo" className="h-10 w-10 text-brand-highlight" />
          <h1 className="hidden lg:block text-2xl font-bold ml-3">Gravitad</h1>
        </div>
        <ul>
          {navItems.map((item) => (
            <li key={item.page} className="mb-4">
              <button
                onClick={() => {
                  if (view === 'user') {
                    setUserPage(item.page as UserPage);
                  } else if (view === 'admin') {
                    setAdminPage(item.page as AdminPage);
                  } else if (view === 'brand') {
                    setBrandPage(item.page as BrandPage)
                  }
                }}
                className={`w-full flex items-center p-3 rounded-lg transition-colors duration-200 ${
                  currentPage === item.page
                    ? 'bg-brand-highlight text-white'
                    : 'text-brand-subtext hover:bg-brand-accent hover:text-white'
                }`}
              >
                <Icon name={item.icon} className="h-6 w-6" />
                <span className="hidden lg:block ml-4 font-medium">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
       <div className="space-y-4">
          <div className="p-1 bg-brand-primary rounded-lg flex items-center text-sm font-bold w-full">
            <button onClick={() => setView('user')} className={`w-1/3 p-2 rounded-md transition-colors ${view === 'user' ? 'bg-brand-highlight text-white' : 'text-brand-subtext'}`}>User</button>
            <button onClick={() => setView('admin')} className={`w-1/3 p-2 rounded-md transition-colors ${view === 'admin' ? 'bg-brand-highlight text-white' : 'text-brand-subtext'}`}>Admin</button>
            <button onClick={() => setView('brand')} className={`w-1/3 p-2 rounded-md transition-colors ${view === 'brand' ? 'bg-brand-highlight text-white' : 'text-brand-subtext'}`}>Brand</button>
          </div>

         <button
            onClick={() => { /* Placeholder action */ }}
            className={`w-full flex items-center p-3 rounded-lg transition-colors duration-200 text-brand-subtext hover:bg-brand-accent hover:text-white`}
          >
            <Icon name="logout" className="h-6 w-6" />
            <span className="hidden lg:block ml-4 font-medium">Logout</span>
          </button>
      </div>
    </nav>
  );
};

export default Sidebar;