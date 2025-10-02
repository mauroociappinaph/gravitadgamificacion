import React from 'react';
import Card from '../ui/Card';
import Icon from '../ui/Icon';

const BrandDashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-2 text-brand-highlight">Brand Dashboard</h1>
        <p className="text-brand-subtext">Manage your gamified tasks, teams, and performance from here.</p>
      </section>
      
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:border-brand-highlight border-2 border-transparent transition-colors cursor-pointer">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-brand-accent rounded-full">
                <Icon name="games" className="h-8 w-8 text-brand-highlight" />
              </div>
              <div>
                <p className="text-xl font-bold">Manage Tasks</p>
                <p className="text-brand-subtext text-sm">Create and monitor gamified tasks.</p>
              </div>
            </div>
          </Card>
          <Card className="hover:border-brand-highlight border-2 border-transparent transition-colors cursor-pointer">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-brand-accent rounded-full">
                <Icon name="profile" className="h-8 w-8 text-blue-400" />
              </div>
              <div>
                <p className="text-xl font-bold">Manage Teams</p>
                <p className="text-brand-subtext text-sm">Organize participants into groups.</p>
              </div>
            </div>
          </Card>
          <Card className="hover:border-brand-highlight border-2 border-transparent transition-colors cursor-pointer">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-brand-accent rounded-full">
                <Icon name="leaderboard" className="h-8 w-8 text-green-400" />
              </div>
              <div>
                <p className="text-xl font-bold">View Metrics</p>
                <p className="text-brand-subtext text-sm">Track engagement and results.</p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default BrandDashboard;
