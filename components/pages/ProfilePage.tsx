
import React from 'react';
import { User } from '../../types';
import Card from '../ui/Card';

interface ProfilePageProps {
  user: User;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ user }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-brand-highlight">My Profile</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <Card className="flex flex-col items-center text-center">
            <img src={user.avatarUrl} alt={user.name} className="h-32 w-32 rounded-full border-4 border-brand-highlight mb-4" />
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-brand-subtext">Level {user.level}</p>
            <div className="w-full bg-brand-accent rounded-full h-2.5 my-4">
              <div className="bg-brand-highlight h-2.5 rounded-full" style={{ width: '75%' }}></div>
            </div>
            <p className="text-sm text-brand-subtext">2500 / 10000 XP to next level</p>
          </Card>
        </div>
        <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {user.achievements.map(ach => (
                     <Card key={ach.id}>
                        <div className="flex items-center space-x-4">
                           <span className="text-4xl">{ach.icon}</span>
                            <div>
                                <h3 className="font-bold text-lg">{ach.title}</h3>
                                <p className="text-brand-subtext text-sm">{ach.description}</p>
                            </div>
                        </div>
                    </Card>
                ))}
                 <Card className="border-2 border-dashed border-brand-accent bg-transparent">
                    <div className="flex items-center space-x-4 text-brand-subtext">
                       <span className="text-4xl">?</span>
                        <div>
                            <h3 className="font-bold text-lg">More to unlock!</h3>
                            <p className="text-sm">Keep playing to earn new achievements.</p>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
