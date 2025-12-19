import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Lightbulb } from 'lucide-react';
import { useState, useEffect } from 'react';
import { facts } from '../data/mockData';

const Home = () => {
    const [randomFact, setRandomFact] = useState("");

    useEffect(() => {
        setRandomFact(facts[Math.floor(Math.random() * facts.length)]);
    }, []);
    return (
        <div className="relative isolate min-h-[calc(100vh-64px)] overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
                    <div className="mt-24 sm:mt-32 lg:mt-16">
                        <div className="inline-flex space-x-6">
                            <span className="rounded-full bg-green-500/10 px-3 py-1 text-sm font-semibold leading-6 text-green-400 ring-1 ring-inset ring-green-500/20">
                                New: Daily Leadership Contests
                            </span>
                        </div>
                    </div>
                    <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        Master the <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Indian Stock Market</span>
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        Learn trading using your mother tongue. Practice with real-time simulations, compete in daily quizzes, and climb the leaderboard. No risk, just learning.
                    </p>
                    <div className="mt-10 flex items-center gap-x-6">
                        <Link
                            to="/learn"
                            className="rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400 transition-all flex items-center gap-2"
                        >
                            Start Learning <ArrowRight size={18} />
                        </Link>
                        <Link to="/game" className="text-sm font-semibold leading-6 text-white hover:text-green-400 transition-colors">
                            Play Trading Game <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>

                <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
                    <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                        <div className="relative backdrop-blur-xl bg-slate-900/50 border border-slate-700 p-8 rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500 text-white">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-green-500/20 rounded-lg">
                                    <TrendingUp className="text-green-400 w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">Nifty 50 Simulation</h3>
                                    <p className="text-green-400 text-sm font-mono">+1.24% ▲</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between text-xs text-gray-400">
                                    <span>Open: 19,500</span>
                                    <span>High: 19,800</span>
                                </div>
                                <div className="h-2 bg-slate-700 rounded-full w-64 overflow-hidden">
                                    <div className="h-full bg-green-500 w-2/3 animate-pulse"></div>
                                </div>
                                <div className="h-2 bg-slate-700 rounded-full w-48 overflow-hidden">
                                    <div className="h-full bg-emerald-600 w-1/2 animate-pulse"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Facts Ticker Section */}
            <div className="mx-auto max-w-7xl px-6 mb-12">
                <div className="bg-slate-900/60 backdrop-blur-md border border-yellow-500/20 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                    <div className="p-3 bg-yellow-500/10 rounded-full">
                        <Lightbulb className="text-yellow-500 w-6 h-6" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h4 className="text-yellow-500 text-sm font-bold uppercase tracking-wider mb-1">Did You Know?</h4>
                        <p className="text-white text-lg font-medium">{randomFact}</p>
                    </div>
                    <button onClick={() => setRandomFact(facts[Math.floor(Math.random() * facts.length)])} className="text-sm text-gray-400 hover:text-white transition-colors underline">
                        Next Fact
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
