
import React, { useState, useEffect } from 'react';
import { QuizQuestion } from '../../services/data/quizData';
import Card from '../ui/Card';

interface QuizGameProps {
  questions: QuizQuestion[];
  onComplete: (finalScore: number) => void;
}

const QuizGame: React.FC<QuizGameProps> = ({ questions, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    if (isAnswered) {
      const timer = setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setSelectedAnswer(null);
          setIsAnswered(false);
        } else {
          onComplete(score);
        }
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isAnswered, currentQuestionIndex, questions.length, onComplete, score]);

  const handleAnswerClick = (option: string) => {
    if (isAnswered) return;

    setSelectedAnswer(option);
    setIsAnswered(true);
    if (option === currentQuestion.correctAnswer) {
      setScore(score + currentQuestion.reward);
    }
  };

  const getButtonClass = (option: string) => {
    if (!isAnswered) {
      return 'bg-brand-secondary hover:bg-brand-tertiary';
    }
    if (option === currentQuestion.correctAnswer) {
      return 'bg-green-500 text-white';
    }
    if (option === selectedAnswer) {
      return 'bg-red-500 text-white';
    }
    return 'bg-brand-secondary opacity-50';
  };

  return (
    <Card>
      <div className="p-4 md:p-6">
        <div className="mb-4">
          <p className="text-sm text-brand-subtext">
            Question {currentQuestionIndex + 1} of {questions.length}
          </p>
          <h2 className="text-xl md:text-2xl font-bold mt-1 text-brand-highlight">
            {currentQuestion.question}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mt-6">
          {currentQuestion.options.map((option) => (
            <button
              key={option}
              onClick={() => handleAnswerClick(option)}
              disabled={isAnswered}
              className={`w-full text-left p-4 rounded-lg font-semibold transition-all duration-300 ${
                getButtonClass(option)
              }`}>
              {option}
            </button>
          ))}
        </div>
        <div className="mt-6 text-right">
            <p className="text-lg font-bold">Score: <span className='text-green-400'>{score}</span></p>
        </div>
      </div>
    </Card>
  );
};

export default QuizGame;
