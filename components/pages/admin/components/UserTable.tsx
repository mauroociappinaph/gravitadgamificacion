
import React from 'react';
import { User } from '../../../../types';
import Card from '../../../ui/Card';

interface UserTableProps {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (user: User) => void;
}

const UserTable: React.FC<UserTableProps> = ({ users, onEdit, onDelete }) => {
  return (
    <Card>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-brand-accent">
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Role</th>
              <th className="p-4">Level</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 && (
                <tr>
                    <td colSpan={5} className="text-center p-8 text-brand-subtext">No users found.</td>
                </tr>
            )}
            {users.map((user) => (
              <tr key={user.id} className="border-b border-brand-accent hover:bg-brand-secondary">
                <td className="p-4 font-semibold">
                    <div className="flex items-center space-x-3">
                        <img src={user.avatarUrl} alt={user.name} className="h-10 w-10 rounded-full" />
                        <span>{user.name}</span>
                    </div>
                </td>
                <td className="p-4 text-brand-subtext">{user.email}</td>
                <td className="p-4">
                    <span className={`px-2 py-1 text-xs font-bold rounded-full ${
                        user.role === 'Admin' ? 'bg-red-500/20 text-red-400' :
                        user.role === 'Brand' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-gray-500/20 text-gray-300'
                    }`}>
                        {user.role}
                    </span>
                </td>
                <td className="p-4 text-brand-subtext">{user.level}</td>
                <td className="p-4 text-right space-x-2">
                  <button onClick={() => onEdit(user)} className="bg-blue-500/80 text-white font-bold py-1 px-3 rounded hover:bg-blue-500">Edit</button>
                  <button onClick={() => onDelete(user)} className="bg-red-500/80 text-white font-bold py-1 px-3 rounded hover:bg-red-500">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default UserTable;