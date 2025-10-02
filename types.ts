
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'User' | 'Admin' | 'Brand';
  level: number;
  points: number;
  avatarUrl: string;
  walletBalance: number;
  achievements: Achievement[];
  transactionHistory: Transaction[];
}

export enum GameCategory {
  QUIZ = 'Quiz',
  PUZZLE = 'Puzzle',
  STRATEGY = 'Strategy',
  ARCADE = 'Arcade'
}

export interface Game {
  id: string;
  title: string;
  description: string;
  category: GameCategory;
  reward: number;
  imageUrl: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface LeaderboardEntry {
  rank: number;
  name: string;
  score: number;
  avatarUrl: string;
}

export interface Transaction {
    id: string;
    description: string;
    amount: number;
    date: string;
    type: 'credit' | 'debit';
}

export type AppData = {
    user: User;
    games: Game[];
    leaderboard: LeaderboardEntry[];
    users: User[];
};

export type UserPage = 'dashboard' | 'games' | 'leaderboard' | 'wallet' | 'profile';
export type AdminPage = 'admin_dashboard' | 'admin_games' | 'admin_users';
export type BrandPage = 'brand_dashboard' | 'brand_tasks' | 'brand_teams' | 'brand_wallet';

export type AppView = 'user' | 'admin' | 'brand';