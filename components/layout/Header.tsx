import React from 'react';
import { User, AppView } from '../../types';
import Icon from '../ui/Icon';

interface HeaderProps {
  user: User;
  view: AppView;
}

const Header: React.FC<HeaderProps> = ({ user, view }) => {
  if (view === 'admin') {
    return (
        <header className="bg-brand-secondary shadow-md p-4 flex justify-between items-center">
            <div className="text-xl font-semibold text-brand-highlight">
                Administrator Panel
            </div>
        </header>
    );
  }
  
  if (view === 'brand') {
    return (
        <header className="bg-brand-secondary shadow-md p-4 flex justify-between items-center">
            <div className="text-xl font-semibold text-brand-highlight">
                Brand Portal
            </div>
        </header>
    );
  }


  return (
    <header className="bg-brand-secondary shadow-md p-4 flex justify-between items-center">
      <div className="text-xl font-semibold">
        Welcome back, <span className="text-brand-highlight">{user.name.split(' ')[0]}</span>!
      </div>
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2 text-yellow-400">
          <Icon name="points" className="h-6 w-6"/>
          <span className="font-bold">{user.points.toLocaleString()} PTS</span>
        </div>
        <div className="flex items-center space-x-2 text-green-400">
          <Icon name="wallet" className="h-6 w-6"/>
          <span className="font-bold">${user.walletBalance.toFixed(2)}</span>
        </div>
        <div className="flex items-center">
            <img src={user.avatarUrl} alt={user.name} className="h-10 w-10 rounded-full" />
        </div>
      </div>
    </header>
  );
};

export default Header;