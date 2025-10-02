import React from 'react';

interface ConfirmDeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  itemName: string;
}

const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({ isOpen, onClose, onConfirm, itemName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-brand-primary/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-brand-secondary rounded-lg shadow-xl p-8 max-w-sm w-full text-center">
        <h2 className="text-xl font-bold mb-4">Are you sure?</h2>
        <p className="text-brand-subtext mb-6">
          Do you really want to delete <span className="font-bold text-white">"{itemName}"</span>? This action cannot be undone.
        </p>
        <div className="flex justify-center space-x-4">
          <button onClick={onClose} className="bg-brand-accent text-white font-bold py-2 px-6 rounded-lg hover:opacity-90">
            Cancel
          </button>
          <button onClick={onConfirm} className="bg-red-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-700">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
