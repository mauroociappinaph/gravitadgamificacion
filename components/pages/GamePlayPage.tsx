
import React, { useEffect, useState } from 'react';
import { Game } from '../../types';
import QuizGame from '../games/QuizGame';
import { cosmicQuiz } from '../../services/data/quizData';
import Icon from '../ui/Icon';
import LoadingSpinner from '../ui/LoadingSpinner'; // Mantener si se usa en otro lugar o para un estado inicial

interface GamePlayPageProps {
  game: Game;
  onComplete: (game: Game, won: boolean) => void;
}

const GamePlayPage: React.FC<GamePlayPageProps> = ({ game, onComplete }) => {
  // Mantener el estado de status si se usa para algo más que la simulación inicial
  // const [status, setStatus] = useState('Initializing...'); 

  const handleQuizComplete = (finalScore: number) => {
    console.log(`Quiz finished with score: ${finalScore}`);
    onComplete(game, true); // Asumiendo que completar el quiz significa ganar
  };

  const renderGame = () => {
    switch (game.id) {
      case 'g1': // Asumiendo que 'g1' es el ID para el QuizGame
        return <QuizGame questions={cosmicQuiz} onComplete={handleQuizComplete} />;
      default:
        return (
          <div className='text-center'>
            <h2 className="text-2xl font-bold text-brand-highlight">{game.title}</h2>
            <p className="text-brand-subtext">This game type is not yet implemented.</p>
            <button
              onClick={() => onComplete(game, false)}
              className="mt-4 bg-brand-tertiary px-4 py-2 rounded-lg">
              Close
            </button>
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
       <button
        onClick={() => onComplete(game, false)}
        className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition-colors z-10"
        aria-label="Close game"
      >
        <Icon name="close" className="h-6 w-6" />
      </button>
      <div className="w-full max-w-2xl">
        {renderGame()}
      </div>
    </div>
  );
};

export default GamePlayPage;
