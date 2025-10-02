import React from 'react';
import { Game } from '../../types';
import { useGamesStore } from '../../stores/useGamesStore';
import GameCard from '../ui/GameCard';

interface GamesPageProps {
    onPlayGame: (game: Game) => void;
}

const GamesPage: React.FC<GamesPageProps> = ({ onPlayGame }) => {
  const games = useGamesStore(state => state.games);

  return (
    <div>
        <h1 className="text-3xl font-bold mb-6 text-brand-highlight">Explore Games</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {games.map(game => (
                <GameCard key={game.id} game={game} onPlay={onPlayGame} />
            ))}
        </div>
    </div>
  );
}

export default GamesPage;