
import React, { useState, useEffect } from 'react';
import { AppData, UserPage, AdminPage, Game, AppView, BrandPage } from './types';
import { mockAppData } from './services/geminiService';
import { useGamesStore } from './stores/useGamesStore';
import { useUsersStore } from './stores/useUsersStore';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import Dashboard from './components/pages/Dashboard';
import GamesPage from './components/pages/GamesPage';
import LeaderboardPage from './components/pages/LeaderboardPage';
import WalletPage from './components/pages/WalletPage';
import ProfilePage from './components/pages/ProfilePage';
import AdminPageComponent from './components/pages/AdminPage';
import ManageGamesPage from './components/pages/admin/ManageGamesPage';
import ManageUsersPage from './components/pages/admin/ManageUsersPage';
import BrandDashboard from './components/pages/BrandDashboard';
import LoadingSpinner from './components/ui/LoadingSpinner';
import GamePlayPage from './components/pages/GamePlayPage';
import GameResultPage from './components/pages/GameResultPage';

const App: React.FC = () => {
  const [appData, setAppData] = useState<Omit<AppData, 'games' | 'users'> | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  const [view, setView] = useState<AppView>('user');
  const [userPage, setUserPage] = useState<UserPage>('dashboard');
  const [adminPage, setAdminPage] = useState<AdminPage>('admin_dashboard');
  const [brandPage, setBrandPage] = useState<BrandPage>('brand_dashboard');
  
  const [activeGame, setActiveGame] = useState<Game | null>(null);
  const [gameResult, setGameResult] = useState<{ game: Game; reward: number; points: number } | null>(null);

  const fetchGames = useGamesStore(state => state.fetchGames);
  const fetchUsers = useUsersStore(state => state.fetchUsers);

  useEffect(() => {
    try {
      setLoading(true);
      const { games, users, ...restOfData } = mockAppData;
      setAppData(restOfData);
      fetchGames(games); // Initialize games in Zustand store
      fetchUsers(users); // Initialize users in Zustand store
    } catch (err) {
      setError('An unexpected error occurred while loading data.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [fetchGames, fetchUsers]);

  const handlePlayGame = (game: Game) => {
    setActiveGame(game);
  };

  const handleGameComplete = (game: Game, won: boolean) => {
    if (won && appData) {
        const pointsEarned = game.reward * 10;
        const newTransaction = {
            id: `t${Date.now()}`,
            description: `Reward: ${game.title}`,
            amount: game.reward,
            date: new Date().toLocaleDateString('en-CA'),
            type: 'credit' as const,
        };

        const updatedUser = {
            ...appData.user,
            walletBalance: appData.user.walletBalance + game.reward,
            points: appData.user.points + pointsEarned,
            transactionHistory: [newTransaction, ...appData.user.transactionHistory],
        };

        setAppData({ ...appData, user: updatedUser });
        setGameResult({ game, reward: game.reward, points: pointsEarned });
    }
    setActiveGame(null);
  };
  
  const handleCloseResult = () => {
    setGameResult(null);
  };


  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-brand-primary">
        <LoadingSpinner />
      </div>
    );
  }

  if (error || !appData) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-brand-primary text-brand-highlight">
        {error || 'Failed to load application data.'}
      </div>
    );
  }

  const renderUserContent = () => {
    switch (userPage) {
      case 'dashboard':
        return <Dashboard user={appData.user} leaderboard={appData.leaderboard} onPlayGame={handlePlayGame} />;
      case 'games':
        return <GamesPage onPlayGame={handlePlayGame} />;
      case 'leaderboard':
        return <LeaderboardPage leaderboard={appData.leaderboard} currentUser={appData.user.name} />;
      case 'wallet':
        return <WalletPage user={appData.user} />;
      case 'profile':
        return <ProfilePage user={appData.user} />;
      default:
        return <Dashboard user={appData.user} leaderboard={appData.leaderboard} onPlayGame={handlePlayGame} />;
    }
  };

  const renderAdminContent = () => {
    switch (adminPage) {
        case 'admin_dashboard':
            return <AdminPageComponent setAdminPage={setAdminPage} />;
        case 'admin_games':
            return <ManageGamesPage />;
        case 'admin_users':
            return <ManageUsersPage />;
        default:
            return <AdminPageComponent setAdminPage={setAdminPage} />;
    }
  };

  const renderBrandContent = () => {
    switch (brandPage) {
        case 'brand_dashboard':
            return <BrandDashboard />;
        default:
            return <BrandDashboard />;
    }
  };
  
  const renderContent = () => {
    switch (view) {
        case 'user':
            return renderUserContent();
        case 'admin':
            return renderAdminContent();
        case 'brand':
            return renderBrandContent();
        default:
            return renderUserContent();
    }
  }


  return (
    <div className="flex h-screen bg-brand-primary text-brand-text font-sans">
      <Sidebar 
        view={view} 
        setView={setView} 
        userPage={userPage} 
        setUserPage={setUserPage}
        adminPage={adminPage}
        setAdminPage={setAdminPage}
        brandPage={brandPage}
        setBrandPage={setBrandPage}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header user={appData.user} view={view}/>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-brand-primary p-6 lg:p-8 relative">
          {renderContent()}
        </main>
      </div>
       {activeGame && <GamePlayPage game={activeGame} onComplete={handleGameComplete} />}
       {gameResult && <GameResultPage result={gameResult} onClose={handleCloseResult} />}
    </div>
  );
};

export default App;