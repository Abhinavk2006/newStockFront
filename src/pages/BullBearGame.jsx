import { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, RefreshCw, AlertCircle } from 'lucide-react';

const newsHeadlines = [
    { text: "RBI increases repo rate by 50 basis points.", impact: "Bear" }, // Market falls on rate hike
    { text: "Company Q3 profits jump 40% YoY.", impact: "Bull" }, // Strong earnings = Buy
    { text: "Global recession fears loom as inflation hits peak.", impact: "Bear" },
    { text: "Government announces PLI scheme for IT sector.", impact: "Bull" },
    { text: "Oil prices surge to $120 per barrel.", impact: "Bear" }, // Bad for India (importer)
    { text: "Foreign Institutional Investors (FIIs) buy ₹5000 Cr worth shares.", impact: "Bull" },
    { text: "Major bank fraud detected in top lender.", impact: "Bear" },
    { text: "Monsoon expected to be normal this year.", impact: "Bull" }, // Good for economy
    { text: "GST collections hit all-time high.", impact: "Bull" },
    { text: "US Fed hints at aggressive rate cuts.", impact: "Bull" }, // Good for emerging markets
];

const BullBearGame = () => {
    const [currentHeadline, setCurrentHeadline] = useState(null);
    const [score, setScore] = useState(0);
    const [gameState, setGameState] = useState('playing'); // playing, won, lost
    const [feedback, setFeedback] = useState(null);
    const [timeLeft, setTimeLeft] = useState(30);

    const startGame = () => {
        setScore(0);
        setGameState('playing');
        setTimeLeft(30);
        setFeedback(null);
        pickRandomHeadline();
    };

    const pickRandomHeadline = () => {
        const random = newsHeadlines[Math.floor(Math.random() * newsHeadlines.length)];
        setCurrentHeadline(random);
    };

    useEffect(() => {
        startGame();
    }, []);

    useEffect(() => {
        if (gameState === 'playing' && timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        } else if (timeLeft === 0) {
            setGameState('finished');
        }
    }, [timeLeft, gameState]);

    const handleChoice = (choice) => {
        if (gameState !== 'playing') return;

        if (choice === currentHeadline.impact) {
            setScore(score + 100);
            setFeedback("Correct! Market reacted as expected. 🚀");
            pickRandomHeadline();
        } else {
            setScore(Math.max(0, score - 50));
            setFeedback("Wrong! That was a " + currentHeadline.impact + "ish signal. 📉");
            // Optional: Penalty or just shake effect
            pickRandomHeadline();
        }
    };

    return (
        <div className="min-h-screen bg-transparent px-6 py-12 flex items-center justify-center">
            <div className="max-w-2xl w-full bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl shadow-2xl p-8 relative overflow-hidden text-center">

                <h1 className="text-3xl font-bold text-white mb-2">Bull 🐂 vs Bear 🐻</h1>
                <p className="text-gray-400 mb-8">Decide market direction based on the news!</p>

                {gameState === 'playing' ? (
                    <>
                        <div className="flex justify-between items-center mb-6 px-4">
                            <div className="bg-slate-800 rounded-lg px-4 py-2">
                                <span className="text-gray-400 text-xs uppercase block">Time</span>
                                <span className={`text-xl font-mono font-bold ${timeLeft < 10 ? 'text-red-500' : 'text-white'}`}>{timeLeft}s</span>
                            </div>
                            <div className="bg-slate-800 rounded-lg px-4 py-2">
                                <span className="text-gray-400 text-xs uppercase block">Score</span>
                                <span className="text-xl font-mono font-bold text-yellow-400">{score}</span>
                            </div>
                        </div>

                        <div className="bg-slate-800/50 rounded-xl p-8 mb-8 border border-slate-700 min-h-[160px] flex items-center justify-center">
                            <h2 className="text-2xl font-bold text-white leading-relaxed">
                                "{currentHeadline?.text}"
                            </h2>
                        </div>

                        {feedback && (
                            <div className="mb-6 text-sm font-medium animate-pulse text-blue-400">
                                {feedback}
                            </div>
                        )}

                        <div className="flex gap-4 justify-center">
                            <button
                                onClick={() => handleChoice('Bull')}
                                className="group flex-1 bg-green-500 hover:bg-green-400 text-white p-6 rounded-xl font-bold text-xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-green-500/20"
                            >
                                <TrendingUp className="mx-auto mb-2 w-8 h-8 group-hover:-translate-y-1 transition-transform" />
                                BUY (Bull)
                            </button>
                            <button
                                onClick={() => handleChoice('Bear')}
                                className="group flex-1 bg-red-500 hover:bg-red-400 text-white p-6 rounded-xl font-bold text-xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-red-500/20"
                            >
                                <TrendingDown className="mx-auto mb-2 w-8 h-8 group-hover:translate-y-1 transition-transform" />
                                SELL (Bear)
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="py-10">
                        <div className="mb-6">
                            <AlertCircle className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                            <h2 className="text-3xl font-bold text-white mb-2">Game Over!</h2>
                            <p className="text-xl text-gray-300">Final Score: <span className="text-green-400 font-bold">{score}</span></p>
                        </div>
                        <button
                            onClick={startGame}
                            className="inline-flex items-center gap-2 px-8 py-3 bg-green-600 text-white rounded-xl hover:bg-green-500 transition-colors font-bold text-lg shadow-lg"
                        >
                            <RefreshCw size={24} /> Play Again
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BullBearGame;
