import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from "./pages/Register";
import Navbar from './components/Navbar';
import stockBg from './assets/stock_bg.png';
import Home from './pages/Home';
import Learn from './pages/Learn';
import Quiz from './pages/Quiz';
import Leaderboard from './pages/Leaderboard';
import Game from './pages/Game';
import BullBearGame from './pages/BullBearGame';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-white font-sans antialiased selection:bg-green-500 selection:text-white relative">
        {/* Global Background */}
        <div className="fixed inset-0 z-0">
          <img
            src={stockBg}
            alt="Background"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40" />
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10">
          <Routes>
            <Route path="/register" element={<Register />} />

            <Route path="/login" element={<Login />} />

            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="*" element={
                <>
                  <Navbar />
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/learn" element={<Learn />} />
                    <Route path="/quiz" element={<Quiz />} />
                    <Route path="/game" element={<Game />} />
                    <Route path="/game/bull-bear" element={<BullBearGame />} />
                    <Route path="/leaderboard" element={<Leaderboard />} />
                  </Routes>
                </>
              } />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
