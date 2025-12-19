import { useState } from 'react';
import { BookOpen, CheckCircle, ChevronRight, Layers, Award } from 'lucide-react';
import { lessons } from '../data/mockData';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Learn = () => {
    const [language, setLanguage] = useState('en');
    const [activeLevel, setActiveLevel] = useState('Beginner'); // Beginner, Intermediate, Advanced

    const levels = ['Beginner', 'Intermediate', 'Advanced'];

    const filteredLessons = lessons.filter(lesson =>
        lesson.difficulty === activeLevel
    );

    return (
        <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
                    <div className="text-center md:text-left">
                        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 mb-2">
                            Stock Market Academy
                        </h1>
                        <p className="text-gray-400">Master trading from basics to advanced strategies.</p>
                    </div>

                    <div className="flex bg-slate-800/50 p-1 rounded-lg border border-slate-700">
                        <button
                            onClick={() => setLanguage('en')}
                            className={`px-4 py-2 rounded-md transition-all ${language === 'en' ? 'bg-slate-700 text-white shadow-sm' : 'text-gray-400 hover:text-white'}`}
                        >
                            English
                        </button>
                        <button
                            onClick={() => setLanguage('hi')}
                            className={`px-4 py-2 rounded-md transition-all ${language === 'hi' ? 'bg-slate-700 text-white shadow-sm' : 'text-gray-400 hover:text-white'}`}
                        >
                            हिंदी
                        </button>
                        <button
                            onClick={() => setLanguage('ta')}
                            className={`px-4 py-2 rounded-md transition-all ${language === 'ta' ? 'bg-slate-700 text-white shadow-sm' : 'text-gray-400 hover:text-white'}`}
                        >
                            தமிழ்
                        </button>
                    </div>
                </div>

                {/* Level Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="flex gap-4 p-1 bg-slate-900/40 backdrop-blur-sm rounded-xl border border-slate-700/50">
                        {levels.map((level) => (
                            <button
                                key={level}
                                onClick={() => setActiveLevel(level)}
                                className={`relative px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${activeLevel === level
                                        ? 'text-white'
                                        : 'text-gray-400 hover:text-white'
                                    }`}
                            >
                                {activeLevel === level && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-green-600 rounded-lg shadow-lg shadow-green-500/20"
                                        initial={false}
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10 flex items-center gap-2">
                                    {level === 'Beginner' && <BookOpen size={16} />}
                                    {level === 'Intermediate' && <Layers size={16} />}
                                    {level === 'Advanced' && <Award size={16} />}
                                    {level}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Lessons Grid */}
                <motion.div
                    layout
                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredLessons.map((lesson) => (
                            <motion.div
                                key={lesson.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group relative bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 hover:border-green-500/50 transition-all shadow-xl hover:shadow-2xl hover:shadow-green-500/10 flex flex-col"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors">
                                        <BookOpen className="text-green-400 w-5 h-5" />
                                    </div>
                                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-slate-800 text-gray-400 border border-slate-700">
                                        {lesson.category}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                                    {lesson.title}
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                    {lesson.content[language]}
                                </p>

                                <div className="mt-auto pt-4 border-t border-slate-700/50 flex justify-between items-center bg-transparent">
                                    <div className="flex items-center gap-2 text-xs text-green-500/80">
                                        <CheckCircle size={14} />
                                        <span>Read</span>
                                    </div>
                                    <Link to="/quiz" className="flex items-center gap-1 text-sm font-semibold text-white bg-green-600 hover:bg-green-500 px-3 py-1.5 rounded-lg transition-all shadow-lg shadow-green-500/20 transform hover:scale-105">
                                        Take Quiz <ChevronRight size={14} />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredLessons.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-500">No lessons found for this level yet.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Learn;
