import { useState, useEffect, useRef } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { TrendingUp, TrendingDown, DollarSign, Activity } from 'lucide-react';

const Game = () => {
    const [data, setData] = useState([]);
    const [price, setPrice] = useState(100);
    const [balance, setBalance] = useState(10000); // 10k virtual cash
    const [holdings, setHoldings] = useState(0);
    const [gameTime, setGameTime] = useState(0);
    const chartRef = useRef(null);

    // Generate initial data
    useEffect(() => {
        const initialData = [];
        let currentPrice = 100;
        for (let i = 0; i < 20; i++) {
            currentPrice = currentPrice * (1 + (Math.random() - 0.5) * 0.05);
            initialData.push({ time: i, price: currentPrice });
        }
        setData(initialData);
        setPrice(currentPrice);
    }, []);

    // Simulation Loop
    useEffect(() => {
        const interval = setInterval(() => {
            setGameTime(prev => prev + 1);

            setPrice(prevPrice => {
                const volatility = 0.02; // 2% max change
                const change = (Math.random() - 0.5) * volatility;
                const newPrice = prevPrice * (1 + change);

                setData(prevData => {
                    const newData = [...prevData, { time: prevData.length, price: newPrice }];
                    if (newData.length > 50) newData.shift(); // Keep last 50 points
                    return newData;
                });

                return newPrice;
            });
        }, 1000); // 1-second ticks

        return () => clearInterval(interval);
    }, []);

    const handleBuy = () => {
        if (balance >= price) {
            setBalance(balance - price);
            setHoldings(holdings + 1);
        }
    };

    const handleSell = () => {
        if (holdings > 0) {
            setBalance(balance + price);
            setHoldings(holdings - 1);
        }
    };

    const portfolioValue = balance + (holdings * price);
    const profit = portfolioValue - 10000;
    const isProfit = profit >= 0;

    return (
        <div className="min-h-screen bg-slate-950 p-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Main Chart Section */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <h2 className="text-gray-400 text-sm font-medium uppercase tracking-wider">Live Market</h2>
                                <div className="flex items-baseline gap-3">
                                    <span className="text-4xl font-bold text-white">₹{price.toFixed(2)}</span>
                                    <span className={`flex items-center text-sm font-medium ${data[data.length - 1]?.price >= data[data.length - 2]?.price ? 'text-green-400' : 'text-red-400'}`}>
                                        {data[data.length - 1]?.price >= data[data.length - 2]?.price ? <TrendingUp size={16} className="mr-1" /> : <TrendingDown size={16} className="mr-1" />}
                                        {(Math.abs(price - (data[data.length - 2]?.price || 100))).toFixed(2)}
                                    </span>
                                </div>
                            </div>
                            <div className="p-3 bg-slate-800 rounded-lg">
                                <Activity className="text-blue-400" />
                            </div>
                        </div>

                        <div className="h-[400px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={data}>
                                    <defs>
                                        <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <XAxis dataKey="time" hide />
                                    <YAxis domain={['auto', 'auto']} hide />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }}
                                        itemStyle={{ color: '#10b981' }}
                                        formatter={(value) => [`₹${value.toFixed(2)}`, 'Price']}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="price"
                                        stroke="#10b981"
                                        strokeWidth={2}
                                        fillOpacity={1}
                                        fill="url(#colorPrice)"
                                        isAnimationActive={false}
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* Dashboard / Controls Section */}
                <div className="lg:col-span-1 space-y-6">
                    {/* Portfolio Card */}
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>

                        <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-4">Your Portfolio</h3>

                        <div className="space-y-4">
                            <div>
                                <p className="text-gray-500 text-xs">Total Value</p>
                                <div className="text-3xl font-bold text-white">₹{portfolioValue.toFixed(2)}</div>
                                <div className={`text-sm font-medium ${isProfit ? 'text-green-400' : 'text-red-400'}`}>
                                    {isProfit ? '+' : ''}{profit.toFixed(2)} ({((profit / 10000) * 100).toFixed(2)}%)
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                                <div>
                                    <p className="text-gray-500 text-xs">Cash Balance</p>
                                    <p className="text-white font-semibold">₹{balance.toFixed(2)}</p>
                                </div>
                                <div>
                                    <p className="text-gray-500 text-xs">Holdings</p>
                                    <p className="text-white font-semibold">{holdings} Stocks</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Trading Controls */}
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
                        <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-4">Actions</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <button
                                onClick={handleBuy}
                                className="flex flex-col items-center justify-center p-4 bg-green-600 hover:bg-green-500 rounded-xl transition-colors group"
                            >
                                <span className="text-xs text-green-200 uppercase font-bold mb-1 group-hover:text-white">Buy @ Market</span>
                                <span className="text-xl font-bold text-white">Buy</span>
                            </button>

                            <button
                                onClick={handleSell}
                                disabled={holdings === 0}
                                className={`flex flex-col items-center justify-center p-4 rounded-xl transition-colors group ${holdings === 0 ? 'bg-slate-800 cursor-not-allowed opacity-50' : 'bg-red-600 hover:bg-red-500'}`}
                            >
                                <span className={`text-xs uppercase font-bold mb-1 ${holdings === 0 ? 'text-gray-500' : 'text-red-200 group-hover:text-white'}`}>Sell @ Market</span>
                                <span className={`text-xl font-bold ${holdings === 0 ? 'text-gray-500' : 'text-white'}`}>Sell</span>
                            </button>
                        </div>
                        <p className="text-xs text-gray-500 text-center mt-4">
                            Market Simulation Active • Instant Execution
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Game;
