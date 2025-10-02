
import React from 'react';
import { User } from '../../types';
import Card from '../ui/Card';
import Icon from '../ui/Icon';

interface WalletPageProps {
    user: User;
}

const WalletPage: React.FC<WalletPageProps> = ({ user }) => {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6 text-brand-highlight">My Wallet</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <Card>
                        <p className="text-brand-subtext mb-2">Current Balance</p>
                        <p className="text-5xl font-bold text-green-400">${user.walletBalance.toFixed(2)}</p>
                        <button className="mt-6 w-full bg-brand-highlight text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity">
                            Withdraw Funds
                        </button>
                    </Card>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-4">Transaction History</h2>
                    <Card>
                        <ul className="space-y-4">
                            {user.transactionHistory.map(tx => (
                                <li key={tx.id} className="flex items-center justify-between p-3 bg-brand-secondary rounded-md">
                                    <div className="flex items-center space-x-3">
                                        <div className={`p-2 rounded-full ${tx.type === 'credit' ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
                                            <Icon name={tx.type === 'credit' ? 'arrowUp' : 'arrowDown'} className={`h-5 w-5 ${tx.type === 'credit' ? 'text-green-400' : 'text-red-400'}`} />
                                        </div>
                                        <div>
                                            <p className="font-semibold">{tx.description}</p>
                                            <p className="text-sm text-brand-subtext">{tx.date}</p>
                                        </div>
                                    </div>
                                    <p className={`font-bold ${tx.type === 'credit' ? 'text-green-400' : 'text-red-400'}`}>
                                        {tx.type === 'credit' ? '+' : '-'}${tx.amount.toFixed(2)}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default WalletPage;
