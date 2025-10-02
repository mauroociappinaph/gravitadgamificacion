
import React from 'react';
import { Game } from '../../types';
import Card from '../ui/Card';
import Icon from '../ui/Icon';

interface GameResultPageProps {
  result: {
    game: Game;
    reward: number;
    points: number;
  };
  onClose: () => void;
}

const GameResultPage: React.FC<GameResultPageProps> = ({ result, onClose }) => {
  return (
    <div className="absolute inset-0 bg-brand-primary/95 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <Card className="text-center max-w-md w-full animate-fade-in-up">
        <h1 className="text-3xl font-bold text-yellow-400 mb-2">You Won!</h1>
        <p className="text-brand-subtext mb-6">You successfully completed <span className="font-bold text-white">{result.game.title}</span>.</p>
        
        <div className="space-y-4 mb-8">
            <div className="bg-brand-accent p-4 rounded-lg">
                <p className="text-brand-subtext text-sm">MONEY EARNED</p>
                <p className="text-3xl font-bold text-green-400 flex items-center justify-center space-x-2">
                    <Icon name="wallet" className="h-7 w-7" />
                    <span>+${result.reward.toFixed(2)}</span>
                </p>
            </div>
            <div className="bg-brand-accent p-4 rounded-lg">
                <p className="text-brand-subtext text-sm">POINTS GAINED</p>
                 <p className="text-3xl font-bold text-yellow-400 flex items-center justify-center space-x-2">
                    <Icon name="points" className="h-7 w-7" />
                    <span>+{result.points}</span>
                </p>
            </div>
        </div>

        <button 
          onClick={onClose}
          className="w-full bg-brand-highlight text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity">
          Awesome!
        </button>
      </Card>
    </div>
  );
};

export default GameResultPage;
