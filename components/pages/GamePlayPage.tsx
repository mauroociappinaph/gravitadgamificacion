

import React from 'react';
import { Game } from '../../types';
import QuizGame from '../games/QuizGame';
import { cosmicQuiz } from '../../services/data/quizData';

interface GamePlayPageProps {
  game: Game;
  onComplete: (game: Game, won: boolean) => void;
}

const GamePlayPage: React.FC<GamePlayPageProps> = ({ game, onComplete }) => {

  const handleQuizComplete = (finalScore: number) => {
    // For now, we consider the game 'won' if the quiz is completed.
    // We can use the finalScore for more complex logic later.
    console.log(`Quiz finished with score: ${finalScore}`);
    onComplete(game, true);
  };

  const renderGame = () => {
    // We can expand this switch to include more game types later
    switch (game.id) {
      case 'g1': // This is the ID for 'Cosmic Quiz'
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
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="w-full max-w-2xl">
        {renderGame()}
      </div>
    </div>
  );
};

export default GamePlayPage;

