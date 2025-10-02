
import React from 'react';
import Card from '../ui/Card';
import Icon from '../ui/Icon';
import { AdminPage } from '../../types';

interface AdminPageComponentProps {
  setAdminPage: (page: AdminPage) => void;
}

const AdminPageComponent: React.FC<AdminPageComponentProps> = ({ setAdminPage }) => {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-2 text-brand-highlight">Administrator Dashboard</h1>
        <p className="text-brand-subtext">Welcome to the control center. Manage content and users from here.</p>
      </section>
      
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card 
            onClick={() => setAdminPage('admin_games')}
            className="hover:border-brand-highlight border-2 border-transparent transition-colors cursor-pointer"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-brand-accent rounded-full">
                <Icon name="games" className="h-8 w-8 text-brand-highlight" />
              </div>
              <div>
                <p className="text-xl font-bold">Manage Games</p>
                <p className="text-brand-subtext text-sm">Add, edit, or remove games.</p>
              </div>
            </div>
          </Card>
          <Card 
            onClick={() => setAdminPage('admin_users')}
            className="hover:border-brand-highlight border-2 border-transparent transition-colors cursor-pointer"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-brand-accent rounded-full">
                <Icon name="profile" className="h-8 w-8 text-blue-400" />
              </div>
              <div>
                <p className="text-xl font-bold">Manage Users</p>
                <p className="text-brand-subtext text-sm">View user data and roles.</p>
              </div>
            </div>
          </Card>
          <Card className="hover:border-brand-highlight border-2 border-transparent transition-colors cursor-pointer">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-brand-accent rounded-full">
                <Icon name="leaderboard" className="h-8 w-8 text-green-400" />
              </div>
              <div>
                <p className="text-xl font-bold">View Analytics</p>
                <p className="text-brand-subtext text-sm">Check platform statistics.</p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default AdminPageComponent;