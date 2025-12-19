import { Link, useNavigate } from 'react-router-dom';
import { TrendingUp, BookOpen, BrainCircuit, Gamepad2, Trophy, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
    };

    if (!token) return null; // Don't show navbar if not logged in

    return (
        <nav className="bg-slate-900 border-b border-slate-800 text-white sticky top-0 z-50 backdrop-blur-md bg-opacity-90">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center space-x-2">
                            <TrendingUp className="h-8 w-8 text-green-400" />
                            <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-green-400 to-emerald-600 text-transparent bg-clip-text">
                                StockMaster India
                            </span>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link to="/" className="hover:bg-slate-800 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</Link>
                            <Link to="/learn" className="hover:bg-slate-800 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1"><BookOpen size={16} /> Learn</Link>
                            <Link to="/quiz" className="hover:bg-slate-800 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1"><BrainCircuit size={16} /> Quiz</Link>
                            <Link to="/game" className="hover:bg-slate-800 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1"><Gamepad2 size={16} /> Sim</Link>
                            <Link to="/game/bull-bear" className="bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-500 px-3 py-2 rounded-md text-sm font-bold border border-yellow-500/20 transition-colors flex items-center gap-1"><TrendingUp size={16} /> Bull vs Bear</Link>
                            <Link to="/leaderboard" className="hover:bg-slate-800 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1"><Trophy size={16} /> Leaderboard</Link>
                            <button onClick={handleLogout} className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-md text-sm font-bold shadow-lg shadow-red-500/20 transition-all hover:scale-105 ml-2">Logout</button>
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="bg-slate-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-700 focus:outline-none">
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-900">
                        <Link to="/" className="block hover:bg-slate-800 px-3 py-2 rounded-md text-base font-medium">Home</Link>
                        <Link to="/learn" className="block hover:bg-slate-800 px-3 py-2 rounded-md text-base font-medium">Learn</Link>
                        <Link to="/quiz" className="block hover:bg-slate-800 px-3 py-2 rounded-md text-base font-medium">Quiz</Link>
                        <Link to="/game" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sim</Link>
                        <Link to="/game/bull-bear" className="bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20 px-3 py-2 rounded-md text-sm font-bold border border-yellow-500/20">Bull vs Bear</Link>
                        <Link to="/leaderboard" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Leaderboard</Link>
                        <button onClick={handleLogout} className="text-red-400 hover:text-red-300 px-3 py-2 rounded-md text-sm font-bold w-full text-left">Logout</button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
