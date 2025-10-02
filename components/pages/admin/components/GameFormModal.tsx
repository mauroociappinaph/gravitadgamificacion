import React, { useState, useEffect } from 'react';
import { Game, GameCategory } from '../../../../types';

interface GameFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (game: Omit<Game, 'id'> | Game) => void;
  game: Game | null;
}

const initialFormState = {
  title: '',
  description: '',
  category: GameCategory.QUIZ,
  reward: 0,
  imageUrl: '',
};

const GameFormModal: React.FC<GameFormModalProps> = ({ isOpen, onClose, onSubmit, game }) => {
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    if (game) {
      setFormData(game);
    } else {
      setFormData(initialFormState);
    }
  }, [game, isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: name === 'reward' ? parseFloat(value) || 0 : value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.title && formData.description && formData.reward > 0) {
      onSubmit(game ? { ...formData, id: game.id } : formData);
    } else {
        alert('Please fill all required fields.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-brand-primary/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-brand-secondary rounded-lg shadow-xl p-8 max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-6">{game ? 'Edit Game' : 'Add New Game'}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-brand-subtext mb-1">Title</label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} className="w-full bg-brand-primary p-2 rounded border border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-highlight" required />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-brand-subtext mb-1">Description</label>
            <textarea name="description" value={formData.description} onChange={handleChange} className="w-full bg-brand-primary p-2 rounded border border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-highlight" required />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-brand-subtext mb-1">Category</label>
              <select name="category" value={formData.category} onChange={handleChange} className="w-full bg-brand-primary p-2 rounded border border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-highlight">
                {Object.values(GameCategory).map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="reward" className="block text-sm font-medium text-brand-subtext mb-1">Reward ($)</label>
              <input type="number" name="reward" value={formData.reward} onChange={handleChange} min="0" step="0.01" className="w-full bg-brand-primary p-2 rounded border border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-highlight" required />
            </div>
          </div>
           <div>
            <label htmlFor="imageUrl" className="block text-sm font-medium text-brand-subtext mb-1">Image URL</label>
            <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} className="w-full bg-brand-primary p-2 rounded border border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-highlight" placeholder="https://picsum.photos/seed/..." />
          </div>
          <div className="flex justify-end space-x-4 pt-4">
            <button type="button" onClick={onClose} className="bg-brand-accent text-white font-bold py-2 px-4 rounded-lg hover:opacity-90">Cancel</button>
            <button type="submit" className="bg-brand-highlight text-white font-bold py-2 px-4 rounded-lg hover:opacity-90">{game ? 'Save Changes' : 'Add Game'}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GameFormModal;
