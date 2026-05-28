import { useState, useEffect } from 'react';
import { X, Sparkles, MapPin, Activity, Award, User, Target, BrainCircuit, RefreshCw } from 'lucide-react';
import { Player, AIInsight } from '../types';
import { getTeamColor, getTeamName, formatStat, getPlayerAdvancedStats } from '../utils';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface PlayerDetailsModalProps {
  player: Player;
  onClose: () => void;
}

export default function PlayerDetailsModal({ player, onClose }: PlayerDetailsModalProps) {
  const [aiInsight, setAiInsight] = useState<AIInsight | null>(null);
  const [loadingAI, setLoadingAI] = useState<boolean>(false);
  const [aiError, setAiError] = useState<string | null>(null);

  const teamColor = getTeamColor(player.team);
  const teamName = getTeamName(player.team);

  // Auto clean AI caches when switching players
  useEffect(() => {
    setAiInsight(null);
    setAiError(null);
  }, [player]);

  const generateAIPlayerInsights = async () => {
    setLoadingAI(true);
    setAiError(null);

    // Filter valid non-zero seasons for stats overview
    const validStats = player.seasonStats.filter(s => s.matches > 0);

    try {
      const response = await fetch('/api/player-insights', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          playerId: player.id,
          name: player.name,
          role: player.role,
          team: teamName,
          statsSummary: {
            overall: player.overall,
            seasons: validStats,
          }
        }),
      });

      if (!response.ok) {
        throw new Error('API server returned error status feedback');
      }

      const data = await response.json();
      setAiInsight(data);
    } catch (err: any) {
      console.error('Failed to grab AI player insights:', err);
      setAiError('Unable to generate AI coach guidelines. Please check your network.');
    } finally {
      setLoadingAI(false);
    }
  };

  // Convert season stats for Recharts (reverse to sorted ascending chrono: 2021 -> 2025)
  const chartData = [...player.seasonStats]
    .filter(stat => stat.matches > 0)
    .sort((a, b) => a.season - b.season);

  const isBowler = player.role === 'Bowler';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-900/60 dark:bg-gray-950/80 backdrop-blur-sm flex justify-center items-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-3xl w-full max-w-5xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-800 transition-all duration-300 transform scale-100">
        
        {/* Banner with Team Identity */}
        <div 
          className="relative px-6 py-6 md:px-8 md:py-8 flex flex-col md:flex-row justify-between items-start md:items-center text-white"
          style={{
            background: `linear-gradient(135deg, ${teamColor} 0%, rgba(20,20,20,0.95) 100%)`
          }}
        >
          {/* Subtle details background decoration stencil */}
          <div className="absolute top-0 right-0 w-40 h-full opacity-10 font-display font-extrabold text-[120px] select-none pointer-events-none -mr-8 -mt-8">
            {player.team}
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full bg-white/10 dark:bg-black/20 border border-white/20 flex items-center justify-center text-white text-2xl font-display font-extrabold uppercase">
              {player.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <h2 className="text-2xl font-display font-bold leading-tight">{player.name}</h2>
              <p className="text-xs text-white/85 font-mono flex items-center mt-1">
                ⭐ {player.role} • {teamName} ({player.team})
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3 mt-4 md:mt-0 relative z-10">
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 border border-white/25 hover:bg-white/20 transition-colors cursor-pointer"
              title="Close Panel"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body Grid */}
        <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Metrics & Visual Charts (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Quick Profile Parameters Table */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-gray-950 border border-gray-100 dark:border-gray-800">
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-mono font-bold text-gray-400 flex items-center">
                  <User className="w-3.5 h-3.5 mr-1 text-gray-400" /> AGE
                </span>
                <p className="text-sm font-display font-bold text-gray-800 dark:text-gray-200">{player.age} Years</p>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-mono font-bold text-gray-400 flex items-center">
                  <MapPin className="w-3.5 h-3.5 mr-1 text-gray-400" /> NATIONALITY
                </span>
                <p className="text-sm font-display font-bold text-gray-800 dark:text-gray-200">{player.nationality}</p>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-mono font-bold text-gray-400 flex items-center">
                  <Target className="w-3.5 h-3.5 mr-1 text-gray-400" /> BATTING STYLE
                </span>
                <p className="text-sm font-display font-semibold text-gray-800 dark:text-gray-200 truncate" title={player.battingStyle}>
                  {player.battingStyle.split(' ')[0]}
                </p>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-mono font-bold text-gray-400 flex items-center">
                  <Activity className="w-3.5 h-3.5 mr-1 text-gray-400" /> BOWLING STYLE
                </span>
                <p className="text-sm font-display font-semibold text-gray-800 dark:text-gray-200 truncate" title={player.bowlingStyle}>
                  {player.bowlingStyle !== 'N/A' ? player.bowlingStyle.split(' ')[0] : 'None'}
                </p>
              </div>
            </div>

            {/* Recharts Analytics Panel */}
            <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-5 shadow-sm">
              <div className="flex justify-between items-center mb-5">
                <div>
                  <h3 className="font-display font-bold text-sm text-gray-900 dark:text-gray-100">
                    {isBowler ? 'Wickets Season Progression' : 'Season Runs Progression'}
                  </h3>
                  <p className="text-[10px] font-mono text-gray-400">HISTORICAL PERFORMANCE TIMELINE</p>
                </div>
                <span className="text-[10px] uppercase font-bold text-gray-400">
                  Runs VS Seasons
                </span>
              </div>

              {chartData.length > 0 ? (
                <div className="w-full h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor={teamColor} stopOpacity={0.4}/>
                          <stop offset="95%" stopColor={teamColor} stopOpacity={0.0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(156,163,175,0.15)"/>
                      <XAxis dataKey="season" tick={{ fill: '#9CA3AF', fontSize: 10 }} />
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
                      <Area
                        type="monotone"
                        dataKey={isBowler ? 'wickets' : 'runs'}
                        name={isBowler ? 'Wickets' : 'Runs'}
                        stroke={teamColor}
                        strokeWidth={2.5}
                        fillOpacity={1}
                        fill="url(#colorValue)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              ) : (
                <div className="h-[250px] flex items-center justify-center text-gray-400 dark:text-gray-500 font-medium">
                  No active season timeline records available
                </div>
              )}
            </div>

            {/* Tabular Season breakdown list */}
            <div className="border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800 text-[10px] font-mono text-gray-400 uppercase">
                    <th className="px-4 py-3">Season</th>
                    <th className="px-2 py-3 text-center">Mat</th>
                    <th className="px-2 py-3 text-right">Runs</th>
                    <th className="px-2 py-3 text-right">Wkts</th>
                    <th className="px-2 py-3 text-right">{isBowler ? 'Econ' : 'S/R'}</th>
                    <th className="px-2 py-3 text-right">Avg</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {player.seasonStats.map((stat) => (
                    <tr 
                      key={stat.season} 
                      className={`text-xs hover:bg-gray-50 dark:hover:bg-gray-800/20 ${stat.matches === 0 ? 'opacity-30' : ''}`}
                    >
                      <td className="px-4 py-3 font-display font-bold text-gray-700 dark:text-gray-300">{stat.season}</td>
                      <td className="px-2 py-3 text-center font-semibold text-gray-600 dark:text-gray-400">{stat.matches}</td>
                      <td className="px-2 py-3 text-right font-semibold text-gray-900 dark:text-gray-100">{stat.runs}</td>
                      <td className="px-2 py-3 text-right font-semibold text-gray-900 dark:text-gray-100">{stat.wickets}</td>
                      <td className="px-2 py-3 text-right text-gray-600 dark:text-gray-400">
                        {isBowler ? formatStat(stat.economy) : formatStat(stat.strikeRate)}
                      </td>
                      <td className="px-2 py-3 text-right font-medium text-amber-600 dark:text-amber-400">
                        {stat.matches > 0 ? formatStat(stat.average) : '-'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>

          {/* Right Column: AI Insights Coaching Section (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Career Overall summary box */}
            <div className="p-5 border border-dashed border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 rounded-2xl relative shadow-sm">
              <div className="absolute top-4 right-4 text-xs font-mono font-bold text-gray-400">
                OVERALL IPL SUMMARY
              </div>
              <h4 className="font-display font-medium text-xs text-gray-400 mb-4 uppercase">Career Achievements</h4>
              
              {(() => {
                const advancedStats = getPlayerAdvancedStats(player.id, player.role, player.overall.runs, player.overall.wickets);
                return (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-gray-50/50 dark:bg-gray-950/50 rounded-xl">
                      <span className="text-[9px] uppercase font-mono text-gray-400">Total Matches</span>
                      <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mt-0.5">
                        {player.overall.matches} Matches
                      </p>
                    </div>
                    <div className="p-3 bg-gray-50/50 dark:bg-gray-950/50 rounded-xl">
                      <span className="text-[9px] uppercase font-mono text-gray-400">Overall Average</span>
                      <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mt-0.5">
                        {formatStat(player.overall.average)}
                      </p>
                    </div>
                    {!isBowler ? (
                      <>
                        <div className="p-3 bg-gray-50/50 dark:bg-gray-950/50 rounded-xl">
                          <span className="text-[9px] uppercase font-mono text-amber-600 dark:text-amber-400 font-bold block">Fifties (50s)</span>
                          <p className="text-sm font-extrabold text-gray-900 dark:text-gray-100 mt-0.5">
                            {advancedStats.fifties}
                          </p>
                        </div>
                        <div className="p-3 bg-gray-50/50 dark:bg-gray-950/50 rounded-xl">
                          <span className="text-[9px] uppercase font-mono text-emerald-600 dark:text-emerald-400 font-bold block">Hundreds (100s)</span>
                          <p className="text-sm font-extrabold text-gray-900 dark:text-gray-100 mt-0.5">
                            {advancedStats.hundreds}
                          </p>
                        </div>
                        <div className="p-3 bg-gray-50/50 dark:bg-gray-950/50 rounded-xl">
                          <span className="text-[9px] uppercase font-mono text-gray-400">Strike Rate</span>
                          <p className="text-sm font-semibold text-gray-850 dark:text-gray-205 mt-0.5">
                            {formatStat(player.overall.strikeRate)}
                          </p>
                        </div>
                        <div className="p-3 bg-gray-50/50 dark:bg-gray-950/50 rounded-xl">
                          <span className="text-[9px] uppercase font-mono text-gray-400">Sixes / Fours</span>
                          <p className="text-sm font-semibold text-amber-500 mt-0.5">
                            {advancedStats.sixes} / {advancedStats.fours}
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="p-3 bg-gray-50/50 dark:bg-gray-950/50 rounded-xl">
                          <span className="text-[9px] uppercase font-mono text-purple-600 dark:text-purple-400 font-bold block">Best Bowling</span>
                          <p className="text-sm font-extrabold text-gray-900 dark:text-gray-100 mt-0.5">
                            {player.overall.bestBowling !== '0/0' ? player.overall.bestBowling : 'N/A'}
                          </p>
                        </div>
                        <div className="p-3 bg-gray-50/50 dark:bg-gray-950/50 rounded-xl">
                          <span className="text-[9px] uppercase font-mono text-purple-600 dark:text-purple-400 font-bold block">5-Wicket Hauls</span>
                          <p className="text-sm font-extrabold text-gray-900 dark:text-gray-100 mt-0.5">
                            {advancedStats.fiveWickets}
                          </p>
                        </div>
                        <div className="p-3 bg-gray-50/50 dark:bg-gray-950/50 rounded-xl">
                          <span className="text-[9px] uppercase font-mono text-gray-400">Economy (Econ)</span>
                          <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mt-0.5">
                            {formatStat(player.overall.economy)}
                          </p>
                        </div>
                        <div className="p-3 bg-gray-50/50 dark:bg-gray-950/50 rounded-xl">
                          <span className="text-[9px] uppercase font-mono text-gray-400">4-Wicket Hauls</span>
                          <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mt-0.5">
                            {advancedStats.fourWickets}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                );
              })()}
            </div>

            {/* AI Insight Box */}
            <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 shadow-md relative overflow-hidden flex flex-col justify-between">
              
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-display font-bold text-gray-900 dark:text-gray-100 flex items-center text-sm">
                    <Sparkles className="w-5 h-5 mr-1.5 text-amber-500 fill-amber-500" /> simple AI Player Guide
                  </h3>
                  <p className="text-[10px] font-mono text-gray-400 mt-0.5">EASY SUMMARY FROM GEMINI AI</p>
                </div>
                {aiInsight && (
                  <button
                    onClick={generateAIPlayerInsights}
                    disabled={loadingAI}
                    className="p-1.5 rounded-lg border border-gray-100 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400 hover:text-gray-650 transition-colors cursor-pointer"
                    title="Regenerate Report"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${loadingAI ? 'animate-spin' : ''}`} />
                  </button>
                )}
              </div>

              {!aiInsight && !loadingAI && (
                <div className="py-8 text-center">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto mb-4">
                    <BrainCircuit className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-xs text-gray-700 dark:text-gray-300">Ask Gemini AI to Analyze</h4>
                  <p className="text-xs text-gray-400 mt-2 max-w-xs mx-auto mb-5 leading-relaxed">
                    Let Gemini AI look at this player's strengths, weaknesses, and key team info.
                  </p>
                  <button 
                    id={`ai-${player.id}`}
                    onClick={generateAIPlayerInsights}
                    className="inline-flex items-center justify-center px-4 py-2.5 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-xs font-semibold cursor-pointer shadow-sm transition-transform hover:scale-102 gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5" /> Analyze with Gemini AI
                  </button>
                </div>
              )}

              {loadingAI && (
                <div className="py-12 flex flex-col items-center justify-center text-center">
                  <div className="w-10 h-10 border-4 border-amber-500/20 border-t-amber-500 rounded-full animate-spin mb-4" />
                  <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">Running player report...</p>
                  <p className="text-[10px] text-gray-400 mt-1 max-w-[200px] leading-normal font-mono uppercase">
                    writing player summary in simple words
                  </p>
                </div>
              )}

              {aiError && (
                <div className="p-3 bg-red-500/5 border border-red-500/10 rounded-xl text-xs text-red-600 dark:text-red-400 text-center">
                  {aiError}
                </div>
              )}

              {aiInsight && !loadingAI && (
                <div className="space-y-5 animate-fade-in">
                  
                  {/* Executive Summary */}
                  <div>
                    <h4 className="text-[10px] uppercase font-mono font-bold text-gray-400 tracking-wider">AI Summary of Player</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed mt-1.5 p-3 rounded-xl bg-gray-50/50 dark:bg-gray-950/20 border border-gray-100 dark:border-gray-800">
                      {aiInsight.analysis}
                    </p>
                  </div>

                  {/* Strengths Grid */}
                  <div>
                    <h4 className="text-[10px] uppercase font-mono font-bold text-gray-400 tracking-wider">Main Strengths</h4>
                    <ul className="mt-1.5 space-y-1.5">
                      {aiInsight.strengths.slice(0, 3).map((strength, idx) => (
                        <li key={idx} className="text-xs text-gray-700 dark:text-gray-300 flex items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 mr-2 flex-none" />
                          <span>{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Weaknesses Grid */}
                  {aiInsight.weaknesses && aiInsight.weaknesses.length > 0 && (
                    <div>
                      <h4 className="text-[10px] uppercase font-mono font-bold text-gray-400 tracking-wider">Things to Improve</h4>
                      <ul className="mt-1.5 space-y-1.5">
                        {aiInsight.weaknesses.map((weakness, idx) => (
                          <li key={idx} className="text-xs text-gray-700 dark:text-gray-300 flex items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 mr-2 flex-none" />
                            <span>{weakness}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Coach recommendation */}
                  <div className="pt-3 border-t border-gray-100 dark:border-gray-800">
                    <h4 className="text-[10px] uppercase font-mono font-bold text-amber-500 tracking-wider">Suggested Match Style</h4>
                    <p className="text-xs text-gray-650 dark:text-gray-300 leading-relaxed mt-1.5 p-3 rounded-xl bg-amber-500/5 border border-amber-500/10 italic text-amber-950 dark:text-amber-300">
                      📣 "{aiInsight.recommendation}"
                    </p>
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
