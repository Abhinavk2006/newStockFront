import { useState, useEffect } from 'react';
import { Trophy, Medal, Crown } from 'lucide-react';
import { leaderboardData as mockData } from '../data/mockData';

const Leaderboard = () => {
    const [leaders, setLeaders] = useState([]);

    useEffect(() => {
        // In real app: axios.get('/api/game/leaderboard')
        setLeaders(mockData);
    }, []);

    return (
        <div className="min-h-screen bg-transparent px-6 py-12 lg:px-8">
            <div className="mx-auto max-w-3xl">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl flex items-center justify-center gap-3">
                        <Crown className="text-yellow-500 w-10 h-10" />
                        Hall of Fame
                    </h1>
                    <p className="mt-4 text-lg text-gray-400">
                        Top traders and learners of the week.
                    </p>
                </div>

                <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl border border-slate-800 shadow-2xl overflow-hidden">
                    <div className="grid grid-cols-12 gap-4 border-b border-slate-800 bg-slate-900/50 p-4 text-sm font-semibold text-gray-400 uppercase tracking-wider">
                        <div className="col-span-2 text-center">Rank</div>
                        <div className="col-span-7">User</div>
                        <div className="col-span-3 text-right">Score</div>
                    </div>

                    <div className="divide-y divide-slate-800">
                        {leaders.map((user) => (
                            <div key={user.id} className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-slate-800/50 transition-colors group">
                                <div className="col-span-2 flex justify-center">
                                    {user.rank === 1 ? (
                                        <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center">
                                            <Crown className="w-5 h-5 text-yellow-500" />
                                        </div>
                                    ) : user.rank === 2 ? (
                                        <div className="w-8 h-8 rounded-full bg-gray-400/20 flex items-center justify-center">
                                            <Medal className="w-5 h-5 text-gray-400" />
                                        </div>
                                    ) : user.rank === 3 ? (
                                        <div className="w-8 h-8 rounded-full bg-orange-700/20 flex items-center justify-center">
                                            <Medal className="w-5 h-5 text-orange-600" />
                                        </div>
                                    ) : (
                                        <span className="text-gray-500 font-mono font-bold text-lg">#{user.rank}</span>
                                    )}
                                </div>

                                <div className="col-span-7 flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-green-400 to-emerald-600 flex items-center justify-center text-white font-bold text-sm">
                                        {user.username.charAt(0)}
                                    </div>
                                    <span className="text-white font-medium group-hover:text-green-400 transition-colors">
                                        {user.username}
                                    </span>
                                </div>

                                <div className="col-span-3 text-right">
                                    <span className="text-white font-bold font-mono tracking-tight">{user.totalScore.toLocaleString()}</span>
                                    <span className="text-xs text-green-500 ml-1">XP</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-500">
                        Leaderboard updates every 24 hours. Keep learning and playing to climb the ranks!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Leaderboard;
