export interface SeasonStats {
  season: number;
  matches: number;
  runs: number;
  wickets: number;
  strikeRate: number; // For batsmen
  economy: number;    // For bowlers
  average: number;
  highestScore: number;
  bestBowling: string;
  ballsFaced?: number;
  oversBowled?: number;
}

export interface Player {
  id: string;
  name: string;
  team: string; // ID of the team, e.g. 'RCB'
  role: 'Batsman' | 'Bowler' | 'All-Rounder' | 'Wicketkeeper';
  age: number;
  nationality: string;
  battingStyle: string;
  bowlingStyle: string;
  image?: string;
  birthplace: string;
  debutYear: number;
  isTrending?: boolean;
  overall: {
    matches: number;
    runs: number;
    wickets: number;
    strikeRate: number;
    economy: number;
    average: number;
    highestScore: number;
    bestBowling: string;
    catches: number;
  };
  seasonStats: SeasonStats[];
}

export interface Team {
  id: string; // e.g., 'CSK'
  name: string;
  fullName: string;
  color: string; // Primary brand hex or name
  accentColor: string; // Secondary brand color
  logoEmoji: string; // Representing emblem creatively with clean emoji/vector
  homeGround: string;
  championships: number[]; // Seasons won, e.g., [2010, 2011, 2018, 2021, 2023]
  captain: string;
  coach: string;
  established: number;
}

export interface IPLMatch {
  id: string;
  team1: string; // Team ID
  team2: string; // Team ID
  date: string;
  time: string;
  venue: string;
  status: 'upcoming' | 'live' | 'completed';
  liveScore?: {
    team1Runs: number;
    team1Wickets: number;
    team1Overs: number;
    team2Runs: number;
    team2Wickets: number;
    team2Overs: number;
    target?: number;
    currentInnings: 1 | 2;
    ballsRemaining?: number;
  };
  result?: string;
}

export interface AIInsight {
  playerId: string;
  analysis: string;
  strengths: string[];
  weaknesses: string[];
  recommendation: string;
}

export interface AIComparison {
  player1Id: string;
  player2Id: string;
  comparisonText: string;
  metricAnalysis: { metric: string; advantage: string; explanation: string }[];
}
