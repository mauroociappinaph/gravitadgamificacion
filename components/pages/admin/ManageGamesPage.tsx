import React, { useState } from 'react';
import { useGamesStore } from '../../../stores/useGamesStore';
import { useModal } from '../../../hooks/useModal';
import { Game } from '../../../types';
import { GameTable, GameFormModal, ConfirmDeleteModal } from './components';

const ManageGamesPage: React.FC = () => {
  const { games, addGame, updateGame, deleteGame, isLoading, error } = useGamesStore();
  const [gameToEdit, setGameToEdit] = useState<Game | null>(null);
  const [gameToDelete, setGameToDelete] = useState<Game | null>(null);

  const formModal = useModal();
  const deleteModal = useModal();

  const handleAdd = () => {
    setGameToEdit(null);
    formModal.open();
  };

  const handleEdit = (game: Game) => {
    setGameToEdit(game);
    formModal.open();
  };

  const handleDelete = (game: Game) => {
    setGameToDelete(game);
    deleteModal.open();
  };

  const handleConfirmDelete = () => {
    if (gameToDelete) {
      deleteGame(gameToDelete.id);
      deleteModal.close();
      setGameToDelete(null);
    }
  };

  const handleFormSubmit = (gameData: Omit<Game, 'id'> | Game) => {
    if ('id' in gameData) {
      updateGame(gameData);
    } else {
      addGame(gameData);
    }
    formModal.close();
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
            <h1 className="text-3xl font-bold text-brand-highlight">Manage Games</h1>
            <p className="text-brand-subtext">Add, edit, or remove games from the platform.</p>
        </div>
        <button
          onClick={handleAdd}
          className="bg-brand-highlight text-white font-bold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity"
        >
          + Add New Game
        </button>
      </div>

      {isLoading && <p className="text-center text-brand-subtext">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <GameTable games={games} onEdit={handleEdit} onDelete={handleDelete} />

      <GameFormModal
        isOpen={formModal.isOpen}
        onClose={formModal.close}
        onSubmit={handleFormSubmit}
        game={gameToEdit}
      />

      {gameToDelete && (
        <ConfirmDeleteModal
          isOpen={deleteModal.isOpen}
          onClose={deleteModal.close}
          onConfirm={handleConfirmDelete}
          itemName={gameToDelete.title}
        />
      )}
    </div>
  );
};

export default ManageGamesPage;
