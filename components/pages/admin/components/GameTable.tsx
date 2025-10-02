import React from 'react';
import { Game } from '../../../../types';
import Card from '../../../ui/Card';

interface GameTableProps {
  games: Game[];
  onEdit: (game: Game) => void;
  onDelete: (game: Game) => void;
}

const GameTable: React.FC<GameTableProps> = ({ games, onEdit, onDelete }) => {
  return (
    <Card>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-brand-accent">
              <th className="p-4">Title</th>
              <th className="p-4">Category</th>
              <th className="p-4">Reward</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {games.length === 0 && (
                <tr>
                    <td colSpan={4} className="text-center p-8 text-brand-subtext">No games found. Add one to get started!</td>
                </tr>
            )}
            {games.map((game) => (
              <tr key={game.id} className="border-b border-brand-accent hover:bg-brand-secondary">
                <td className="p-4 font-semibold">{game.title}</td>
                <td className="p-4 text-brand-subtext">{game.category}</td>
                <td className="p-4 text-green-400 font-bold">${game.reward.toFixed(2)}</td>
                <td className="p-4 text-right space-x-2">
                  <button onClick={() => onEdit(game)} className="bg-blue-500/80 text-white font-bold py-1 px-3 rounded hover:bg-blue-500">Edit</button>
                  <button onClick={() => onDelete(game)} className="bg-red-500/80 text-white font-bold py-1 px-3 rounded hover:bg-red-500">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default GameTable;
