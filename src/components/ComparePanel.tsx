import { useState, useEffect } from 'react';
import { Sparkles, ArrowRightLeft, Target, Award, BrainCircuit, RefreshCw, BarChart } from 'lucide-react';
import { Player, AIComparison } from '../types';
import { PLAYERS } from '../data/mockData';
import { getTeamColor, formatStat, getPlayerAdvancedStats } from '../utils';
import { BarChart as ReBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function ComparePanel() {
  const [player1Id, setPlayer1Id] = useState<string>('virat-kohli');
  const [player2Id, setPlayer2Id] = useState<string>('jasprit-bumrah');
  
  const [comparison, setComparison] = useState<AIComparison | null>(null);
  const [loadingAI, setLoadingAI] = useState<boolean>(false);
  const [aiError, setAiError] = useState<string | null>(null);

  const player1 = PLAYERS.find(p => p.id === player1Id) || PLAYERS[0];
  const player2 = PLAYERS.find(p => p.id === player2Id) || PLAYERS[1];

  const p1Color = getTeamColor(player1.team);
  const p2Color = getTeamColor(player2.team);

  // Clear AI content when players change
  useEffect(() => {
    setComparison(null);
    setAiError(null);
  }, [player1Id, player2Id]);

  const generateAIComparison = async () => {
    setLoadingAI(true);
    setAiError(null);

    try {
      const response = await fetch('/api/comparison-insights', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          player1: {
            id: player1.id,
            name: player1.name,
            role: player1.role,
            team: player1.team,
            overall: player1.overall,
          },
          player2: {
            id: player2.id,
            name: player2.name,
            role: player2.role,
            team: player2.team,
            overall: player2.overall,
          }
        }),
      });

      if (!response.ok) {
        throw new Error('Comparison API server returned error status feedback');
      }

      const data = await response.json();
      setComparison(data);
    } catch (err: any) {
      console.error('Failed to grab comparative report:', err);
      setAiError('Unable to generate AI comparison. Please check your network backend connection.');
    } finally {
      setLoadingAI(false);
    }
  };

  const p1Adv = getPlayerAdvancedStats(player1.id, player1.role, player1.overall.runs, player1.overall.wickets);
  const p2Adv = getPlayerAdvancedStats(player2.id, player2.role, player2.overall.runs, player2.overall.wickets);

  // Recharts structured dataset contrasting key statistics of both players
  const rechartsData = [
    { name: 'Matches', [player1.name]: player1.overall.matches, [player2.name]: player2.overall.matches },
    { name: 'Runs / 10', [player1.name]: Math.round(player1.overall.runs / 10), [player2.name]: Math.round(player2.overall.runs / 10) }, // scaled for visibility
    { name: 'Strike Rate', [player1.name]: Math.round(player1.overall.strikeRate), [player2.name]: Math.round(player2.overall.strikeRate) },
    { name: 'Wickets', [player1.name]: player1.overall.wickets, [player2.name]: player2.overall.wickets },
    { name: 'Fifties (50s)', [player1.name]: p1Adv.fifties, [player2.name]: p2Adv.fifties },
    { name: 'Hundreds (100s)', [player1.name]: p1Adv.hundreds, [player2.name]: p2Adv.hundreds },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Intro Header */}
      <div>
        <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-gray-100 flex items-center">
          <ArrowRightLeft className="w-8 h-8 mr-3 text-amber-500" /> Compare Players Side-by-Side
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 uppercase">
          COMPARE ANY OF THE <strong className="text-amber-500 font-extrabold">{PLAYERS.length} TOTAL PLAYERS</strong> IN OUR ENTIRE CATALOG SIDE-BY-SIDE WITH COMPLETE GRAPHS AND GEMINI AI REPORT SUMMARIES
        </p>
      </div>

      {/* Selector Panels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Player 1 Select Box */}
        <div 
          className="p-5 bg-white dark:bg-gray-900 border rounded-2xl shadow-sm transition-all relative overflow-hidden"
          style={{ borderLeftColor: p1Color, borderLeftWidth: '6px' }}
        >
          <div className="flex justify-between items-center mb-3">
            <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">PLAYER A</span>
            <span className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: p1Color }} />
          </div>
          <label className="block text-xs font-semibold text-gray-400 mb-1.5 font-mono">SELECT FIRST PLAYER</label>
          <select
            id="player1-selector"
            value={player1Id}
            onChange={(e) => setPlayer1Id(e.target.value)}
            className="w-full p-3 rounded-xl bg-gray-50 dark:bg-gray-950 border border-gray-100 dark:border-gray-800 text-sm font-semibold text-gray-800 dark:text-gray-250 focus:outline-none focus:ring-2 focus:ring-amber-500/10 cursor-pointer"
          >
            {PLAYERS.map(p => (
              <option key={p.id} value={p.id} disabled={p.id === player2Id}>
                {p.name} ({p.team} - {p.role})
              </option>
            ))}
          </select>
        </div>

        {/* Player 2 Select Box */}
        <div 
          className="p-5 bg-white dark:bg-gray-900 border rounded-2xl shadow-sm transition-all relative overflow-hidden"
          style={{ borderLeftColor: p2Color, borderLeftWidth: '6px' }}
        >
          <div className="flex justify-between items-center mb-3">
            <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">PLAYER B</span>
            <span className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: p2Color }} />
          </div>
          <label className="block text-xs font-semibold text-gray-400 mb-1.5 font-mono">SELECT SECOND PLAYER</label>
          <select
            id="player2-selector"
            value={player2Id}
            onChange={(e) => setPlayer2Id(e.target.value)}
            className="w-full p-3 rounded-xl bg-gray-50 dark:bg-gray-950 border border-gray-100 dark:border-gray-800 text-sm font-semibold text-gray-800 dark:text-gray-250 focus:outline-none focus:ring-2 focus:ring-amber-500/10 cursor-pointer"
          >
            {PLAYERS.map(p => (
              <option key={p.id} value={p.id} disabled={p.id === player1Id}>
                {p.name} ({p.team} - {p.role})
              </option>
            ))}
          </select>
        </div>

      </div>

      {/* Main comparative grid: Data specs table vs Recharts contrast */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Specifications comparison table (7 columns) */}
        <div className="lg:col-span-7 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-6 shadow-sm space-y-6">
          <div className="flex justify-between items-center pb-3 border-b border-gray-100 dark:border-gray-800">
            <h3 className="font-display font-bold text-sm text-gray-900 dark:text-gray-100">Simple Career Stats Match</h3>
            <span className="text-[10px] font-mono text-gray-400">SIDE-BY-SIDE STATS</span>
          </div>

          <div className="divide-y divide-gray-100 dark:divide-gray-800 text-sm">
            
            {/* Matches */}
            <div className="grid grid-cols-3 py-3 items-center">
              <span className="font-display font-medium text-gray-800 dark:text-gray-200 text-left">
                {player1.overall.matches}
              </span>
              <span className="text-[10px] font-mono font-bold text-gray-400 text-center uppercase">
                Matches Played
              </span>
              <span className="font-display font-medium text-gray-800 dark:text-gray-205 text-right">
                {player2.overall.matches}
              </span>
            </div>

            {/* Runs */}
            <div className="grid grid-cols-3 py-3 items-center">
              <span className="font-display font-bold text-gray-900 dark:text-gray-100 text-left text-lg">
                {player1.overall.runs}
              </span>
              <span className="text-[10px] font-mono font-bold text-gray-400 text-center uppercase">
                Total Runs
              </span>
              <span className="font-display font-bold text-gray-900 dark:text-gray-100 text-right text-lg">
                {player2.overall.runs}
              </span>
            </div>

            {/* Wickets */}
            <div className="grid grid-cols-3 py-3 items-center">
              <span className="font-display font-bold text-gray-900 dark:text-gray-100 text-left text-lg">
                {player1.overall.wickets}
              </span>
              <span className="text-[10px] font-mono font-bold text-gray-400 text-center uppercase">
                Total Wickets
              </span>
              <span className="font-display font-bold text-gray-900 dark:text-gray-100 text-right text-lg">
                {player2.overall.wickets}
              </span>
            </div>

            {/* S/R */}
            <div className="grid grid-cols-3 py-3 items-center">
              <span className="font-display font-semibold text-gray-800 dark:text-gray-205 text-left">
                {formatStat(player1.overall.strikeRate)}
              </span>
              <span className="text-[10px] font-mono font-bold text-gray-400 text-center uppercase">
                Hitting Speed (S/R)
              </span>
              <span className="font-display font-semibold text-gray-800 dark:text-gray-205 text-right">
                {formatStat(player2.overall.strikeRate)}
              </span>
            </div>

            {/* Economy */}
            <div className="grid grid-cols-3 py-3 items-center">
              <span className="font-display font-semibold text-gray-800 dark:text-gray-205 text-left">
                {formatStat(player1.overall.economy)}
              </span>
              <span className="text-[10px] font-mono font-bold text-gray-400 text-center uppercase">
                Bowling Economy
              </span>
              <span className="font-display font-semibold text-gray-800 dark:text-gray-205 text-right">
                {formatStat(player2.overall.economy)}
              </span>
            </div>

            {/* Average */}
            <div className="grid grid-cols-3 py-3 items-center">
              <span className="font-display font-semibold text-gray-800 dark:text-gray-205 text-left text-emerald-600 dark:text-emerald-400">
                {formatStat(player1.overall.average)}
              </span>
              <span className="text-[10px] font-mono font-bold text-gray-400 text-center uppercase">
                Batting Average
              </span>
              <span className="font-display font-semibold text-gray-800 dark:text-gray-250 text-right text-emerald-600 dark:text-emerald-400">
                {formatStat(player2.overall.average)}
              </span>
            </div>

            {/* Best Bowling */}
            <div className="grid grid-cols-3 py-3 items-center">
              <span className="font-display font-medium text-gray-800 dark:text-gray-205 text-left">
                {player1.overall.bestBowling !== '0/0' ? player1.overall.bestBowling : '-'}
              </span>
              <span className="text-[10px] font-mono font-bold text-gray-400 text-center uppercase">
                Best Bowling Figure
              </span>
              <span className="font-display font-medium text-gray-800 dark:text-gray-250 text-right">
                {player2.overall.bestBowling !== '0/0' ? player2.overall.bestBowling : '-'}
              </span>
            </div>

            {/* Catches */}
            <div className="grid grid-cols-3 py-3 items-center">
              <span className="font-display font-medium text-gray-800 dark:text-gray-150 text-left">
                {player1.overall.catches}
              </span>
              <span className="text-[10px] font-mono font-bold text-gray-400 text-center uppercase">
                Catches Taken
              </span>
              <span className="font-display font-medium text-gray-800 dark:text-gray-150 text-right">
                {player2.overall.catches}
              </span>
            </div>

            {/* Fifties */}
            <div className="grid grid-cols-3 py-3 items-center">
              <span className="font-display font-extrabold text-amber-600 dark:text-amber-400 text-left scale-110">
                {p1Adv.fifties}
              </span>
              <span className="text-[10px] font-mono font-bold text-gray-400 text-center uppercase">
                Half Centuries (50s)
              </span>
              <span className="font-display font-extrabold text-amber-600 dark:text-amber-400 text-right scale-110">
                {p2Adv.fifties}
              </span>
            </div>

            {/* Hundreds */}
            <div className="grid grid-cols-3 py-3 items-center">
              <span className="font-display font-extrabold text-red-650 dark:text-red-400 text-left scale-110">
                {p1Adv.hundreds}
              </span>
              <span className="text-[10px] font-mono font-bold text-gray-400 text-center uppercase">
                Centuries (100s)
              </span>
              <span className="font-display font-extrabold text-red-650 dark:text-red-400 text-right scale-110">
                {p2Adv.hundreds}
              </span>
            </div>

            {/* Sixes & Fours */}
            <div className="grid grid-cols-3 py-3 items-center">
              <span className="font-display font-semibold text-gray-800 dark:text-gray-200 text-left">
                {p1Adv.sixes} / {p1Adv.fours}
              </span>
              <span className="text-[10px] font-mono font-bold text-gray-400 text-center uppercase">
                Sixes / Fours Scored
              </span>
              <span className="font-display font-semibold text-gray-800 dark:text-gray-200 text-right">
                {p2Adv.sixes} / {p2Adv.fours}
              </span>
            </div>

            {/* 5-Wickets Hauls */}
            <div className="grid grid-cols-3 py-3 items-center">
              <span className="font-display font-bold text-purple-600 dark:text-purple-400 text-left">
                {p1Adv.fiveWickets}
              </span>
              <span className="text-[10px] font-mono font-bold text-gray-400 text-center uppercase">
                5-Wicket Hauls
              </span>
              <span className="font-display font-bold text-purple-600 dark:text-purple-400 text-right">
                {p2Adv.fiveWickets}
              </span>
            </div>

          </div>

          {/* Recharts Graphical contrast */}
          <div className="pt-6 border-t border-gray-100 dark:border-gray-800 space-y-4">
            <h4 className="text-xs font-semibold text-gray-400 font-mono uppercase flex items-center">
              <BarChart className="w-4 h-4 mr-1 text-amber-500" /> Visual Performance Comparison
            </h4>
            
            <div className="w-full h-60">
              <ResponsiveContainer width="100%" height="100%">
                <ReBarChart data={rechartsData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
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
                  <Legend iconSize={8} wrapperStyle={{ fontSize: '11px', margin: '14px 0' }} />
                  <Bar dataKey={player1.name} fill={p1Color} radius={[4, 4, 0, 0]} />
                  <Bar dataKey={player2.name} fill={p2Color} radius={[4, 4, 0, 0]} />
                </ReBarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* AI Comparative Report Column (5 columns) */}
        <div className="lg:col-span-12 xl:col-span-5 lg:col-start-1 xl:col-start-8">
          <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-6 shadow-md h-full flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-display font-bold text-gray-900 dark:text-gray-100 flex items-center text-sm">
                    <Sparkles className="w-5 h-5 mr-1.5 text-amber-500 fill-amber-500" /> AI-Generated Simple Matchup
                  </h3>
                  <p className="text-[10px] font-mono text-gray-400 mt-1 uppercase">GEMINI COMPARISON REPORT</p>
                </div>
                {comparison && (
                  <button
                    onClick={generateAIComparison}
                    disabled={loadingAI}
                    className="p-1.5 rounded-lg border border-gray-100 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400 hover:text-gray-650 transition-colors cursor-pointer"
                    title="Regenerate Comparison"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${loadingAI ? 'animate-spin' : ''}`} />
                  </button>
                )}
              </div>

              {!comparison && !loadingAI && (
                <div className="py-12 text-center my-auto">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto mb-4">
                    <BrainCircuit className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-xs text-gray-700 dark:text-gray-300">Run Easy Matchup AI</h4>
                  <p className="text-xs text-gray-400 mt-2 max-w-sm mx-auto mb-6 leading-relaxed">
                    Let Gemini AI look at both players' stats and tell you who has the advantage and why, in very easy words.
                  </p>
                  <button
                    id="compare-ai-btn"
                    onClick={generateAIComparison}
                    className="inline-flex items-center justify-center px-4 py-2.5 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-xs font-semibold cursor-pointer shadow-sm transition-transform hover:scale-102 gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5" /> Compare with Gemini AI
                  </button>
                </div>
              )}

              {loadingAI && (
                <div className="py-20 flex flex-col items-center justify-center text-center">
                  <div className="w-10 h-10 border-4 border-amber-500/20 border-t-amber-500 rounded-full animate-spin mb-4" />
                  <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">Reading player statistics...</p>
                  <p className="text-[10px] text-gray-400 mt-1 max-w-[200px] leading-normal font-mono uppercase">
                    grading performances in plain english
                  </p>
                </div>
              )}

              {aiError && (
                <div className="p-3 bg-red-500/5 border border-red-500/10 rounded-xl text-xs text-red-600 dark:text-red-400 text-center my-4">
                  {aiError}
                </div>
              )}

              {comparison && !loadingAI && (
                <div className="space-y-6 animate-fade-in">
                  
                  {/* Coached narrative comparison */}
                  <div className="p-4 rounded-xl bg-gray-50/50 dark:bg-gray-950/20 border border-gray-100 dark:border-gray-800">
                    <h4 className="text-[10px] uppercase font-mono font-bold text-gray-400 tracking-wider">Advantage Summary</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed mt-1.5">
                      {comparison.comparisonText}
                    </p>
                  </div>

                  {/* Compared Metric Analysis */}
                  <div className="space-y-3.5">
                    <h4 className="text-[10px] uppercase font-mono font-bold text-gray-400 tracking-wider">Strengths Side-by-Side</h4>
                    <div className="space-y-3">
                      {comparison.metricAnalysis.map((item, idx) => (
                        <div key={idx} className="p-3 border border-gray-100 dark:border-gray-800 rounded-xl bg-white dark:bg-gray-950/50">
                          <div className="flex justify-between items-center text-xs font-semibold text-gray-800 dark:text-gray-200">
                            <span>{item.metric}</span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                              Advantage: {item.advantage}
                            </span>
                          </div>
                          <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1 leading-normal">
                            {item.explanation}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              )}
            </div>

            <div className="mt-8 pt-4 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center text-[10px] font-mono text-gray-400">
              <span>IPL SIMPLE COMPARISON HUB</span>
              <span className="flex items-center"><Award className="w-3.5 h-3.5 mr-1 text-amber-500" /> EASY AI HELP</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
