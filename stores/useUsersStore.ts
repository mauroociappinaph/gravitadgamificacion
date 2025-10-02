
import { create } from 'zustand';
import { User } from '../types';

interface UsersState {
  users: User[];
  isLoading: boolean;
  error: string | null;
  fetchUsers: (initialUsers: User[]) => void;
  addUser: (user: Pick<User, 'name' | 'email' | 'role' | 'level' | 'points'>) => Promise<void>;
  updateUser: (user: User) => Promise<void>;
  deleteUser: (userId: string) => Promise<void>;
}

export const useUsersStore = create<UsersState>((set) => ({
  users: [],
  isLoading: false,
  error: null,

  fetchUsers: (initialUsers: User[]) => {
    set({ users: initialUsers, isLoading: false });
  },

  addUser: async (userData) => {
    set({ isLoading: true, error: null });
    try {
      await new Promise(res => setTimeout(res, 500)); // Simulate API call
      const newUser: User = {
        ...userData,
        id: `u${Date.now()}`,
        walletBalance: 0,
        achievements: [],
        transactionHistory: [],
        avatarUrl: `https://picsum.photos/seed/${userData.name.split(' ')[0]}/200`,
      };
      set(state => ({
        users: [...state.users, newUser],
        isLoading: false,
      }));
    } catch (error) {
      set({ error: 'Failed to add user', isLoading: false });
    }
  },

  updateUser: async (updatedUser) => {
    set({ isLoading: true, error: null });
    try {
      await new Promise(res => setTimeout(res, 500)); // Simulate API call
      set(state => ({
        users: state.users.map(user =>
          user.id === updatedUser.id ? updatedUser : user
        ),
        isLoading: false,
      }));
    } catch (error) {
      set({ error: 'Failed to update user', isLoading: false });
    }
  },

  deleteUser: async (userId) => {
    set({ isLoading: true, error: null });
    try {
      await new Promise(res => setTimeout(res, 500)); // Simulate API call
      set(state => ({
        users: state.users.filter(user => user.id !== userId),
        isLoading: false,
      }));
    } catch (error) {
      set({ error: 'Failed to delete user', isLoading: false });
    }
  },
}));