
import React, { useEffect, useState } from 'react';
import { Game } from '../../types';
import LoadingSpinner from '../ui/LoadingSpinner';

interface GamePlayPageProps {
  game: Game;
  onComplete: (game: Game, won: boolean) => void;
}

const GamePlayPage: React.FC<GamePlayPageProps> = ({ game, onComplete }) => {
    const [status, setStatus] = useState('Initializing...');

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setStatus('Loading assets...');
        }, 1000);

        const timer2 = setTimeout(() => {
            setStatus('Match found! Starting game...');
        }, 2500);
        
        const timer3 = setTimeout(() => {
            // For this simulation, the user always wins
            onComplete(game, true);
        }, 4000);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, [game, onComplete]);

  return (
    <div className="absolute inset-0 bg-brand-primary/95 backdrop-blur-sm flex flex-col items-center justify-center z-50">
      <h1 className="text-4xl font-bold mb-4 text-brand-highlight animate-pulse">{game.title}</h1>
      <LoadingSpinner />
      <p className="mt-4 text-brand-subtext">{status}</p>
    </div>
  );
};

export default GamePlayPage;
