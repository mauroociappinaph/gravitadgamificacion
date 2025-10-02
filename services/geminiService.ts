
import { AppData, GameCategory, User } from '../types';

const mockUsers: User[] = [
    {
        id: 'u1',
        name: 'Laura Gutiérrez',
        email: 'laura.g@example.com',
        role: 'User',
        level: 8,
        points: 8750,
        avatarUrl: `https://picsum.photos/seed/laura/200`,
        walletBalance: 42.50,
        achievements: [
            { id: '1', title: 'Puzzle Master', description: 'Complete 10 puzzle games.', icon: '🧠' },
            { id: '2', title: 'Quick Thinker', description: 'Answer 50 quiz questions correctly.', icon: '⚡️' },
            { id: '3', title: 'First Earnings', description: 'Earn your first $10.', icon: '💰' },
        ],
        transactionHistory: [
            { id: 't1', description: 'Reward: Logo Quiz', amount: 5.00, date: '2023-10-26', type: 'credit'},
            { id: 't2', description: 'Reward: Space Invaders', amount: 7.50, date: '2023-10-25', type: 'credit'},
            { id: 't3', description: 'Withdrawal', amount: 10.00, date: '2023-10-24', type: 'debit'},
        ]
    },
    {
        id: 'u2',
        name: 'Andrés Velasco',
        email: 'andres.v@gravitad.com',
        role: 'Brand',
        level: 15,
        points: 5000,
        avatarUrl: `https://picsum.photos/seed/andres/200`,
        walletBalance: 1500.00,
        achievements: [],
        transactionHistory: []
    },
    {
        id: 'u3',
        name: 'Admin User',
        email: 'admin@gravitad.com',
        role: 'Admin',
        level: 99,
        points: 99999,
        avatarUrl: `https://picsum.photos/seed/admin/200`,
        walletBalance: 0,
        achievements: [],
        transactionHistory: []
    },
    {
        id: 'u4',
        name: 'Alex',
        email: 'alex@example.com',
        role: 'User',
        level: 12,
        points: 9800,
        avatarUrl: `https://picsum.photos/seed/alex/200`,
        walletBalance: 120.75,
        achievements: [],
        transactionHistory: []
    },
     {
        id: 'u5',
        name: 'Maria',
        email: 'maria@example.com',
        role: 'User',
        level: 11,
        points: 9540,
        avatarUrl: `https://picsum.photos/seed/maria/200`,
        walletBalance: 88.00,
        achievements: [],
        transactionHistory: []
    }
];

export const mockAppData: AppData = {
    user: mockUsers[0],
    users: mockUsers,
    games: [
        { id: 'g1', title: 'Cosmic Quiz', description: 'Test your knowledge about the universe.', category: GameCategory.QUIZ, reward: 5, imageUrl: 'https://picsum.photos/seed/cosmic/400/300' },
        { id: 'g2', title: 'Logic Blocks', description: 'Arrange the blocks to solve the puzzle.', category: GameCategory.PUZZLE, reward: 7, imageUrl: 'https://picsum.photos/seed/logic/400/300' },
        { id: 'g3', title: 'Galactic Empires', description: 'Build your empire and conquer the galaxy.', category: GameCategory.STRATEGY, reward: 15, imageUrl: 'https://picsum.photos/seed/galactic/400/300' },
        { id: 'g4', title: 'Pixel Runner', description: 'Dodge obstacles in this retro-style arcade game.', category: GameCategory.ARCADE, reward: 3, imageUrl: 'https://picsum.photos/seed/pixel/400/300' },
        { id: 'g5', title: 'Word Weaver', description: 'Find as many words as you can.', category: GameCategory.PUZZLE, reward: 4, imageUrl: 'https://picsum.photos/seed/word/400/300' },
        { id: 'g6', title: 'History Buff', description: 'A quiz for the ages.', category: GameCategory.QUIZ, reward: 6, imageUrl: 'https://picsum.photos/seed/history/400/300' },
        { id: 'g7', title: 'Tower Defense', description: 'Protect your castle from invaders.', category: GameCategory.STRATEGY, reward: 12, imageUrl: 'https://picsum.photos/seed/tower/400/300' },
        { id: 'g8', title: 'Synth Racer', description: 'High-speed futuristic racing.', category: GameCategory.ARCADE, reward: 8, imageUrl: 'https://picsum.photos/seed/synth/400/300' },
    ],
    leaderboard: [
        { rank: 1, name: 'Alex', score: 9800, avatarUrl: 'https://picsum.photos/seed/alex/100' },
        { rank: 2, name: 'Maria', score: 9540, avatarUrl: 'https://picsum.photos/seed/maria/100' },
        { rank: 3, name: 'Laura Gutiérrez', score: 8750, avatarUrl: 'https://picsum.photos/seed/laura/100' },
        { rank: 4, name: 'Carlos', score: 8120, avatarUrl: 'https://picsum.photos/seed/carlos/100' },
        { rank: 5, name: 'CyberNinja', score: 7900, avatarUrl: 'https://picsum.photos/seed/ninja/100' },
        { rank: 6, name: 'PixelQueen', score: 7650, avatarUrl: 'https://picsum.photos/seed/queen/100' },
        { rank: 7, name: 'David', score: 7320, avatarUrl: 'https://picsum.photos/seed/david/100' },
        { rank: 8, name: 'Sophia', score: 7100, avatarUrl: 'https://picsum.photos/seed/sophia/100' },
        { rank: 9, name: 'GameMaster', score: 6800, avatarUrl: 'https://picsum.photos/seed/master/100' },
        { rank: 10, name: 'Elena', score: 6540, avatarUrl: 'https://picsum.photos/seed/elena/100' },
    ]
};