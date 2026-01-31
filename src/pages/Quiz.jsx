import { useState, useEffect } from "react";
import { BrainCircuit, CheckCircle, XCircle, RefreshCw, Trophy } from "lucide-react";
import api from "../api";

const Quiz = () => {

  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [language, setLanguage] = useState("en");

  // 🔹 Load questions from backend
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await api.get("/api/content/quizzes/random?count=5");
        setQuestions(res.data);
      } catch (err) {
        console.error("Failed to load questions", err);
      }
    };

    fetchQuestions();
  }, []);

  const handleOptionClick = (isCorrect, index) => {
    if (isAnswered) return;

    setSelectedOption(index);
    setIsAnswered(true);

    if (isCorrect) {
      setScore((prev) => prev + 10);
    }
  };

  const handleNextQuestion = async () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);

      // 🔹 Send score to backend
      try {
        await api.post("/api/game/score", {
          scoreIncrement: score,
        });
      } catch (err) {
        console.error("Failed to save score", err);
      }
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  if (questions.length === 0) {
    return <div className="text-white p-10 text-center">Loading Questions...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center px-4 py-12">

      <div className="max-w-2xl w-full bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl shadow-2xl p-8 relative overflow-hidden">

        {!showResult ? (
          <>
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-400 text-sm">
                Question {currentQuestionIndex + 1}/{questions.length}
              </span>

              <div className="flex gap-2">
                <button onClick={() => setLanguage("en")}>EN</button>
                <button onClick={() => setLanguage("hi")}>HI</button>
                <button onClick={() => setLanguage("ta")}>TA</button>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6">
              {currentQuestion.question?.[language] || currentQuestion.question?.en}
            </h2>

            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(option.isCorrect, index)}
                  disabled={isAnswered}
                  className="w-full text-left p-4 rounded-xl border bg-slate-800 text-white"
                >
                  {option.text}
                  {isAnswered && option.isCorrect && <CheckCircle className="inline ml-2 text-green-500" />}
                  {isAnswered && selectedOption === index && !option.isCorrect && (
                    <XCircle className="inline ml-2 text-red-500" />
                  )}
                </button>
              ))}
            </div>

            {isAnswered && (
              <div className="mt-6 text-right">
                <button
                  onClick={handleNextQuestion}
                  className="bg-white text-black px-6 py-3 rounded-xl font-bold"
                >
                  {currentQuestionIndex < questions.length - 1
                    ? "Next Question"
                    : "View Results"}
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-10">
            <Trophy className="mx-auto text-green-500" size={50} />
            <h2 className="text-3xl font-bold text-white mt-4">Quiz Completed!</h2>
            <p className="text-gray-400 mt-2">
              You scored <span className="text-green-400">{score}</span> points
            </p>

            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={resetQuiz}
                className="px-6 py-3 bg-slate-800 text-white rounded-xl"
              >
                <RefreshCw className="inline mr-2" size={18} />
                Play Again
              </button>

              <a href="/leaderboard" className="px-6 py-3 bg-green-600 text-white rounded-xl">
                Leaderboard
              </a>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Quiz;
