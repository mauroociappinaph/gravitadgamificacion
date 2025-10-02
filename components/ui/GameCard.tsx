
import React from 'react';
import { Game } from '../../types';
import Card from './Card';
import Icon from './Icon';

interface GameCardProps {
  game: Game;
  onPlay: (game: Game) => void;
}

const GameCard: React.FC<GameCardProps> = ({ game, onPlay }) => {
  return (
    <Card className="overflow-hidden group flex flex-col">
      <div className="relative">
        <img src={game.imageUrl} alt={game.title} className="w-full h-40 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-105" />
        <div className="absolute top-2 right-2 bg-brand-primary/80 text-yellow-400 font-bold px-3 py-1 rounded-full text-sm flex items-center space-x-1">
          <Icon name="points" className="h-4 w-4" />
          <span>{game.reward}</span>
        </div>
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <span className="text-xs font-semibold text-brand-highlight uppercase">{game.category}</span>
        <h3 className="text-lg font-bold mt-1 mb-2 flex-grow">{game.title}</h3>
        <p className="text-brand-subtext text-sm mb-4">{game.description}</p>
        <button 
          onClick={() => onPlay(game)}
          className="mt-auto w-full bg-brand-highlight text-white font-bold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity">
          Play Now
        </button>
      </div>
    </Card>
  );
};

export default GameCard;
