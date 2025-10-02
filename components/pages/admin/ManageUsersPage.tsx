
import React, { useState } from 'react';
import { useUsersStore } from '../../../stores/useUsersStore';
import { useModal } from '../../../hooks/useModal';
import { User } from '../../../types';
import { UserTable, UserFormModal, ConfirmDeleteModal } from './components';

const ManageUsersPage: React.FC = () => {
  const { users, addUser, updateUser, deleteUser, isLoading, error } = useUsersStore();
  const [userToEdit, setUserToEdit] = useState<User | null>(null);
  const [userToDelete, setUserToDelete] = useState<User | null>(null);

  const formModal = useModal();
  const deleteModal = useModal();

  const handleAdd = () => {
    setUserToEdit(null);
    formModal.open();
  };

  const handleEdit = (user: User) => {
    setUserToEdit(user);
    formModal.open();
  };

  const handleDelete = (user: User) => {
    setUserToDelete(user);
    deleteModal.open();
  };

  const handleConfirmDelete = () => {
    if (userToDelete) {
      deleteUser(userToDelete.id);
      deleteModal.close();
      setUserToDelete(null);
    }
  };

  const handleFormSubmit = (userData: Pick<User, 'name' | 'email' | 'role' | 'level' | 'points'> | User) => {
    if ('id' in userData) {
      updateUser(userData);
    } else {
      addUser(userData);
    }
    formModal.close();
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
            <h1 className="text-3xl font-bold text-brand-highlight">Manage Users</h1>
            <p className="text-brand-subtext">View, add, edit, or remove users from the platform.</p>
        </div>
        <button
          onClick={handleAdd}
          className="bg-brand-highlight text-white font-bold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity"
        >
          + Add New User
        </button>
      </div>

      {isLoading && <p className="text-center text-brand-subtext">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <UserTable users={users} onEdit={handleEdit} onDelete={handleDelete} />

      <UserFormModal
        isOpen={formModal.isOpen}
        onClose={formModal.close}
        onSubmit={handleFormSubmit}
        user={userToEdit}
      />

      {userToDelete && (
        <ConfirmDeleteModal
          isOpen={deleteModal.isOpen}
          onClose={deleteModal.close}
          onConfirm={handleConfirmDelete}
          itemName={userToDelete.name}
        />
      )}
    </div>
  );
};

export default ManageUsersPage;