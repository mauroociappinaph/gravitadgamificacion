
import React from 'react';
import { LeaderboardEntry } from '../../types';
import Card from '../ui/Card';
import Icon from '../ui/Icon';

interface LeaderboardPageProps {
  leaderboard: LeaderboardEntry[];
  currentUser: string;
}

const LeaderboardPage: React.FC<LeaderboardPageProps> = ({ leaderboard, currentUser }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-brand-highlight">Leaderboard</h1>
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-brand-accent">
                <th className="p-4">Rank</th>
                <th className="p-4">Player</th>
                <th className="p-4 text-right">Score</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((player) => (
                <tr key={player.rank} className={`border-b border-brand-accent transition-colors duration-200 ${player.name === currentUser ? 'bg-brand-accent' : 'hover:bg-brand-secondary'}`}>
                  <td className="p-4 font-bold text-xl">
                    {player.rank === 1 && <Icon name="trophy" className="h-6 w-6 inline-block text-yellow-400 -mt-1 mr-2"/>}
                    {player.rank === 2 && <Icon name="trophy" className="h-6 w-6 inline-block text-gray-300 -mt-1 mr-2"/>}
                    {player.rank === 3 && <Icon name="trophy" className="h-6 w-6 inline-block text-orange-400 -mt-1 mr-2"/>}
                    {player.rank}
                  </td>
                  <td className="p-4">
                    <div className="flex items-center space-x-4">
                      <img src={player.avatarUrl} alt={player.name} className="h-12 w-12 rounded-full" />
                      <span className="font-semibold text-lg">{player.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-right font-bold text-yellow-400 text-lg">{player.score.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default LeaderboardPage;
