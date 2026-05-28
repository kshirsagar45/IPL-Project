import { TEAMS } from './data/mockData';

export function getTeamColor(teamId: string): string {
  const team = TEAMS.find(t => t.id === teamId);
  return team ? team.color : '#4B5563'; // fallback gray
}

export function getTeamAccent(teamId: string): string {
  const team = TEAMS.find(t => t.id === teamId);
  return team ? team.accentColor : '#9CA3AF'; // fallback lighter gray
}

export function getTeamEmoji(teamId: string): string {
  const team = TEAMS.find(t => t.id === teamId);
  return team ? team.logoEmoji : '🏏';
}

export function getTeamName(teamId: string): string {
  const team = TEAMS.find(t => t.id === teamId);
  return team ? team.name : teamId;
}

// Convert numbers with decimals safely
export function formatStat(value: number | string | undefined | null): string {
  if (value === undefined || value === null) return 'N/A';
  if (typeof value === 'number') {
    return value % 1 === 0 ? value.toString() : value.toFixed(2);
  }
  return value;
}

export interface AdvancedStats {
  fifties: number;
  hundreds: number;
  fiveWickets: number;
  fourWickets: number;
  sixes: number;
  fours: number;
}

export function getPlayerAdvancedStats(playerId: string, role: string, runs: number, wickets: number): AdvancedStats {
  const data: Record<string, AdvancedStats> = {
    'virat-kohli': { fifties: 55, hundreds: 8, fiveWickets: 0, fourWickets: 0, sixes: 272, fours: 731 },
    'ms-dhoni': { fifties: 28, hundreds: 0, fiveWickets: 0, fourWickets: 0, sixes: 252, fours: 363 },
    'rohit-sharma': { fifties: 43, hundreds: 2, fiveWickets: 0, fourWickets: 0, sixes: 280, fours: 596 },
    'sachin-tendulkar': { fifties: 13, hundreds: 1, fiveWickets: 0, fourWickets: 0, sixes: 29, fours: 295 },
    'kl-rahul': { fifties: 37, hundreds: 4, fiveWickets: 0, fourWickets: 0, sixes: 173, fours: 395 },
    'andre-russell': { fifties: 11, hundreds: 0, fiveWickets: 1, fourWickets: 2, sixes: 209, fours: 154 },
    'shikhar-dhawan': { fifties: 51, hundreds: 2, fiveWickets: 0, fourWickets: 0, sixes: 148, fours: 768 },
    'kieron-pollard': { fifties: 16, hundreds: 0, fiveWickets: 0, fourWickets: 1, sixes: 223, fours: 218 },
    'dinesh-karthik': { fifties: 22, hundreds: 0, fiveWickets: 0, fourWickets: 0, sixes: 161, fours: 466 },
    'glenn-maxwell': { fifties: 18, hundreds: 0, fiveWickets: 0, fourWickets: 0, sixes: 158, fours: 242 },
    'ruturaj-gaikwad': { fifties: 18, hundreds: 2, fiveWickets: 0, fourWickets: 0, sixes: 92, fours: 228 },
    'bhuvneshwar-kumar': { fifties: 0, hundreds: 0, fiveWickets: 2, fourWickets: 4, sixes: 8, fours: 22 },
    'yuvraj-singh': { fifties: 13, hundreds: 0, fiveWickets: 0, fourWickets: 2, sixes: 149, fours: 217 },
    'sanju-samson': { fifties: 25, hundreds: 3, fiveWickets: 0, fourWickets: 0, sixes: 206, fours: 337 },
    'shane-watson': { fifties: 21, hundreds: 4, fiveWickets: 0, fourWickets: 1, sixes: 190, fours: 375 },
    'suryakumar-yadav': { fifties: 24, hundreds: 2, fiveWickets: 0, fourWickets: 0, sixes: 132, fours: 370 },
    'r-ashwin': { fifties: 1, hundreds: 0, fiveWickets: 0, fourWickets: 1, sixes: 18, fours: 56 },
    'trent-boult': { fifties: 0, hundreds: 0, fiveWickets: 0, fourWickets: 1, sixes: 1, fours: 4 },
    'dwayne-bravo': { fifties: 5, hundreds: 0, fiveWickets: 0, fourWickets: 2, sixes: 66, fours: 120 },
    'jasprit-bumrah': { fifties: 0, hundreds: 0, fiveWickets: 2, fourWickets: 3, sixes: 1, fours: 3 },
  };

  const entry = data[playerId];
  if (entry) return entry;

  const isBat = role === 'Batsman' || role === 'Wicketkeeper' || role === 'All-Rounder';
  const isBowl = role === 'Bowler' || role === 'All-Rounder';

  const fifties = isBat ? Math.max(0, Math.round(runs / 150) + (runs > 1000 ? 2 : 0)) : 0;
  const hundreds = isBat ? Math.max(0, Math.floor(runs / 1500)) : 0;
  const fiveWickets = isBowl ? Math.max(0, Math.floor(wickets / 60)) : 0;
  const fourWickets = isBowl ? Math.max(0, Math.floor(wickets / 25)) : 0;
  const sixes = isBat ? Math.max(0, Math.round(runs / 18)) : 0;
  const fours = isBat ? Math.max(0, Math.round(runs / 8)) : 0;

  return { fifties, hundreds, fiveWickets, fourWickets, sixes, fours };
}
