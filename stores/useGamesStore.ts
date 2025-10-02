import { create } from 'zustand';
import { Game } from '../types';

interface GamesState {
  games: Game[];
  isLoading: boolean;
  error: string | null;
  fetchGames: (initialGames: Game[]) => void;
  addGame: (game: Omit<Game, 'id'>) => Promise<void>;
  updateGame: (game: Game) => Promise<void>;
  deleteGame: (gameId: string) => Promise<void>;
}

export const useGamesStore = create<GamesState>((set, get) => ({
  games: [],
  isLoading: false,
  error: null,

  fetchGames: (initialGames: Game[]) => {
    set({ games: initialGames, isLoading: false });
  },

  addGame: async (gameData) => {
    set({ isLoading: true, error: null });
    try {
      await new Promise(res => setTimeout(res, 500)); // Simulate API call
      const newGame: Game = {
        ...gameData,
        id: `g${Date.now()}`,
      };
      set(state => ({
        games: [...state.games, newGame],
        isLoading: false,
      }));
    } catch (error) {
      set({ error: 'Failed to add game', isLoading: false });
    }
  },

  updateGame: async (updatedGame) => {
    set({ isLoading: true, error: null });
    try {
      await new Promise(res => setTimeout(res, 500)); // Simulate API call
      set(state => ({
        games: state.games.map(game =>
          game.id === updatedGame.id ? updatedGame : game
        ),
        isLoading: false,
      }));
    } catch (error) {
      set({ error: 'Failed to update game', isLoading: false });
    }
  },

  deleteGame: async (gameId) => {
    set({ isLoading: true, error: null });
    try {
      await new Promise(res => setTimeout(res, 500)); // Simulate API call
      set(state => ({
        games: state.games.filter(game => game.id !== gameId),
        isLoading: false,
      }));
    } catch (error) {
      set({ error: 'Failed to delete game', isLoading: false });
    }
  },
}));