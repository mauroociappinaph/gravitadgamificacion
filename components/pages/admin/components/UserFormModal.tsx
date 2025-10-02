
import React, { useState, useEffect } from 'react';
import { User } from '../../../../types';

interface UserFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (user: Pick<User, 'name' | 'email' | 'role' | 'level' | 'points'> | User) => void;
  user: User | null;
}

const initialFormState = {
  name: '',
  email: '',
  role: 'User' as 'User' | 'Admin' | 'Brand',
  level: 1,
  points: 0,
};

const UserFormModal: React.FC<UserFormModalProps> = ({ isOpen, onClose, onSubmit, user }) => {
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        email: user.email,
        role: user.role,
        level: user.level,
        points: user.points,
      });
    } else {
      setFormData(initialFormState);
    }
  }, [user, isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: (name === 'level' || name === 'points') ? parseInt(value) || 0 : value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      onSubmit(user ? { ...user, ...formData } : formData);
    } else {
        alert('Please fill all required fields.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-brand-primary/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-brand-secondary rounded-lg shadow-xl p-8 max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-6">{user ? 'Edit User' : 'Add New User'}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-brand-subtext mb-1">Full Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-brand-primary p-2 rounded border border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-highlight" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-brand-subtext mb-1">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-brand-primary p-2 rounded border border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-highlight" required />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-brand-subtext mb-1">Role</label>
              <select name="role" value={formData.role} onChange={handleChange} className="w-full bg-brand-primary p-2 rounded border border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-highlight">
                <option value="User">User</option>
                <option value="Admin">Admin</option>
                <option value="Brand">Brand</option>
              </select>
            </div>
             <div>
              <label htmlFor="level" className="block text-sm font-medium text-brand-subtext mb-1">Level</label>
              <input type="number" name="level" value={formData.level} onChange={handleChange} min="1" className="w-full bg-brand-primary p-2 rounded border border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-highlight" required />
            </div>
          </div>
           <div>
            <label htmlFor="points" className="block text-sm font-medium text-brand-subtext mb-1">Points</label>
            <input type="number" name="points" value={formData.points} onChange={handleChange} min="0" className="w-full bg-brand-primary p-2 rounded border border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-highlight" required />
          </div>
          <div className="flex justify-end space-x-4 pt-4">
            <button type="button" onClick={onClose} className="bg-brand-accent text-white font-bold py-2 px-4 rounded-lg hover:opacity-90">Cancel</button>
            <button type="submit" className="bg-brand-highlight text-white font-bold py-2 px-4 rounded-lg hover:opacity-90">{user ? 'Save Changes' : 'Add User'}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserFormModal;