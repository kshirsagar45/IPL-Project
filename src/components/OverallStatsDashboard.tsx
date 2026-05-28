import { Award, Flame, Zap, ShieldAlert, Award as TrophyIcon } from 'lucide-react';
import { PLAYERS, HISTORICAL_CAPS } from '../data/mockData';
import { getTeamColor } from '../utils';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export default function OverallStatsDashboard() {
  // Sort players by Runs (Orange Cap candidate lists)
  const orangeCapList = [...PLAYERS]
    .sort((a, b) => b.overall.runs - a.overall.runs)
    .slice(0, 6);

  // Sort players by Wickets (Purple Cap candidate lists)
  const purpleCapList = [...PLAYERS]
    .sort((a, b) => b.overall.wickets - a.overall.wickets)
    .slice(0, 6);

  // Recharts data formatters
  const orangeData = orangeCapList.map(p => ({
    name: p.name.split(' ')[0], // only first name for chart spacing
    runs: p.overall.runs,
    color: getTeamColor(p.team)
  }));

  const purpleData = purpleCapList.map(p => ({
    name: p.name.split(' ')[0],
    wickets: p.overall.wickets,
    color: getTeamColor(p.team)
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8Data">
      
      {/* Intro Header */}
      <div>
        <h2 className="text-3xl font-display font-medium text-gray-900 dark:text-gray-100 flex items-center">
          <TrophyIcon className="w-8 h-8 mr-3 text-amber-500 fill-amber-500/10" /> Stats & Leaderboards
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">EASY LEADERBOARDS FOR MOST RUNS (ORANGE CAP) AND MOST WICKETS (PURPLE CAP) IN HISTORY</p>
      </div>

      {/* High-level analytical overview metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="p-5 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-[10px] font-mono text-gray-400 uppercase">Most Runs Leader (Orange Cap)</p>
              <h4 className="text-lg font-display font-bold text-gray-800 dark:text-gray-200 mt-1">{orangeCapList[0]?.name}</h4>
              <p className="text-2xl font-display font-light text-amber-500 font-extrabold mt-1">{orangeCapList[0]?.overall.runs} Runs</p>
            </div>
            <span className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600 block"><Award className="w-5 h-5" /></span>
          </div>
        </div>

        <div className="p-5 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-[10px] font-mono text-gray-400 uppercase">Most Wickets Leader (Purple Cap)</p>
              <h4 className="text-lg font-display font-bold text-gray-800 dark:text-gray-200 mt-1">{purpleCapList[0]?.name}</h4>
              <p className="text-2xl font-display font-light text-purple-500 font-extrabold mt-1">{purpleCapList[0]?.overall.wickets} Wickets</p>
            </div>
            <span className="p-2.5 rounded-xl bg-purple-500/10 text-purple-600 block"><Award className="w-5 h-5" /></span>
          </div>
        </div>

        <div className="p-5 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-[10px] font-mono text-gray-400 uppercase">Fastest Batter (Strike Rate)</p>
              <h4 className="text-lg font-display font-bold text-gray-800 dark:text-gray-200 mt-1">Sunil Narine</h4>
              <p className="text-2xl font-display font-light text-red-500 font-extrabold mt-1">162.10 %</p>
            </div>
            <span className="p-2.5 rounded-xl bg-red-500/10 text-red-600 block"><Zap className="w-5 h-5" /></span>
          </div>
        </div>

        <div className="p-5 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-[10px] font-mono text-gray-400 uppercase">Saves Runs (Best Economy)</p>
              <h4 className="text-lg font-display font-bold text-gray-800 dark:text-gray-200 mt-1">Jasprit Bumrah</h4>
              <p className="text-2xl font-display font-light text-emerald-500 font-extrabold mt-1">7.30 Economy</p>
            </div>
            <span className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 block"><Flame className="w-5 h-5" /></span>
          </div>
        </div>
      </div>

      {/* Main comparative lists and charts split */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Orange cap section (Runs Leaders) */}
        <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-6 shadow-sm space-y-6">
          <div className="flex justify-between items-center pb-3 border-b border-gray-100 dark:border-gray-800">
            <div>
              <h3 className="font-display font-bold text-sm text-gray-900 dark:text-gray-100 flex items-center">
                <span className="w-3.5 h-3.5 bg-amber-500 rounded-md mr-2" /> Most Career Runs (Orange Cap Race)
              </h3>
              <p className="text-[10px] font-mono text-gray-400 mt-0.5">THE PLAYERS WHO HAVE SCORED THE MOST RUNS OVERALL</p>
            </div>
            <span className="text-[10px] font-mono text-gray-400 uppercase bg-amber-500/5 px-2 py-0.5 border border-amber-500/20 text-amber-500 rounded font-semibold">
              RUN LEADERS
            </span>
          </div>

          <div className="w-full h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={orangeData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(156,163,175,0.15)"/>
                <XAxis dataKey="name" tick={{ fill: '#9CA3AF', fontSize: 10 }} />
                <YAxis tick={{ fill: '#9CA3AF', fontSize: 10 }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(20, 20, 20, 0.95)',
                    borderRadius: '12px',
                    border: 'none',
                    color: '#fff',
                    fontSize: '11px',
                    fontFamily: 'var(--font-sans)'
                  }}
                />
                <Bar dataKey="runs" name="Runs" radius={[4, 4, 0, 0]}>
                  {orangeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="divide-y divide-gray-100 dark:divide-gray-800">
            {orangeCapList.map((player, idx) => (
              <div key={player.id} className="flex justify-between items-center py-2.5 text-xs text-gray-700 dark:text-gray-300">
                <div className="flex items-center space-x-3">
                  <span className="font-mono text-gray-400 font-bold w-5">#{idx + 1}</span>
                  <span className="font-semibold text-gray-900 dark:text-gray-100">{player.name}</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-400">
                    {player.team}
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-display font-bold text-gray-900 dark:text-gray-100">{player.overall.runs}</span>
                  <span className="text-[10px] text-gray-400 block font-mono">SR: {player.overall.strikeRate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Purple cap section (Wickets Leaders) */}
        <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-6 shadow-sm space-y-6">
          <div className="flex justify-between items-center pb-3 border-b border-gray-100 dark:border-gray-800">
            <div>
              <h3 className="font-display font-bold text-sm text-gray-900 dark:text-gray-100 flex items-center">
                <span className="w-3.5 h-3.5 bg-purple-600 rounded-md mr-2" /> Most Career Wickets (Purple Cap Race)
              </h3>
              <p className="text-[10px] font-mono text-gray-400 mt-0.5">THE BOWLERS WHO HAVE TAKEN THE MOST WICKETS OVERALL</p>
            </div>
            <span className="text-[10px] font-mono text-purple-500 uppercase bg-purple-500/5 px-2 py-0.5 border border-purple-500/20 rounded font-semibold">
              WICKET LEADERS
            </span>
          </div>

          <div className="w-full h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={purpleData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(156,163,175,0.15)"/>
                <XAxis dataKey="name" tick={{ fill: '#9CA3AF', fontSize: 10 }} />
                <YAxis tick={{ fill: '#9CA3AF', fontSize: 10 }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(20, 20, 20, 0.95)',
                    borderRadius: '12px',
                    border: 'none',
                    color: '#fff',
                    fontSize: '11px',
                    fontFamily: 'var(--font-sans)'
                  }}
                />
                <Bar dataKey="wickets" name="Wickets" radius={[4, 4, 0, 0]}>
                  {purpleData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="divide-y divide-gray-100 dark:divide-gray-800">
            {purpleCapList.map((player, idx) => (
              <div key={player.id} className="flex justify-between items-center py-2.5 text-xs text-gray-700 dark:text-gray-300">
                <div className="flex items-center space-x-3">
                  <span className="font-mono text-gray-400 font-bold w-5">#{idx + 1}</span>
                  <span className="font-semibold text-gray-900 dark:text-gray-100">{player.name}</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-400">
                    {player.team}
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-display font-bold text-gray-900 dark:text-gray-100">{player.overall.wickets}</span>
                  <span className="text-[10px] text-gray-400 block font-mono">Econ: {player.overall.economy}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Historical Orange Cap & Purple Cap Section */}
      <div className="bg-white dark:bg-gray-900 border border-gray-105 dark:border-gray-800 rounded-3xl p-6 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-3 border-b border-gray-100 dark:border-gray-800 gap-2">
          <div>
            <h3 className="font-display font-bold text-lg text-gray-900 dark:text-gray-100 flex items-center">
              <span className="text-xl mr-2">👑</span> Historical Golden Cap Winners (2008 - 2025)
            </h3>
            <p className="text-xs text-gray-400 mt-0.5">THE ARCHIVE OF ALL ORANGE (MOST RUNS) AND PURPLE (MOST WICKETS) CAP WINNERS OF EVERY SINGLE IPL SEASON</p>
          </div>
          <span className="text-[10px] font-mono text-amber-500 uppercase bg-amber-500/5 px-3 py-1 border border-amber-500/15 rounded-full font-bold">
            HISTORICAL HALL OF FAME
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {HISTORICAL_CAPS.map((cap) => (
            <div 
              key={cap.season} 
              className="p-4 rounded-2xl bg-gray-50/50 dark:bg-gray-950/25 border border-gray-100 dark:border-gray-800 hover:border-amber-500/20 dark:hover:border-amber-500/10 transition-all flex flex-col justify-between hover:shadow-xs"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-display font-black text-gray-900 dark:text-gray-105 font-mono">
                  Season {cap.season}
                </span>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-amber-500/5 text-amber-600 dark:text-amber-400 border border-amber-500/10 font-bold">
                  IPL Cap
                </span>
              </div>
              
              <div className="space-y-2.5">
                {/* Orange cap winner details */}
                <div className="flex items-center justify-between text-xs pb-2 border-b border-gray-100 dark:border-gray-800/55">
                  <span className="flex items-center text-amber-600 dark:text-amber-400 font-semibold text-[11px]">
                    <span className="w-2.5 h-2.5 bg-amber-500 rounded-sm mr-1.5 shrink-0" /> Orange:
                  </span>
                  <div className="text-right">
                    <span className="font-bold text-gray-800 dark:text-gray-200 block text-[11px] truncate max-w-[125px]">
                      {cap.orangeWinner}
                    </span>
                    <span className="text-[10px] font-mono text-gray-400">
                      {cap.orangeTeam} • <strong className="text-gray-700 dark:text-gray-300">{cap.orangeRuns}</strong> runs
                    </span>
                  </div>
                </div>

                {/* Purple cap winner details */}
                <div className="flex items-center justify-between text-xs">
                  <span className="flex items-center text-purple-600 dark:text-purple-400 font-semibold text-[11px]">
                    <span className="w-2.5 h-2.5 bg-purple-600 rounded-sm mr-1.5 shrink-0" /> Purple:
                  </span>
                  <div className="text-right">
                    <span className="font-bold text-gray-800 dark:text-gray-200 block text-[11px] truncate max-w-[125px]">
                      {cap.purpleWinner}
                    </span>
                    <span className="text-[10px] font-mono text-gray-400">
                      {cap.purpleTeam} • <strong className="text-gray-700 dark:text-gray-300">{cap.purpleWickets}</strong> wkts
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
