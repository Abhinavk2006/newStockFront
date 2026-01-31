import { useState, useEffect } from "react";
import { Trophy, Medal, Crown } from "lucide-react";
import api from "../api";

const Leaderboard = () => {

  const [leaders, setLeaders] = useState([]);

  // 🔹 Load leaderboard from backend
  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await api.get("/api/game/leaderboard");
        setLeaders(res.data);
      } catch (err) {
        console.error("Failed to load leaderboard", err);
      }
    };

    fetchLeaderboard();
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

            {leaders.map((user, index) => (
              <div
                key={user._id || index}
                className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-slate-800/50 transition-colors group"
              >

                {/* Rank */}
                <div className="col-span-2 flex justify-center">
                  {index === 0 ? (
                    <Crown className="text-yellow-500 w-6 h-6" />
                  ) : index === 1 ? (
                    <Medal className="text-gray-400 w-6 h-6" />
                  ) : index === 2 ? (
                    <Medal className="text-orange-600 w-6 h-6" />
                  ) : (
                    <span className="text-gray-500 font-bold">#{index + 1}</span>
                  )}
                </div>

                {/* Username */}
                <div className="col-span-7 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-green-400 to-emerald-600 flex items-center justify-center text-white font-bold text-sm">
                    {user.username?.charAt(0)}
                  </div>
                  <span className="text-white font-medium">
                    {user.username}
                  </span>
                </div>

                {/* Score */}
                <div className="col-span-3 text-right">
                  <span className="text-white font-bold font-mono">
                    {user.totalScore}
                  </span>
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
