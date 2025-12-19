import { useState, useEffect } from 'react';
import { BrainCircuit, CheckCircle, XCircle, RefreshCw, Trophy } from 'lucide-react';
import { quizzes as mockQuizzes } from '../data/mockData';

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [language, setLanguage] = useState('en');

    useEffect(() => {
        // In real app: axios.get('/api/content/quizzes/random?count=5')
        setQuestions(mockQuizzes); // Using all mock quizzes for now
    }, []);

    const handleOptionClick = (isCorrect, index) => {
        if (isAnswered) return;

        setSelectedOption(index);
        setIsAnswered(true);

        if (isCorrect) {
            setScore(score + 10);
        }
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedOption(null);
            setIsAnswered(false);
        } else {
            setShowResult(true);
            // In real app: axios.post('/api/game/score', { scoreIncrement: score })
        }
    };

    const resetQuiz = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setShowResult(false);
        setSelectedOption(null);
        setIsAnswered(false);
    };

    if (questions.length === 0) return <div className="text-white p-10 text-center">Loading Questions...</div>;

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className="min-h-screen bg-transparent flex items-center justify-center px-4 py-12">
            <div className="max-w-2xl w-full bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl shadow-2xl p-8 relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-green-500/10 rounded-full blur-3xl"></div>

                {!showResult ? (
                    <>
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-gray-400 text-sm font-medium">Question {currentQuestionIndex + 1}/{questions.length}</span>
                            <div className="flex gap-2">
                                <button onClick={() => setLanguage('en')} className={`text-xs px-2 py-1 rounded ${language === 'en' ? 'bg-slate-700 text-white' : 'text-gray-500'}`}>EN</button>
                                <button onClick={() => setLanguage('hi')} className={`text-xs px-2 py-1 rounded ${language === 'hi' ? 'bg-slate-700 text-white' : 'text-gray-500'}`}>HI</button>
                                <button onClick={() => setLanguage('ta')} className={`text-xs px-2 py-1 rounded ${language === 'ta' ? 'bg-slate-700 text-white' : 'text-gray-500'}`}>TA</button>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-white mb-2">{currentQuestion.question[language] || currentQuestion.question['en']}</h2>
                            <span className="inline-block px-3 py-1 bg-slate-800 rounded-full text-xs text-blue-400 font-medium tracking-wide border border-slate-700">
                                {currentQuestion.category}
                            </span>
                        </div>

                        <div className="space-y-3">
                            {currentQuestion.options.map((option, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleOptionClick(option.isCorrect, index)}
                                    disabled={isAnswered}
                                    className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between group 
                    ${isAnswered
                                            ? option.isCorrect
                                                ? 'bg-green-500/10 border-green-500/50 text-green-400'
                                                : selectedOption === index
                                                    ? 'bg-red-500/10 border-red-500/50 text-red-400'
                                                    : 'bg-slate-800/50 border-slate-700 text-gray-400 opacity-50'
                                            : 'bg-slate-800/50 border-slate-700 text-gray-200 hover:bg-slate-800 hover:border-slate-600'
                                        }`}
                                >
                                    <span className="font-medium text-lg">{option.text}</span>
                                    {isAnswered && option.isCorrect && <CheckCircle className="text-green-500" size={20} />}
                                    {isAnswered && selectedOption === index && !option.isCorrect && <XCircle className="text-red-500" size={20} />}
                                </button>
                            ))}
                        </div>

                        {isAnswered && (
                            <div className="mt-8 flex justify-end animate-in fade-in slide-in-from-bottom-4 duration-300">
                                <button
                                    onClick={handleNextQuestion}
                                    className="bg-white text-slate-900 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg flex items-center gap-2"
                                >
                                    {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'View Results'}
                                </button>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="text-center py-10">
                        <div className="inline-flex justify-center items-center w-20 h-20 bg-green-500/10 rounded-full mb-6 relative">
                            <TrophyIcon className="w-10 h-10 text-green-500" />
                            <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl animate-pulse"></div>
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-2">Quiz Completed!</h2>
                        <p className="text-gray-400 mb-8">You scored <span className="text-green-400 font-bold text-xl">{score}</span> points</p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={resetQuiz}
                                className="inline-flex justify-center items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-xl hover:bg-slate-700 transition-colors font-medium border border-slate-700"
                            >
                                <RefreshCw size={18} /> Play Again
                            </button>
                            <a
                                href="/learn"
                                className="inline-flex justify-center items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-500 transition-colors font-bold shadow-lg shadow-green-500/20"
                            >
                                <BrainCircuit size={18} /> Back to Learn
                            </a>
                            <a
                                href="/leaderboard"
                                className="inline-flex justify-center items-center gap-2 px-6 py-3 bg-yellow-500/10 text-yellow-500 border border-yellow-500/50 rounded-xl hover:bg-yellow-500/20 transition-colors font-medium"
                            >
                                <Trophy size={18} /> Leaderboard
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

const TrophyIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
);

export default Quiz;
