import { Star, Eye, Shield, Award } from 'lucide-react';
import { Player } from '../types';
import { getTeamColor, getTeamEmoji, getTeamName, formatStat } from '../utils';

interface PlayerCardProps {
  player: Player;
  onViewDetails: (player: Player) => void;
  isFavorite: boolean;
  onToggleFavorite: (playerId: string) => void;
}

export default function PlayerCard({ player, onViewDetails, isFavorite, onToggleFavorite }: PlayerCardProps) {
  const teamColor = getTeamColor(player.team);
  const teamEmoji = getTeamEmoji(player.team);
  const isBowler = player.role === 'Bowler';
  const isAllRounder = player.role === 'All-Rounder';
  const isWK = player.role === 'Wicketkeeper';

  return (
    <div
      className="group bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-lg dark:hover:shadow-black/20 hover:shadow-gray-100 transition-all duration-200 overflow-hidden relative flex flex-col justify-between"
      id={`player-card-${player.id}`}
    >
      {/* Team Ribbon Tag & Favorite Badge */}
      <div className="absolute top-3 left-3 z-10 flex space-x-1.5">
        <span
          className="flex items-center text-[10px] font-bold px-2.5 py-1 rounded bg-white/90 dark:bg-gray-950/90 shadow-sm border"
          style={{ borderColor: `${teamColor}40`, color: teamColor }}
        >
          {teamEmoji} <span className="ml-1 font-mono">{player.team}</span>
        </span>
        {player.isTrending && (
          <span className="text-[9px] font-bold tracking-wider uppercase px-2 py-1 rounded-sm bg-amber-500 text-white flex items-center shadow-sm">
            ⚡ TRENDING
          </span>
        )}
      </div>

      <button
        id={`fav-${player.id}`}
        onClick={(e) => {
          e.stopPropagation();
          onToggleFavorite(player.id);
        }}
        className={`absolute top-3 right-3 z-10 p-1.5 rounded-lg border bg-white/90 dark:bg-gray-950/90 transition-all hover:scale-105 cursor-pointer ${
          isFavorite
            ? 'text-amber-500 border-amber-500/20 bg-amber-500/5'
            : 'text-gray-400 dark:text-gray-500 hover:text-gray-600 border-gray-100 dark:border-gray-800'
        }`}
        title={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      >
        <Star className={`w-4 h-4 ${isFavorite ? 'fill-amber-500' : ''}`} />
      </button>

      {/* Card Header & Avatar Area */}
      <div className="px-5 pt-8 pb-4 relative overflow-hidden flex flex-col items-center border-b border-gray-50 dark:border-gray-900">
        {/* Subtle decorative team background jersey vector bubble */}
        <div
          className="absolute -top-12 -right-12 w-28 h-28 rounded-full opacity-10 transition-transform group-hover:scale-110 pointer-events-none"
          style={{ background: teamColor }}
        />

        {/* Visual Avatar styled like an official team jersey layout */}
        <div
          className="relative w-20 h-20 rounded-full flex items-center justify-center text-white font-display font-extrabold text-2xl shadow-inner border-4 border-white dark:border-gray-950 capitalize overflow-hidden mb-3.5"
          style={{
            background: `linear-gradient(135deg, ${teamColor} 0%, rgba(0,0,0,0.85) 100%)`
          }}
        >
          {/* Subtle horizontal stripe on jersey */}
          <div className="absolute top-2 w-full h-1 bg-white/20" />
          <div className="absolute bottom-2 w-full h-2 bg-yellow-400/20" />
          {player.name ? player.name.split(' ').map(n => n[0]).join('') : 'P'}
        </div>

        {/* Player Name and Basic info */}
        <div className="text-center">
          <h3 className="font-display font-bold text-gray-900 dark:text-gray-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
            {player.name}
          </h3>
          
          {/* Role badge */}
          <div className="mt-1.5 flex justify-center">
            <span className="inline-flex items-center text-[10px] tracking-wide font-medium px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
              <Shield className="w-3 h-3 mr-1 text-amber-500" />
              {player.role}
            </span>
          </div>
        </div>
      </div>

      {/* Dynamic Key Performance Indicators (KPIs) Section */}
      <div className="px-5 py-4 bg-gray-50/50 dark:bg-gray-900/10 grid grid-cols-2 gap-3 border-b border-gray-50 dark:border-gray-900">
        <div>
          <p className="text-[10px] font-mono font-medium text-gray-400 uppercase">Total Runs</p>
          <p className="text-sm font-display font-bold text-gray-800 dark:text-gray-200">
            {player.overall.runs}
          </p>
        </div>
        <div>
          <p className="text-[10px] font-mono font-medium text-gray-400 uppercase">Total Wickets</p>
          <p className="text-sm font-display font-bold text-gray-800 dark:text-gray-200">
            {player.overall.wickets}
          </p>
        </div>
        <div>
          <p className="text-[10px] font-mono font-medium text-gray-400 uppercase">Hitting SR / Econ</p>
          <p className="text-sm font-display font-semibold text-gray-700 dark:text-gray-300">
            {isBowler ? formatStat(player.overall.economy) : formatStat(player.overall.strikeRate)}
          </p>
        </div>
        <div>
          <p className="text-[10px] font-mono font-medium text-gray-400 uppercase">Average / Matches</p>
          <p className="text-sm font-display font-semibold text-gray-700 dark:text-gray-300">
            {formatStat(player.overall.average)} <span className="text-[10px] font-normal text-gray-400">({player.overall.matches}m)</span>
          </p>
        </div>
      </div>

      {/* Play Controls Footer */}
      <div className="p-4 bg-white dark:bg-gray-900 flex justify-between items-center gap-2">
        <button
          id={`view-detail-${player.id}`}
          onClick={() => onViewDetails(player)}
          className="flex-1 inline-flex items-center justify-center px-3 py-1.5 border border-amber-500 bg-amber-500 hover:bg-amber-600 dark:border-amber-600 dark:bg-amber-600 text-white rounded-lg text-xs font-semibold cursor-pointer transition-colors shadow-sm gap-1.5"
        >
          <Eye className="w-3.5 h-3.5" /> Full Bios and Stats
        </button>
      </div>
    </div>
  );
}
