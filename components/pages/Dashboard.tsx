import React from 'react';
import { User, Game, LeaderboardEntry } from '../../types';
import { useGamesStore } from '../../stores/useGamesStore';
import Card from '../ui/Card';
import GameCard from '../ui/GameCard';
import Icon from '../ui/Icon';

interface DashboardProps {
  user: User;
  leaderboard: LeaderboardEntry[];
  onPlayGame: (game: Game) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, leaderboard, onPlayGame }) => {
  const games = useGamesStore(state => state.games);

  return (
    <div className="space-y-8">
      {/* User Stats Section */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-brand-accent rounded-full">
                <Icon name="level" className="h-8 w-8 text-brand-highlight" />
              </div>
              <div>
                <p className="text-brand-subtext text-sm">Your Level</p>
                <p className="text-2xl font-bold">{user.level}</p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-brand-accent rounded-full">
                <Icon name="points" className="h-8 w-8 text-yellow-400" />
              </div>
              <div>
                <p className="text-brand-subtext text-sm">Total Points</p>
                <p className="text-2xl font-bold">{user.points.toLocaleString()}</p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-brand-accent rounded-full">
                <Icon name="trophy" className="h-8 w-8 text-orange-400" />
              </div>
              <div>
                <p className="text-brand-subtext text-sm">Achievements</p>
                <p className="text-2xl font-bold">{user.achievements.length}</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Featured Games Section */}
        <section className="xl:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Featured Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {games.slice(0, 4).map((game) => (
              <GameCard key={game.id} game={game} onPlay={onPlayGame} />
            ))}
          </div>
        </section>

        {/* Mini Leaderboard Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Top Players</h2>
          <Card>
            <ul className="space-y-4">
              {leaderboard.slice(0, 5).map((player) => (
                <li key={player.rank} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="font-bold text-brand-subtext w-6">{player.rank}</span>
                    <img src={player.avatarUrl} alt={player.name} className="h-10 w-10 rounded-full" />
                    <span className="font-medium">{player.name}</span>
                  </div>
                  <span className="font-bold text-yellow-400">{player.score.toLocaleString()}</span>
                </li>
              ))}
            </ul>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;