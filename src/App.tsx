import { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import PlayerCard from './components/PlayerCard';
import PlayerDetailsModal from './components/PlayerDetailsModal';
import ComparePanel from './components/ComparePanel';
import OverallStatsDashboard from './components/OverallStatsDashboard';
import GoogleIPLAlmanac from './components/GoogleIPLAlmanac';

import { PLAYERS, TEAMS } from './data/mockData';
import { Player, Team } from './types';
import { getTeamColor, getTeamAccent, getTeamEmoji, formatStat } from './utils';

import { Search, Filter, Shield, Trophy, Users, Award, Star, BookOpen, Clock, Play } from 'lucide-react';

export default function App() {
  // Navigation states
  const [activeTab, setActiveTab] = useState<string>('home');
  
  // Theme state
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const cached = localStorage.getItem('ipl-analytics-premium-mode');
    return cached ? cached === 'true' : true; // default dark mode for stadium feeling!
  });

  // Favorites state
  const [favorites, setFavorites] = useState<string[]>(() => {
    const cached = localStorage.getItem('ipl-analytics-favorites');
    return cached ? JSON.parse(cached) : ['virat-kohli', 'jasprit-bumrah'];
  });

  // Filters state (Players Catalog)
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [teamFilter, setTeamFilter] = useState<string>('ALL');
  const [roleFilter, setRoleFilter] = useState<string>('ALL');
  const [selectedSeason, setSelectedSeason] = useState<number>(2025); // Core filter for stats view

  // Active Franchise state (Teams page)
  const [activeTeamId, setActiveTeamId] = useState<string>('CSK');

  // Popup detail state
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

  // Sync Class Mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('ipl-analytics-premium-mode', darkMode.toString());
  }, [darkMode]);

  // Sync Favorites
  useEffect(() => {
    localStorage.setItem('ipl-analytics-favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Manage Favorite Toggle Action
  const toggleFavoritePlayer = (playerId: string) => {
    setFavorites(prev => 
      prev.includes(playerId) 
        ? prev.filter(id => id !== playerId) 
        : [...prev, playerId]
    );
  };

  // Memoized query calculations
  const filteredPlayers = useMemo(() => {
    return PLAYERS.filter((player) => {
      // 1. Full-text search
      const matchQuery = player.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         player.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         player.team.toLowerCase().includes(searchQuery.toLowerCase());
      
      // 2. Team dropdown match
      const matchTeam = teamFilter === 'ALL' || player.team === teamFilter;
      
      // 3. Role dropdown match
      const matchRole = roleFilter === 'ALL' || player.role === roleFilter;

      return matchQuery && matchTeam && matchRole;
    });
  }, [searchQuery, teamFilter, roleFilter]);

  // Quick stat aggregates for dashboard top header
  const totalRuns = useMemo(() => PLAYERS.reduce((acc, p) => acc + p.overall.runs, 0), []);
  const totalWickets = useMemo(() => PLAYERS.reduce((acc, p) => acc + p.overall.wickets, 0), []);
  const trendingPlayers = useMemo(() => PLAYERS.filter(p => p.isTrending || favorites.includes(p.id)), [favorites]);

  const activeTeamInfo = useMemo(() => TEAMS.find(t => t.id === activeTeamId) || TEAMS[0], [activeTeamId]);
  const activeTeamPlayers = useMemo(() => PLAYERS.filter(p => p.team === activeTeamId), [activeTeamId]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-950 dark:text-gray-100 transition-colors duration-200">
      
      {/* Universal Sticky Header */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
      />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* VIEW 1: HOME PANEL */}
        {activeTab === 'home' && (
          <div className="space-y-8 animate-fade-in" id="panel-home">
            
            {/* Elegant Hero Welcome Banner */}
            <div 
              className="p-8 md:p-12 rounded-3xl text-white relative overflow-hidden shadow-lg border border-amber-500/10"
              style={{
                background: 'linear-gradient(135deg, rgba(20, 20, 20, 0.95) 0%, rgba(45, 27, 84, 0.95) 50%, rgba(242, 101, 34, 0.3) 100%)'
              }}
            >
              <div className="absolute top-0 right-0 w-80 h-full opacity-10 font-display font-extrabold text-[180px] pointer-events-none select-none -mr-16 -mt-10">
                IPL
              </div>

              <div className="max-w-xl relative z-10 space-y-4">
                <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 border border-amber-500/20 rounded-md">
                  ⚡ IPL CRICPULSE MASTER ARENA
                </span>
                <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">
                  Easy IPL Player Guide & Live Pulse
                </h2>
                <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                  Search any player from the very first season until today, look at their lifetime score numbers, compare any two players side-by-side, and read simple AI guidelines in plain english.
                </p>
                <div className="pt-2 flex gap-3">
                  <button
                    onClick={() => setActiveTab('players')}
                    className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 transition-colors text-white text-xs font-semibold rounded-xl shadow-md cursor-pointer"
                  >
                    Search All Players
                  </button>
                  <button
                    onClick={() => setActiveTab('stats')}
                    className="px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 transition-colors text-white text-xs font-semibold rounded-xl cursor-pointer"
                  >
                    View Top Leaders
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Summary Cards bar */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm">
                <p className="text-[10px] font-mono text-gray-400 uppercase">Total Players</p>
                <p className="text-2xl font-display font-bold text-gray-800 dark:text-gray-100 mt-1">{PLAYERS.length} Players</p>
                <p className="text-[10px] text-gray-400 mt-1">From all IPL teams</p>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm">
                <p className="text-[10px] font-mono text-gray-400 uppercase">Franchise Teams</p>
                <p className="text-2xl font-display font-bold text-gray-800 dark:text-gray-100 mt-1">{TEAMS.length} Active</p>
                <p className="text-[10px] text-gray-400 mt-1">CSK, RCB, MI, SRH, GT & more...</p>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm">
                <p className="text-[10px] font-mono text-gray-400 uppercase">Total Career Runs</p>
                <p className="text-2xl font-display font-bold text-gray-800 dark:text-gray-100 mt-1">{totalRuns.toLocaleString()}</p>
                <p className="text-[10px] text-gray-400 mt-1">Scores by all listed stars</p>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm">
                <p className="text-[10px] font-mono text-gray-400 uppercase">Total Career Wickets</p>
                <p className="text-2xl font-display font-bold text-gray-800 dark:text-gray-100 mt-1">{totalWickets}</p>
                <p className="text-[10px] text-gray-400 mt-1">Taken by listed bowlers</p>
              </div>
            </div>

            {/* Trending & Favorited Strategists Highlights Segment */}
            <div className="space-y-4 pt-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-display font-bold text-gray-900 dark:text-gray-100 flex items-center">
                    <Star className="w-5 h-5 mr-1.5 text-amber-500 fill-amber-500" /> Featured & Bookmarked Players
                  </h3>
                  <p className="text-xs text-gray-400">FAST ACCESS TO YOUR WATCHED IPL STRATEGISTS</p>
                </div>
                <button
                  onClick={() => setActiveTab('players')}
                  className="text-xs font-semibold text-amber-500 hover:text-amber-600 cursor-pointer"
                >
                  View All Analysts →
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {trendingPlayers.length > 0 ? (
                  trendingPlayers.slice(0, 4).map(player => (
                    <PlayerCard
                      key={player.id}
                      player={player}
                      onViewDetails={setSelectedPlayer}
                      isFavorite={favorites.includes(player.id)}
                      onToggleFavorite={toggleFavoritePlayer}
                    />
                  ))
                ) : (
                  <div className="col-span-1 sm:col-span-2 lg:col-span-4 p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-center">
                    <p className="text-sm text-gray-400">Bookmark players by tapping the star icon on any card.</p>
                  </div>
                )}
              </div>
            </div>

          </div>
        )}

        {/* VIEW 2: PLAYERS CATALOG */}
        {activeTab === 'players' && (
          <div className="space-y-6 animate-fade-in" id="panel-players">
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-gray-100 flex items-center">
                  <span className="w-3.5 h-3.5 bg-amber-500 rounded-md mr-2" /> Search All IPL Players
                </h2>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">EVERY PLAYER WHO PLAYED FROM SEASON 1 UNTIL NOW</p>
              </div>

              {/* Dynamic Season quick stat selector */}
              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono text-gray-400 uppercase text-[11px]">IPL Season Stats:</span>
                <div className="flex rounded-lg overflow-hidden border border-gray-100 dark:border-gray-800">
                  {[2023, 2024, 2025].map(year => (
                    <button
                      key={year}
                      onClick={() => setSelectedSeason(year)}
                      className={`px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                        selectedSeason === year
                          ? 'bg-amber-500 text-white'
                          : 'bg-white dark:bg-gray-900 text-gray-500'
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Filter control dashboard */}
            <div className="p-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
              
              {/* Text Search Input */}
              <div className="relative w-full md:max-w-xs">
                <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  id="catalog-search-input"
                  type="text"
                  placeholder="Type player name, team or role..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 text-sm rounded-xl bg-gray-50 dark:bg-gray-950 border border-gray-100 dark:border-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500/15"
                />
              </div>

              {/* Advanced select filters split */}
              <div className="flex flex-wrap md:flex-nowrap gap-3 items-center w-full md:w-auto">
                <div className="flex items-center space-x-1 w-full sm:w-auto">
                  <span className="text-[10px] font-mono text-gray-400 uppercase">TEAM:</span>
                  <select
                    id="catalog-team-filter"
                    value={teamFilter}
                    onChange={(e) => setTeamFilter(e.target.value)}
                    className="p-2 py-1.5 rounded-lg text-xs font-semibold bg-gray-50 dark:bg-gray-950 border border-gray-100 dark:border-gray-800 text-gray-700 dark:text-gray-300 cursor-pointer"
                  >
                    <option value="ALL">All Crews/Teams</option>
                    {TEAMS.map(team => (
                      <option key={team.id} value={team.id}>{team.id} - {team.name}</option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center space-x-1 w-full sm:w-auto">
                  <span className="text-[10px] font-mono text-gray-400 uppercase">ROLE:</span>
                  <select
                    id="catalog-role-filter"
                    value={roleFilter}
                    onChange={(e) => setRoleFilter(e.target.value)}
                    className="p-2 py-1.5 rounded-lg text-xs font-semibold bg-gray-50 dark:bg-gray-950 border border-gray-100 dark:border-gray-800 text-gray-700 dark:text-gray-300 cursor-pointer"
                  >
                    <option value="ALL">All Roles</option>
                    <option value="Batsman">Batsman</option>
                    <option value="Bowler">Bowler</option>
                    <option value="All-Rounder">All-Rounder</option>
                    <option value="Wicketkeeper">Wicketkeeper</option>
                  </select>
                </div>

                {/* Reset button */}
                {(searchQuery || teamFilter !== 'ALL' || roleFilter !== 'ALL') && (
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setTeamFilter('ALL');
                      setRoleFilter('ALL');
                    }}
                    className="text-xs font-bold text-amber-500 hover:text-amber-600 py-1.5 px-3 rounded-lg border border-amber-500/20 bg-amber-500/5 cursor-pointer"
                  >
                    Reset Search
                  </button>
                )}
              </div>
            </div>

            {/* Unified Catalog Grid View */}
            {filteredPlayers.length > 0 ? (
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-2 border-b border-gray-150 dark:border-gray-900">
                  <div>
                    <h3 className="font-display font-extrabold text-base text-gray-900 dark:text-gray-100">
                      All IPL Players
                    </h3>
                    <p className="text-xs text-gray-400">All registered franchise stars up to 2025 season</p>
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-extrabold border border-amber-500/20 uppercase">
                    {filteredPlayers.length} Players Listed
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredPlayers.map(player => (
                    <PlayerCard
                      key={player.id}
                      player={player}
                      onViewDetails={setSelectedPlayer}
                      isFavorite={favorites.includes(player.id)}
                      onToggleFavorite={toggleFavoritePlayer}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="col-span-1 sm:col-span-2 lg:col-span-4 p-16 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-center">
                <p className="text-sm text-gray-400">No matching IPL player in database. Please check your spelling or spelling of team names!</p>
              </div>
            )}

          </div>
        )}

        {/* VIEW 3: COMPARE PLAYERS */}
        {activeTab === 'compare' && (
          <div id="panel-compare" className="animate-fade-in bg-white dark:bg-gray-950 rounded-3xl p-2 border border-gray-100 dark:border-gray-800 shadow-sm">
            <ComparePanel />
          </div>
        )}

        {/* VIEW 4: FRANCHISE TEAMS */}
        {activeTab === 'teams' && (
          <div className="space-y-8 animate-fade-in" id="panel-teams">
            
            {/* Horizontal Team Ribbon Selectors */}
            <div className="flex overflow-x-auto space-x-2 py-2 scrollbar-none">
              {TEAMS.map(team => {
                const isActive = team.id === activeTeamId;
                return (
                  <button
                    key={team.id}
                    onClick={() => setActiveTeamId(team.id)}
                    className={`flex-none inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-xl border z-10 font-display font-medium text-xs transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-amber-500 text-white border-amber-500'
                        : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border-gray-100 dark:border-gray-800 hover:border-gray-200'
                    }`}
                  >
                    <span>{team.logoEmoji}</span>
                    <span>{team.id}</span>
                  </button>
                );
              })}
            </div>

            {/* Team Dossier Hero */}
            <div 
              className="p-6 md:p-8 rounded-3xl text-white relative overflow-hidden shadow-md flex flex-col md:flex-row justify-between items-start md:items-center"
              style={{
                background: `linear-gradient(135deg, ${activeTeamInfo.color} 0%, rgba(20,20,20,0.95) 100%)`
              }}
            >
              <div className="absolute top-0 right-0 w-64 h-full opacity-10 font-display font-extrabold text-[120px] select-none pointer-events-none -mr-8 -mt-8">
                {activeTeamInfo.id}
              </div>

              <div className="space-y-3 relative z-10">
                <span className="text-[10px] font-mono tracking-wider font-semibold uppercase bg-white/10 px-3 py-1 border border-white/20 rounded-md">
                  ESTABLISHED {activeTeamInfo.established}
                </span>
                <h3 className="text-2xl md:text-4xl font-display font-extrabold">{activeTeamInfo.fullName}</h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-3 text-xs md:text-sm">
                  <div>
                    <p className="text-[10px] text-white/70 font-mono">CAPTAIN</p>
                    <p className="font-bold">{activeTeamInfo.captain}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-white/70 font-mono">HEAD COACH</p>
                    <p className="font-bold">{activeTeamInfo.coach}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-white/70 font-mono">CHAMPIONSHIPS</p>
                    <p className="font-bold">
                      {activeTeamInfo.championships.length > 0 
                        ? activeTeamInfo.championships.join(', ') 
                        : 'No trophies yet'}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] text-white/70 font-mono">HOME GROUND</p>
                    <p className="font-bold truncate max-w-[150px]" title={activeTeamInfo.homeGround}>
                      {activeTeamInfo.homeGround.split(',')[0]}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Roster section */}
            <div className="space-y-4">
              <div>
                <h4 className="font-display font-bold text-gray-900 dark:text-gray-100 flex items-center">
                  <Users className="w-5 h-5 mr-1.5 text-amber-500" /> Franchise Squad Roster
                </h4>
                <p className="text-xs text-gray-400">PLAYERS SIGNED WITHIN THE STABLE</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {activeTeamPlayers.length > 0 ? (
                  activeTeamPlayers.map(player => (
                    <PlayerCard
                      key={player.id}
                      player={player}
                      onViewDetails={setSelectedPlayer}
                      isFavorite={favorites.includes(player.id)}
                      onToggleFavorite={toggleFavoritePlayer}
                    />
                  ))
                ) : (
                  <div className="col-span-1 sm:col-span-2 lg:col-span-4 p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-center text-gray-400">
                    No active players signups shown for this team right now.
                  </div>
                )}
              </div>
            </div>

          </div>
        )}

        {/* VIEW 5: STATS DASHBOARD */}
        {activeTab === 'stats' && (
          <div id="panel-stats" className="animate-fade-in bg-white dark:bg-gray-950 rounded-3xl p-2 border border-gray-100 dark:border-gray-800 shadow-sm">
            <OverallStatsDashboard />
          </div>
        )}

        {/* VIEW 6: GOOGLE IPL ALMANAC */}
        {activeTab === 'google-almanac' && (
          <div id="panel-almanac" className="animate-fade-in">
            <GoogleIPLAlmanac />
          </div>
        )}

      </main>

      {/* Persistent sliding player details drawer modal */}
      {selectedPlayer && (
        <PlayerDetailsModal 
          player={selectedPlayer} 
          onClose={() => setSelectedPlayer(null)} 
        />
      )}

      {/* Simple footer */}
      <footer className="mt-16 border-t border-gray-100 dark:border-gray-900 bg-white dark:bg-gray-950/60 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-2 text-xs text-gray-400 font-mono">
          <p>© 2026 IPL Player Info directory. Made in simple English.</p>
          <p>Powered by easy Gemini AI helpers.</p>
        </div>
      </footer>

    </div>
  );
}
