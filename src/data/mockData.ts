import { Player, Team, IPLMatch } from '../types';

export const TEAMS: Team[] = [
  {
    id: 'CSK',
    name: 'Chennai Super Kings',
    fullName: 'Chennai Super Kings',
    color: '#F9CD05',
    accentColor: '#005CA5',
    logoEmoji: '🦁',
    homeGround: 'M. A. Chidambaram Stadium, Chennai',
    championships: [2010, 2011, 2018, 2021, 2023],
    captain: 'Ruturaj Gaikwad',
    coach: 'Stephen Fleming',
    established: 2008
  },
  {
    id: 'RCB',
    name: 'Royal Challengers Bengaluru',
    fullName: 'Royal Challengers Bengaluru',
    color: '#8A151B',
    accentColor: '#1C1C1C',
    logoEmoji: '🐆',
    homeGround: 'M. Chinnaswamy Stadium, Bengaluru',
    championships: [],
    captain: 'Faf du Plessis',
    coach: 'Andy Flower',
    established: 2008
  },
  {
    id: 'MI',
    name: 'Mumbai Indians',
    fullName: 'Mumbai Indians',
    color: '#004BA0',
    accentColor: '#D1AB3E',
    logoEmoji: '🎡',
    homeGround: 'Wankhede Stadium, Mumbai',
    championships: [2013, 2015, 2017, 2019, 2020],
    captain: 'Hardik Pandya',
    coach: 'Mahela Jayawardene',
    established: 2008
  },
  {
    id: 'KKR',
    name: 'Kolkata Knight Riders',
    fullName: 'Kolkata Knight Riders',
    color: '#2E0854',
    accentColor: '#FFD700',
    logoEmoji: '🔮',
    homeGround: 'Eden Gardens, Kolkata',
    championships: [2012, 2014, 2024],
    captain: 'Shreyas Iyer',
    coach: 'Chandrakant Pandit',
    established: 2008
  },
  {
    id: 'RR',
    name: 'Rajasthan Royals',
    fullName: 'Rajasthan Royals',
    color: '#254AA5',
    accentColor: '#EA1B83',
    logoEmoji: '👑',
    homeGround: 'Sawai Mansingh Stadium, Jaipur',
    championships: [2008],
    captain: 'Sanju Samson',
    coach: 'Rahul Dravid',
    established: 2008
  },
  {
    id: 'SRH',
    name: 'Sunrisers Hyderabad',
    fullName: 'Sunrisers Hyderabad',
    color: '#F26522',
    accentColor: '#231F20',
    logoEmoji: '🦅',
    homeGround: 'Rajiv Gandhi International Cricket Stadium, Hyderabad',
    championships: [2016],
    captain: 'Pat Cummins',
    coach: 'Daniel Vettori',
    established: 2012
  },
  {
    id: 'GT',
    name: 'Gujarat Titans',
    fullName: 'Gujarat Titans',
    color: '#1B2133',
    accentColor: '#E1B85D',
    logoEmoji: '⚡',
    homeGround: 'Narendra Modi Stadium, Ahmedabad',
    championships: [2022],
    captain: 'Shubman Gill',
    coach: 'Ashish Nehra',
    established: 2021
  },
  {
    id: 'DC',
    name: 'Delhi Capitals',
    fullName: 'Delhi Capitals',
    color: '#0057A3',
    accentColor: '#E31B23',
    logoEmoji: '🏛️',
    homeGround: 'Arun Jaitley Stadium, New Delhi',
    championships: [],
    captain: 'Rishabh Pant',
    coach: 'Hemang Badani',
    established: 2008
  },
  {
    id: 'LSG',
    name: 'Lucknow Super Giants',
    fullName: 'Lucknow Super Giants',
    color: '#005CA5',
    accentColor: '#EE334E',
    logoEmoji: '🏹',
    homeGround: 'BRSABV Ekana Cricket Stadium, Lucknow',
    championships: [],
    captain: 'KL Rahul',
    coach: 'Justin Langer',
    established: 2021
  },
  {
    id: 'PBKS',
    name: 'Punjab Kings',
    fullName: 'Punjab Kings',
    color: '#ED1F24',
    accentColor: '#D1A310',
    logoEmoji: '🦁',
    homeGround: 'Maharaja Yadavindra Singh International Cricket Stadium, Mullanpur',
    championships: [],
    captain: 'Shikhar Dhawan',
    coach: 'Ricky Ponting',
    established: 2008
  }
];

const BASE_PLAYERS: Player[] = [
  {
    id: 'virat-kohli',
    name: 'Virat Kohli',
    team: 'RCB',
    role: 'Batsman',
    age: 37,
    nationality: 'Indian',
    battingStyle: 'Right-handed Batsman',
    bowlingStyle: 'Right-arm Medium',
    birthplace: 'Delhi',
    debutYear: 2008,
    isTrending: true,
    overall: {
      matches: 252,
      runs: 8004,
      wickets: 4,
      strikeRate: 131.97,
      economy: 8.80,
      average: 38.66,
      highestScore: 113,
      bestBowling: '2/25',
      catches: 112
    },
    seasonStats: [
      { season: 2025, matches: 14, runs: 620, wickets: 0, strikeRate: 148.5, economy: 0, average: 44.28, highestScore: 101, bestBowling: '0/0', ballsFaced: 418 },
      { season: 2024, matches: 15, runs: 741, wickets: 0, strikeRate: 154.7, economy: 0, average: 61.75, highestScore: 113, bestBowling: '0/0', ballsFaced: 479 },
      { season: 2023, matches: 14, runs: 639, wickets: 0, strikeRate: 139.8, economy: 0, average: 53.25, highestScore: 101, bestBowling: '0/0', ballsFaced: 457 },
      { season: 2022, matches: 16, runs: 341, wickets: 0, strikeRate: 115.9, economy: 0, average: 22.73, highestScore: 73, bestBowling: '0/0', ballsFaced: 294 },
      { season: 2021, matches: 15, runs: 405, wickets: 0, strikeRate: 119.4, economy: 0, average: 28.92, highestScore: 72, bestBowling: '0/0', ballsFaced: 339 }
    ]
  },
  {
    id: 'ms-dhoni',
    name: 'MS Dhoni',
    team: 'CSK',
    role: 'Wicketkeeper',
    age: 44,
    nationality: 'Indian',
    battingStyle: 'Right-handed Batsman',
    bowlingStyle: 'Right-arm Medium',
    birthplace: 'Ranchi, Jharkhand',
    debutYear: 2008,
    isTrending: true,
    overall: {
      matches: 264,
      runs: 5218,
      wickets: 0,
      strikeRate: 137.53,
      economy: 0.00,
      average: 39.12,
      highestScore: 84,
      bestBowling: '0/0',
      catches: 151
    },
    seasonStats: [
      { season: 2025, matches: 14, runs: 185, wickets: 0, strikeRate: 210.2, economy: 0, average: 46.25, highestScore: 37, bestBowling: '0/0', ballsFaced: 88 },
      { season: 2024, matches: 14, runs: 161, wickets: 0, strikeRate: 220.5, economy: 0, average: 53.66, highestScore: 37, bestBowling: '0/0', ballsFaced: 73 },
      { season: 2023, matches: 16, runs: 104, wickets: 0, strikeRate: 182.4, economy: 0, average: 26.00, highestScore: 32, bestBowling: '0/0', ballsFaced: 57 },
      { season: 2022, matches: 14, runs: 232, wickets: 0, strikeRate: 123.4, economy: 0, average: 33.14, highestScore: 50, bestBowling: '0/0', ballsFaced: 188 },
      { season: 2021, matches: 16, runs: 114, wickets: 0, strikeRate: 106.5, economy: 0, average: 16.28, highestScore: 18, bestBowling: '0/0', ballsFaced: 107 }
    ]
  },
  {
    id: 'rohit-sharma',
    name: 'Rohit Sharma',
    team: 'MI',
    role: 'Batsman',
    age: 39,
    nationality: 'Indian',
    battingStyle: 'Right-handed Batsman',
    bowlingStyle: 'Right-arm Offbreak',
    birthplace: 'Nagpur, Maharashtra',
    debutYear: 2008,
    isTrending: true,
    overall: {
      matches: 257,
      runs: 6628,
      wickets: 15,
      strikeRate: 131.14,
      economy: 8.02,
      average: 29.72,
      highestScore: 109,
      bestBowling: '4/6',
      catches: 101
    },
    seasonStats: [
      { season: 2025, matches: 14, runs: 410, wickets: 0, strikeRate: 142.5, economy: 0, average: 31.54, highestScore: 105, bestBowling: '0/0' },
      { season: 2024, matches: 14, runs: 417, wickets: 0, strikeRate: 150.0, economy: 0, average: 32.08, highestScore: 105, bestBowling: '0/0' },
      { season: 2023, matches: 16, runs: 332, wickets: 0, strikeRate: 132.8, economy: 0, average: 20.75, highestScore: 65, bestBowling: '0/0' },
      { season: 2022, matches: 14, runs: 268, wickets: 0, strikeRate: 120.2, economy: 0, average: 19.14, highestScore: 48, bestBowling: '0/0' },
      { season: 2021, matches: 13, runs: 381, wickets: 0, strikeRate: 127.4, economy: 0, average: 29.30, highestScore: 63, bestBowling: '0/0' }
    ]
  },
  {
    id: 'sachin-tendulkar',
    name: 'Sachin Tendulkar',
    team: 'MI',
    role: 'Batsman',
    age: 53,
    nationality: 'Indian',
    battingStyle: 'Right-handed Batsman',
    bowlingStyle: 'Right-arm Offbreak',
    birthplace: 'Mumbai, Maharashtra',
    debutYear: 2008,
    isTrending: false,
    overall: {
      matches: 78,
      runs: 2334,
      wickets: 0,
      strikeRate: 119.82,
      economy: 8.20,
      average: 34.84,
      highestScore: 100,
      bestBowling: '0/0',
      catches: 23
    },
    seasonStats: [
      { season: 2013, matches: 14, runs: 287, wickets: 0, strikeRate: 124.2, economy: 0, average: 22.07, highestScore: 54, bestBowling: '0/0' },
      { season: 2012, matches: 13, runs: 324, wickets: 0, strikeRate: 114.4, economy: 0, average: 29.45, highestScore: 74, bestBowling: '0/0' },
      { season: 2011, matches: 16, runs: 553, wickets: 0, strikeRate: 113.3, economy: 0, average: 42.53, highestScore: 100, bestBowling: '0/0' },
      { season: 2010, matches: 15, runs: 618, wickets: 0, strikeRate: 132.6, economy: 0, average: 47.53, highestScore: 89, bestBowling: '0/0' },
      { season: 2009, matches: 13, runs: 364, wickets: 0, strikeRate: 120.1, economy: 0, average: 30.33, highestScore: 68, bestBowling: '0/0' }
    ]
  },
  {
    id: 'suresh-raina',
    name: 'Suresh Raina',
    team: 'CSK',
    role: 'Batsman',
    age: 39,
    nationality: 'Indian',
    battingStyle: 'Left-handed Batsman',
    bowlingStyle: 'Right-arm Offbreak',
    birthplace: 'Muradnagar, Uttar Pradesh',
    debutYear: 2008,
    isTrending: false,
    overall: {
      matches: 205,
      runs: 5528,
      wickets: 25,
      strikeRate: 136.76,
      economy: 7.39,
      average: 32.51,
      highestScore: 100,
      bestBowling: '2/0',
      catches: 109
    },
    seasonStats: [
      { season: 2021, matches: 12, runs: 160, wickets: 0, strikeRate: 125.0, economy: 0, average: 17.77, highestScore: 54, bestBowling: '0/0' },
      { season: 2019, matches: 17, runs: 383, wickets: 0, strikeRate: 121.9, economy: 0, average: 23.93, highestScore: 59, bestBowling: '0/0' },
      { season: 2018, matches: 15, runs: 445, wickets: 0, strikeRate: 132.4, economy: 0, average: 37.08, highestScore: 75, bestBowling: '0/0' },
      { season: 2017, matches: 14, runs: 442, wickets: 0, strikeRate: 143.9, economy: 0, average: 40.18, highestScore: 84, bestBowling: '0/0' },
      { season: 2016, matches: 15, runs: 399, wickets: 0, strikeRate: 127.8, economy: 0, average: 28.50, highestScore: 75, bestBowling: '0/0' }
    ]
  },
  {
    id: 'gautam-gambhir',
    name: 'Gautam Gambhir',
    team: 'KKR',
    role: 'Batsman',
    age: 44,
    nationality: 'Indian',
    battingStyle: 'Left-handed Batsman',
    bowlingStyle: 'Legbreak',
    birthplace: 'New Delhi',
    debutYear: 2008,
    isTrending: false,
    overall: {
      matches: 154,
      runs: 4217,
      wickets: 0,
      strikeRate: 123.88,
      economy: 0,
      average: 31.23,
      highestScore: 93,
      bestBowling: '0/0',
      catches: 44
    },
    seasonStats: [
      { season: 2018, matches: 6, runs: 85, wickets: 0, strikeRate: 96.5, economy: 0, average: 17.00, highestScore: 55, bestBowling: '0/0' },
      { season: 2017, matches: 16, runs: 498, wickets: 0, strikeRate: 128.0, economy: 0, average: 41.50, highestScore: 76, bestBowling: '0/0' },
      { season: 2016, matches: 15, runs: 501, wickets: 0, strikeRate: 121.9, economy: 0, average: 38.53, highestScore: 90, bestBowling: '0/0' },
      { season: 2015, matches: 13, runs: 327, wickets: 0, strikeRate: 117.6, economy: 0, average: 25.15, highestScore: 60, bestBowling: '0/0' },
      { season: 2014, matches: 16, runs: 355, wickets: 0, strikeRate: 114.5, economy: 0, average: 22.18, highestScore: 69, bestBowling: '0/0' }
    ]
  },
  {
    id: 'jasprit-bumrah',
    name: 'Jasprit Bumrah',
    team: 'MI',
    role: 'Bowler',
    age: 32,
    nationality: 'Indian',
    battingStyle: 'Right-handed Batsman',
    bowlingStyle: 'Right-arm Fast',
    birthplace: 'Ahmedabad, Gujarat',
    debutYear: 2013,
    isTrending: true,
    overall: {
      matches: 135,
      runs: 85,
      wickets: 165,
      strikeRate: 12.5,
      economy: 7.30,
      average: 22.51,
      highestScore: 16,
      bestBowling: '5/10',
      catches: 21
    },
    seasonStats: [
      { season: 2025, matches: 14, runs: 12, wickets: 22, strikeRate: 146.0, economy: 6.90, average: 17.50, highestScore: 8, bestBowling: '4/14', oversBowled: 56 },
      { season: 2024, matches: 13, runs: 15, wickets: 20, strikeRate: 120.0, economy: 6.48, average: 16.80, highestScore: 11, bestBowling: '5/21', oversBowled: 52 },
      { season: 2023, matches: 0, runs: 0, wickets: 0, strikeRate: 0, economy: 0, average: 0, highestScore: 0, bestBowling: '0/0', oversBowled: 0 },
      { season: 2022, matches: 14, runs: 18, wickets: 15, strikeRate: 112.5, economy: 7.18, average: 25.53, highestScore: 12, bestBowling: '5/10', oversBowled: 53 },
      { season: 2021, matches: 14, runs: 10, wickets: 21, strikeRate: 110.0, economy: 7.45, average: 19.52, highestScore: 9, bestBowling: '3/36', oversBowled: 55 }
    ]
  },
  {
    id: 'shubman-gill',
    name: 'Shubman Gill',
    team: 'GT',
    role: 'Batsman',
    age: 26,
    nationality: 'Indian',
    battingStyle: 'Right-handed Batsman',
    bowlingStyle: 'Right-arm Offbreak',
    birthplace: 'Fazilka, Punjab',
    debutYear: 2018,
    overall: {
      matches: 103,
      runs: 3216,
      wickets: 0,
      strikeRate: 135.24,
      economy: 0.00,
      average: 38.12,
      highestScore: 129,
      bestBowling: '0/0',
      catches: 41
    },
    seasonStats: [
      { season: 2025, matches: 14, runs: 490, wickets: 0, strikeRate: 139.5, economy: 0, average: 37.69, highestScore: 98, bestBowling: '0/0', ballsFaced: 351 },
      { season: 2024, matches: 12, runs: 426, wickets: 0, strikeRate: 147.4, economy: 0, average: 38.72, highestScore: 104, bestBowling: '0/0', ballsFaced: 289 },
      { season: 2023, matches: 17, runs: 890, wickets: 0, strikeRate: 157.8, economy: 0, average: 59.33, highestScore: 129, bestBowling: '0/0', ballsFaced: 564 },
      { season: 2022, matches: 16, runs: 483, wickets: 0, strikeRate: 132.3, economy: 0, average: 34.50, highestScore: 96, bestBowling: '0/0', ballsFaced: 365 },
      { season: 2021, matches: 17, runs: 478, wickets: 0, strikeRate: 118.9, economy: 0, average: 28.11, highestScore: 57, bestBowling: '0/0', ballsFaced: 402 }
    ]
  },
  {
    id: 'ravindra-jadeja',
    name: 'Ravindra Jadeja',
    team: 'CSK',
    role: 'All-Rounder',
    age: 37,
    nationality: 'Indian',
    battingStyle: 'Left-handed Batsman',
    bowlingStyle: 'Slow Left-arm Orthodox',
    birthplace: 'Navagam-Ghed, Gujarat',
    debutYear: 2008,
    overall: {
      matches: 240,
      runs: 2958,
      wickets: 160,
      strikeRate: 129.80,
      economy: 7.62,
      average: 27.38,
      highestScore: 62,
      bestBowling: '5/16',
      catches: 103
    },
    seasonStats: [
      { season: 2025, matches: 14, runs: 280, wickets: 11, strikeRate: 142.1, economy: 7.50, average: 35.00, highestScore: 48, bestBowling: '3/18', ballsFaced: 197, oversBowled: 48 },
      { season: 2024, matches: 14, runs: 267, wickets: 8, strikeRate: 142.7, economy: 7.85, average: 44.50, highestScore: 57, bestBowling: '3/18', ballsFaced: 187, oversBowled: 44 },
      { season: 2023, matches: 16, runs: 190, wickets: 20, strikeRate: 137.6, economy: 7.56, average: 21.11, highestScore: 25, bestBowling: '3/20', ballsFaced: 138, oversBowled: 54 },
      { season: 2022, matches: 10, runs: 116, wickets: 5, strikeRate: 118.3, economy: 7.52, average: 19.33, highestScore: 26, bestBowling: '1/15', ballsFaced: 98, oversBowled: 33 },
      { season: 2021, matches: 16, runs: 227, wickets: 13, strikeRate: 145.5, economy: 7.06, average: 75.66, highestScore: 62, bestBowling: '3/13', ballsFaced: 156, oversBowled: 49 }
    ]
  },
  {
    id: 'hardik-pandya',
    name: 'Hardik Pandya',
    team: 'MI',
    role: 'All-Rounder',
    age: 32,
    nationality: 'Indian',
    battingStyle: 'Right-handed Batsman',
    bowlingStyle: 'Right-arm Fast-medium',
    birthplace: 'Chorasi, Gujarat',
    debutYear: 2015,
    isTrending: true,
    overall: {
      matches: 151,
      runs: 2625,
      wickets: 64,
      strikeRate: 145.20,
      economy: 8.85,
      average: 28.53,
      highestScore: 91,
      bestBowling: '3/17',
      catches: 68
    },
    seasonStats: [
      { season: 2025, matches: 14, runs: 310, wickets: 10, strikeRate: 141.2, economy: 8.90, average: 25.83, highestScore: 62, bestBowling: '2/15' },
      { season: 2024, matches: 14, runs: 216, wickets: 11, strikeRate: 143.0, economy: 10.75, average: 18.00, highestScore: 46, bestBowling: '3/31' },
      { season: 2023, matches: 16, runs: 346, wickets: 3, strikeRate: 136.7, economy: 9.12, average: 31.45, highestScore: 66, bestBowling: '1/10' },
      { season: 2022, matches: 15, runs: 487, wickets: 8, strikeRate: 131.2, economy: 7.27, average: 44.27, highestScore: 87, bestBowling: '3/17' },
      { season: 2021, matches: 12, runs: 127, wickets: 0, strikeRate: 113.3, economy: 0, average: 14.11, highestScore: 40, bestBowling: '0/0' }
    ]
  },
  {
    id: 'yuzvendra-chahal',
    name: 'Yuzvendra Chahal',
    team: 'RR',
    role: 'Bowler',
    age: 35,
    nationality: 'Indian',
    battingStyle: 'Right-handed Batsman',
    bowlingStyle: 'Right-arm Legbreak',
    birthplace: 'Jind, Haryana',
    debutYear: 2013,
    overall: {
      matches: 160,
      runs: 38,
      wickets: 205,
      strikeRate: 10.2,
      economy: 7.84,
      average: 22.45,
      highestScore: 10,
      bestBowling: '5/40',
      catches: 29
    },
    seasonStats: [
      { season: 2025, matches: 14, runs: 2, wickets: 18, strikeRate: 0, economy: 8.10, average: 22.11, highestScore: 2, bestBowling: '3/25', oversBowled: 54 },
      { season: 2024, matches: 15, runs: 2, wickets: 20, strikeRate: 0, economy: 8.84, average: 24.30, highestScore: 2, bestBowling: '3/11', oversBowled: 58 },
      { season: 2023, matches: 14, runs: 0, wickets: 21, strikeRate: 0, economy: 8.17, average: 20.57, highestScore: 0, bestBowling: '4/17', oversBowled: 52 },
      { season: 2022, matches: 17, runs: 5, wickets: 27, strikeRate: 83.3, economy: 7.75, average: 19.51, highestScore: 5, bestBowling: '5/40', oversBowled: 68 },
      { season: 2021, matches: 15, runs: 10, wickets: 18, strikeRate: 90.9, economy: 7.05, average: 20.77, highestScore: 8, bestBowling: '3/11', oversBowled: 53 }
    ]
  },
  {
    id: 'rishabh-pant',
    name: 'Rishabh Pant',
    team: 'DC',
    role: 'Wicketkeeper',
    age: 28,
    nationality: 'Indian',
    battingStyle: 'Left-handed Batsman',
    bowlingStyle: 'N/A',
    birthplace: 'Roorkee, Uttarakhand',
    debutYear: 2016,
    isTrending: true,
    overall: {
      matches: 111,
      runs: 3284,
      wickets: 0,
      strikeRate: 148.97,
      economy: 0.00,
      average: 35.31,
      highestScore: 128,
      bestBowling: '0/0',
      catches: 75
    },
    seasonStats: [
      { season: 2025, matches: 14, runs: 430, wickets: 0, strikeRate: 154.2, economy: 0, average: 39.09, highestScore: 85, bestBowling: '0/0', ballsFaced: 278 },
      { season: 2024, matches: 13, runs: 446, wickets: 0, strikeRate: 155.4, economy: 0, average: 40.54, highestScore: 88, bestBowling: '0/0', ballsFaced: 287 },
      { season: 2023, matches: 0, runs: 0, wickets: 0, strikeRate: 0, economy: 0, average: 0, highestScore: 0, bestBowling: '0/0' },
      { season: 2022, matches: 14, runs: 340, wickets: 0, strikeRate: 151.7, economy: 0, average: 30.90, highestScore: 44, bestBowling: '0/0', ballsFaced: 224 },
      { season: 2021, matches: 16, runs: 419, wickets: 0, strikeRate: 128.5, economy: 0, average: 34.91, highestScore: 58, bestBowling: '0/0', ballsFaced: 326 }
    ]
  },
  {
    id: 'ab-de-villiers',
    name: 'AB de Villiers',
    team: 'RCB',
    role: 'Batsman',
    age: 42,
    nationality: 'South African',
    battingStyle: 'Right-handed Batsman',
    bowlingStyle: 'Right-arm Medium',
    birthplace: 'Bela-Bela, South Africa',
    debutYear: 2008,
    isTrending: false,
    overall: {
      matches: 184,
      runs: 5162,
      wickets: 0,
      strikeRate: 151.68,
      economy: 0,
      average: 39.70,
      highestScore: 133,
      bestBowling: '0/0',
      catches: 101
    },
    seasonStats: [
      { season: 2021, matches: 15, runs: 313, wickets: 0, strikeRate: 148.3, economy: 0, average: 31.30, highestScore: 76, bestBowling: '0/0' },
      { season: 2020, matches: 15, runs: 454, wickets: 0, strikeRate: 158.7, economy: 0, average: 45.40, highestScore: 73, bestBowling: '0/0' },
      { season: 2019, matches: 13, runs: 442, wickets: 0, strikeRate: 154.0, economy: 0, average: 44.20, highestScore: 82, bestBowling: '0/0' },
      { season: 2018, matches: 12, runs: 480, wickets: 0, strikeRate: 174.5, economy: 0, average: 53.33, highestScore: 90, bestBowling: '0/0' },
      { season: 2017, matches: 9, runs: 216, wickets: 0, strikeRate: 132.5, economy: 0, average: 27.00, highestScore: 89, bestBowling: '0/0' }
    ]
  },
  {
    id: 'chris-gayle',
    name: 'Chris Gayle',
    team: 'RCB',
    role: 'Batsman',
    age: 46,
    nationality: 'West Indian',
    battingStyle: 'Left-handed Batsman',
    bowlingStyle: 'Right-arm Offbreak',
    birthplace: 'Kingston, Jamaica',
    debutYear: 2009,
    isTrending: false,
    overall: {
      matches: 142,
      runs: 4965,
      wickets: 18,
      strikeRate: 148.96,
      economy: 8.05,
      average: 39.72,
      highestScore: 175,
      bestBowling: '3/21',
      catches: 30
    },
    seasonStats: [
      { season: 2021, matches: 10, runs: 193, wickets: 0, strikeRate: 125.3, economy: 0, average: 21.44, highestScore: 46, bestBowling: '0/0' },
      { season: 2020, matches: 7, runs: 288, wickets: 0, strikeRate: 137.1, economy: 0, average: 41.14, highestScore: 99, bestBowling: '0/0' },
      { season: 2019, matches: 13, runs: 490, wickets: 0, strikeRate: 153.6, economy: 0, average: 40.83, highestScore: 99, bestBowling: '0/0' },
      { season: 2018, matches: 11, runs: 368, wickets: 0, strikeRate: 146.0, economy: 0, average: 40.88, highestScore: 104, bestBowling: '0/0' },
      { season: 2017, matches: 9, runs: 200, wickets: 0, strikeRate: 122.6, economy: 0, average: 22.22, highestScore: 77, bestBowling: '0/0' }
    ]
  },
  {
    id: 'lasith-malinga',
    name: 'Lasith Malinga',
    team: 'MI',
    role: 'Bowler',
    age: 42,
    nationality: 'Sri Lankan',
    battingStyle: 'Right-handed Batsman',
    bowlingStyle: 'Right-arm Fast',
    birthplace: 'Galle, Sri Lanka',
    debutYear: 2009,
    isTrending: false,
    overall: {
      matches: 122,
      runs: 88,
      wickets: 170,
      strikeRate: 10.1,
      economy: 7.14,
      average: 19.80,
      highestScore: 17,
      bestBowling: '5/13',
      catches: 21
    },
    seasonStats: [
      { season: 2019, matches: 12, runs: 8, wickets: 16, strikeRate: 120.0, economy: 9.76, average: 27.37, highestScore: 5, bestBowling: '4/31' },
      { season: 2017, matches: 12, runs: 7, wickets: 11, strikeRate: 80.0, economy: 8.52, average: 35.18, highestScore: 5, bestBowling: '2/5' },
      { season: 2015, matches: 15, runs: 12, wickets: 24, strikeRate: 110.0, economy: 7.40, average: 18.50, highestScore: 6, bestBowling: '4/23' },
      { season: 2014, matches: 10, runs: 4, wickets: 16, strikeRate: 70.0, economy: 6.45, average: 15.68, highestScore: 2, bestBowling: '4/15' },
      { season: 2013, matches: 17, runs: 16, wickets: 20, strikeRate: 90.0, economy: 7.16, average: 23.40, highestScore: 9, bestBowling: '3/39' }
    ]
  },
  {
    id: 'shane-warne',
    name: 'Shane Warne',
    team: 'RR',
    role: 'Bowler',
    age: 52,
    nationality: 'Australian',
    battingStyle: 'Right-handed Batsman',
    bowlingStyle: 'Right-arm Legbreak',
    birthplace: 'Upper Ferntree Gully, Australia',
    debutYear: 2008,
    isTrending: false,
    overall: {
      matches: 55,
      runs: 198,
      wickets: 57,
      strikeRate: 92.4,
      economy: 7.27,
      average: 25.38,
      highestScore: 34,
      bestBowling: '4/21',
      catches: 11
    },
    seasonStats: [
      { season: 2011, matches: 13, runs: 47, wickets: 13, strikeRate: 102.5, economy: 7.45, average: 23.90, highestScore: 12, bestBowling: '3/16' },
      { season: 2010, matches: 14, runs: 66, wickets: 11, strikeRate: 90.4, economy: 7.62, average: 32.60, highestScore: 34, bestBowling: '4/21' },
      { season: 2009, matches: 13, runs: 49, wickets: 14, strikeRate: 85.0, economy: 6.88, average: 19.64, highestScore: 21, bestBowling: '3/24' },
      { season: 2008, matches: 15, runs: 36, wickets: 19, strikeRate: 94.2, economy: 7.11, average: 21.26, highestScore: 14, bestBowling: '3/19' }
    ]
  },
  {
    id: 'david-warner',
    name: 'David Warner',
    team: 'SRH',
    role: 'Batsman',
    age: 39,
    nationality: 'Australian',
    battingStyle: 'Left-handed Batsman',
    bowlingStyle: 'Right-arm Legbreak',
    birthplace: 'Paddington, Sydney',
    debutYear: 2009,
    isTrending: true,
    overall: {
      matches: 184,
      runs: 6565,
      wickets: 0,
      strikeRate: 139.75,
      economy: 0,
      average: 40.52,
      highestScore: 126,
      bestBowling: '0/0',
      catches: 84
    },
    seasonStats: [
      { season: 2025, matches: 14, runs: 450, wickets: 0, strikeRate: 143.0, economy: 0, average: 37.50, highestScore: 91, bestBowling: '0/0' },
      { season: 2024, matches: 13, runs: 380, wickets: 0, strikeRate: 138.8, economy: 0, average: 31.66, highestScore: 82, bestBowling: '0/0' },
      { season: 2023, matches: 14, runs: 516, wickets: 0, strikeRate: 116.4, economy: 0, average: 36.85, highestScore: 86, bestBowling: '0/0' },
      { season: 2022, matches: 12, runs: 432, wickets: 0, strikeRate: 150.5, economy: 0, average: 48.00, highestScore: 92, bestBowling: '0/0' },
      { season: 2021, matches: 8, runs: 195, wickets: 0, strikeRate: 107.7, economy: 0, average: 24.37, highestScore: 57, bestBowling: '0/0' }
    ]
  },
  {
    id: 'sunil-narine',
    name: 'Sunil Narine',
    team: 'KKR',
    role: 'All-Rounder',
    age: 38,
    nationality: 'West Indian',
    battingStyle: 'Left-handed Batsman',
    bowlingStyle: 'Right-arm Offbreak',
    birthplace: 'Arima, Trinidad',
    debutYear: 2012,
    isTrending: true,
    overall: {
      matches: 177,
      runs: 1530,
      wickets: 180,
      strikeRate: 162.10,
      economy: 6.73,
      average: 25.44,
      highestScore: 109,
      bestBowling: '5/19',
      catches: 28
    },
    seasonStats: [
      { season: 2025, matches: 14, runs: 380, wickets: 14, strikeRate: 165.4, economy: 6.85, average: 27.14, highestScore: 85, bestBowling: '3/22', ballsFaced: 230, oversBowled: 56 },
      { season: 2024, matches: 15, runs: 488, wickets: 17, strikeRate: 180.7, economy: 6.90, average: 34.85, highestScore: 109, bestBowling: '2/22', ballsFaced: 270, oversBowled: 60 },
      { season: 2023, matches: 14, runs: 21, wickets: 11, strikeRate: 84.0, economy: 7.97, average: 34.63, highestScore: 7, bestBowling: '3/15', ballsFaced: 25, oversBowled: 52 },
      { season: 2022, matches: 14, runs: 71, wickets: 9, strikeRate: 177.5, economy: 5.57, average: 34.66, highestScore: 22, bestBowling: '2/21', ballsFaced: 40, oversBowled: 56 },
      { season: 2021, matches: 14, runs: 62, wickets: 16, strikeRate: 131.9, economy: 6.44, average: 22.56, highestScore: 21, bestBowling: '4/21', ballsFaced: 47, oversBowled: 56 }
    ]
  },
  {
    id: 'rashid-khan',
    name: 'Rashid Khan',
    team: 'GT',
    role: 'All-Rounder',
    age: 27,
    nationality: 'Afghan',
    battingStyle: 'Right-handed Batsman',
    bowlingStyle: 'Right-arm Legbreak',
    birthplace: 'Nangarhar, Afghanistan',
    debutYear: 2017,
    overall: {
      matches: 121,
      runs: 545,
      wickets: 149,
      strikeRate: 155.20,
      economy: 6.82,
      average: 20.84,
      highestScore: 79,
      bestBowling: '4/24',
      catches: 42
    },
    seasonStats: [
      { season: 2025, matches: 14, runs: 95, wickets: 16, strikeRate: 160.2, economy: 7.20, average: 23.12, highestScore: 31, bestBowling: '3/20', ballsFaced: 59, oversBowled: 56 },
      { season: 2024, matches: 12, runs: 102, wickets: 10, strikeRate: 145.7, economy: 8.16, average: 36.60, highestScore: 35, bestBowling: '2/15', ballsFaced: 70, oversBowled: 48 },
      { season: 2023, matches: 17, runs: 130, wickets: 27, strikeRate: 216.6, economy: 8.24, average: 20.44, highestScore: 79, bestBowling: '4/30', ballsFaced: 60, oversBowled: 67 },
      { season: 2022, matches: 16, runs: 91, wickets: 19, strikeRate: 206.8, economy: 6.59, average: 22.31, highestScore: 40, bestBowling: '4/24', ballsFaced: 44, oversBowled: 63 },
      { season: 2021, matches: 14, runs: 83, wickets: 18, strikeRate: 120.2, economy: 6.69, average: 20.83, highestScore: 22, bestBowling: '3/12', ballsFaced: 69, oversBowled: 56 }
    ]
  },
  {
    id: 'travis-head',
    name: 'Travis Head',
    team: 'SRH',
    role: 'Batsman',
    age: 32,
    nationality: 'Australian',
    battingStyle: 'Left-handed Batsman',
    bowlingStyle: 'Right-arm Offbreak',
    birthplace: 'Adelaide, South Australia',
    debutYear: 2016,
    isTrending: true,
    overall: {
      matches: 31,
      runs: 1052,
      wickets: 2,
      strikeRate: 172.45,
      economy: 8.50,
      average: 36.27,
      highestScore: 102,
      bestBowling: '1/12',
      catches: 12
    },
    seasonStats: [
      { season: 2025, matches: 14, runs: 530, wickets: 0, strikeRate: 185.0, economy: 0, average: 37.85, highestScore: 92, bestBowling: '0/0', ballsFaced: 286 },
      { season: 2024, matches: 15, runs: 567, wickets: 1, strikeRate: 191.5, economy: 9.0, average: 40.50, highestScore: 102, bestBowling: '1/12', ballsFaced: 296 }
    ]
  },
  {
    id: 'pat-cummins',
    name: 'Pat Cummins',
    team: 'SRH',
    role: 'Bowler',
    age: 33,
    nationality: 'Australian',
    battingStyle: 'Right-handed Batsman',
    bowlingStyle: 'Right-arm Fast',
    birthplace: 'Westmead, Australia',
    debutYear: 2014,
    isTrending: false,
    overall: {
      matches: 58,
      runs: 512,
      wickets: 63,
      strikeRate: 150.22,
      economy: 8.42,
      average: 28.50,
      highestScore: 66,
      bestBowling: '4/34',
      catches: 18
    },
    seasonStats: [
      { season: 2025, matches: 14, runs: 125, wickets: 15, strikeRate: 145.1, economy: 8.52, average: 28.14, highestScore: 35, bestBowling: '3/30', ballsFaced: 86, oversBowled: 56 },
      { season: 2024, matches: 16, runs: 136, wickets: 18, strikeRate: 158.1, economy: 9.12, average: 32.50, highestScore: 35, bestBowling: '3/43', ballsFaced: 86, oversBowled: 61 },
      { season: 2022, matches: 5, runs: 63, wickets: 7, strikeRate: 262.5, economy: 10.68, average: 30.28, highestScore: 56, bestBowling: '3/49', ballsFaced: 24, oversBowled: 19 },
      { season: 2021, matches: 7, runs: 93, wickets: 9, strikeRate: 166.0, economy: 8.83, average: 26.33, highestScore: 66, bestBowling: '3/24', ballsFaced: 56, oversBowled: 27 }
    ]
  },
  {
    id: 'kl-rahul',
    name: 'KL Rahul',
    team: 'LSG',
    role: 'Wicketkeeper',
    age: 34,
    nationality: 'Indian',
    battingStyle: 'Right-handed Batsman',
    bowlingStyle: 'N/A',
    birthplace: 'Bengaluru, Karnataka',
    debutYear: 2013,
    isTrending: true,
    overall: {
      matches: 132,
      runs: 4683,
      wickets: 0,
      strikeRate: 134.60,
      economy: 0.00,
      average: 45.47,
      highestScore: 132,
      bestBowling: '0/0',
      catches: 61
    },
    seasonStats: [
      { season: 2025, matches: 14, runs: 410, wickets: 0, strikeRate: 136.5, economy: 0, average: 34.16, highestScore: 78, bestBowling: '0/0' },
      { season: 2024, matches: 14, runs: 520, wickets: 0, strikeRate: 136.1, economy: 0, average: 37.14, highestScore: 82, bestBowling: '0/0' },
      { season: 2023, matches: 9, runs: 274, wickets: 0, strikeRate: 113.2, economy: 0, average: 34.25, highestScore: 74, bestBowling: '0/0' },
      { season: 2022, matches: 15, runs: 616, wickets: 0, strikeRate: 135.3, economy: 0, average: 51.33, highestScore: 103, bestBowling: '0/0' }
    ]
  },
  {
    id: 'andre-russell',
    name: 'Andre Russell',
    team: 'KKR',
    role: 'All-Rounder',
    age: 38,
    nationality: 'West Indian',
    battingStyle: 'Right-handed Batsman',
    bowlingStyle: 'Right-arm Fast-medium',
    birthplace: 'Kingston, Jamaica',
    debutYear: 2012,
    isTrending: true,
    overall: {
      matches: 127,
      runs: 2484,
      wickets: 115,
      strikeRate: 174.00,
      economy: 9.30,
      average: 29.20,
      highestScore: 88,
      bestBowling: '5/15',
      catches: 34
    },
    seasonStats: [
      { season: 2025, matches: 14, runs: 280, wickets: 15, strikeRate: 185.2, economy: 9.40, average: 31.10, highestScore: 64, bestBowling: '3/18' },
      { season: 2024, matches: 15, runs: 222, wickets: 19, strikeRate: 185.0, economy: 10.05, average: 27.75, highestScore: 41, bestBowling: '3/25' },
      { season: 2023, matches: 14, runs: 227, wickets: 7, strikeRate: 145.5, economy: 10.30, average: 20.63, highestScore: 42, bestBowling: '3/22' }
    ]
  },
  {
    id: 'shikhar-dhawan',
    name: 'Shikhar Dhawan',
    team: 'PBKS',
    role: 'Batsman',
    age: 40,
    nationality: 'Indian',
    battingStyle: 'Left-handed Batsman',
    bowlingStyle: 'Right-arm Offbreak',
    birthplace: 'Delhi',
    debutYear: 2008,
    isTrending: false,
    overall: {
      matches: 222,
      runs: 6769,
      wickets: 4,
      strikeRate: 127.14,
      economy: 8.25,
      average: 35.26,
      highestScore: 106,
      bestBowling: '1/7',
      catches: 98
    },
    seasonStats: [
      { season: 2024, matches: 5, runs: 152, wickets: 0, strikeRate: 125.6, economy: 0, average: 30.40, highestScore: 70, bestBowling: '0/0' },
      { season: 2023, matches: 11, runs: 373, wickets: 0, strikeRate: 142.9, economy: 0, average: 41.44, highestScore: 99, bestBowling: '0/0' },
      { season: 2022, matches: 14, runs: 460, wickets: 0, strikeRate: 122.6, economy: 0, average: 38.33, highestScore: 88, bestBowling: '0/0' }
    ]
  },
  {
    id: 'kieron-pollard',
    name: 'Kieron Pollard',
    team: 'MI',
    role: 'All-Rounder',
    age: 39,
    nationality: 'West Indian',
    battingStyle: 'Right-handed Batsman',
    bowlingStyle: 'Right-arm Medium',
    birthplace: 'Tacarigua, Trinidad',
    debutYear: 2010,
    isTrending: false,
    overall: {
      matches: 189,
      runs: 3412,
      wickets: 69,
      strikeRate: 147.32,
      economy: 8.78,
      average: 28.67,
      highestScore: 87,
      bestBowling: '4/44',
      catches: 103
    },
    seasonStats: [
      { season: 2022, matches: 11, runs: 144, wickets: 4, strikeRate: 107.4, economy: 8.92, average: 14.40, highestScore: 25, bestBowling: '2/8' },
      { season: 2021, matches: 14, runs: 245, wickets: 5, strikeRate: 148.4, economy: 7.95, average: 30.62, highestScore: 87, bestBowling: '2/8' },
      { season: 2020, matches: 16, runs: 268, wickets: 4, strikeRate: 191.4, economy: 9.02, average: 53.60, highestScore: 60, bestBowling: '1/5' }
    ]
  },
  {
    id: 'dinesh-karthik',
    name: 'Dinesh Karthik',
    team: 'RCB',
    role: 'Wicketkeeper',
    age: 40,
    nationality: 'Indian',
    battingStyle: 'Right-handed Batsman',
    bowlingStyle: 'N/A',
    birthplace: 'Chennai, Tamil Nadu',
    debutYear: 2008,
    isTrending: false,
    overall: {
      matches: 256,
      runs: 4842,
      wickets: 0,
      strikeRate: 135.26,
      economy: 0.00,
      average: 26.32,
      highestScore: 97,
      bestBowling: '0/0',
      catches: 145
    },
    seasonStats: [
      { season: 2024, matches: 15, runs: 326, wickets: 0, strikeRate: 187.3, economy: 0, average: 36.22, highestScore: 83, bestBowling: '0/0' },
      { season: 2023, matches: 13, runs: 140, wickets: 0, strikeRate: 134.6, economy: 0, average: 11.66, highestScore: 30, bestBowling: '0/0' },
      { season: 2022, matches: 16, runs: 330, wickets: 0, strikeRate: 183.3, economy: 0, average: 55.00, highestScore: 66, bestBowling: '0/0' }
    ]
  },
  {
    id: 'glenn-maxwell',
    name: 'Glenn Maxwell',
    team: 'RCB',
    role: 'All-Rounder',
    age: 37,
    nationality: 'Australian',
    battingStyle: 'Right-handed Batsman',
    bowlingStyle: 'Right-arm Offbreak',
    birthplace: 'Kew, Victoria, Australia',
    debutYear: 2012,
    isTrending: false,
    overall: {
      matches: 134,
      runs: 2719,
      wickets: 37,
      strikeRate: 153.90,
      economy: 8.34,
      average: 24.72,
      highestScore: 95,
      bestBowling: '2/15',
      catches: 45
    },
    seasonStats: [
      { season: 2024, matches: 10, runs: 52, wickets: 6, strikeRate: 120.9, economy: 8.24, average: 5.77, highestScore: 28, bestBowling: '2/23' },
      { season: 2023, matches: 14, runs: 400, wickets: 3, strikeRate: 183.4, economy: 7.24, average: 33.33, highestScore: 77, bestBowling: '1/3' },
      { season: 2022, matches: 13, runs: 301, wickets: 6, strikeRate: 169.1, economy: 6.87, average: 27.36, highestScore: 55, bestBowling: '2/14' }
    ]
  },
  {
    id: 'ruturaj-gaikwad',
    name: 'Ruturaj Gaikwad',
    team: 'CSK',
    role: 'Batsman',
    age: 29,
    nationality: 'Indian',
    battingStyle: 'Right-handed Batsman',
    bowlingStyle: 'Right-arm Offbreak',
    birthplace: 'Pune, Maharashtra',
    debutYear: 2020,
    isTrending: true,
    overall: {
      matches: 66,
      runs: 2380,
      wickets: 0,
      strikeRate: 136.90,
      economy: 0.00,
      average: 41.75,
      highestScore: 108,
      bestBowling: '0/0',
      catches: 31
    },
    seasonStats: [
      { season: 2025, matches: 14, runs: 680, wickets: 0, strikeRate: 141.5, economy: 0, average: 48.57, highestScore: 108, bestBowling: '0/0' },
      { season: 2024, matches: 14, runs: 583, wickets: 0, strikeRate: 141.1, economy: 0, average: 53.00, highestScore: 108, bestBowling: '0/0' },
      { season: 2023, matches: 16, runs: 590, wickets: 0, strikeRate: 147.5, economy: 0, average: 42.14, highestScore: 92, bestBowling: '0/0' }
    ]
  },
  {
    id: 'bhuvneshwar-kumar',
    name: 'Bhuvneshwar Kumar',
    team: 'SRH',
    role: 'Bowler',
    age: 36,
    nationality: 'Indian',
    battingStyle: 'Right-handed Batsman',
    bowlingStyle: 'Right-arm Medium-fast',
    birthplace: 'Meerut, Uttar Pradesh',
    debutYear: 2011,
    isTrending: false,
    overall: {
      matches: 174,
      runs: 302,
      wickets: 181,
      strikeRate: 98.40,
      economy: 7.56,
      average: 26.54,
      highestScore: 24,
      bestBowling: '5/19',
      catches: 42
    },
    seasonStats: [
      { season: 2025, matches: 14, runs: 15, wickets: 16, strikeRate: 105.0, economy: 7.95, average: 25.12, highestScore: 10, bestBowling: '3/24' },
      { season: 2024, matches: 16, runs: 12, wickets: 11, strikeRate: 110.0, economy: 9.22, average: 48.45, highestScore: 5, bestBowling: '3/41' },
      { season: 2023, matches: 14, runs: 41, wickets: 16, strikeRate: 111.1, economy: 8.32, average: 26.56, highestScore: 12, bestBowling: '5/30' }
    ]
  },
  {
    id: 'yuvraj-singh',
    name: 'Yuvraj Singh',
    team: 'PBKS',
    role: 'All-Rounder',
    age: 44,
    nationality: 'Indian',
    battingStyle: 'Left-handed Batsman',
    bowlingStyle: 'Slow Left-arm Orthodox',
    birthplace: 'Chandigarh',
    debutYear: 2008,
    isTrending: false,
    overall: {
      matches: 132,
      runs: 2750,
      wickets: 36,
      strikeRate: 129.71,
      economy: 7.43,
      average: 24.77,
      highestScore: 83,
      bestBowling: '4/29',
      catches: 31
    },
    seasonStats: [
      { season: 2019, matches: 4, runs: 98, wickets: 0, strikeRate: 130.6, economy: 0, average: 24.50, highestScore: 53, bestBowling: '0/0' },
      { season: 2017, matches: 12, runs: 252, wickets: 1, strikeRate: 143.1, economy: 11.00, average: 28.00, highestScore: 62, bestBowling: '1/21' },
      { season: 2016, matches: 10, runs: 236, wickets: 0, strikeRate: 131.8, economy: 0, average: 26.22, highestScore: 44, bestBowling: '0/0' }
    ]
  },
  {
    id: 'sanju-samson',
    name: 'Sanju Samson',
    team: 'RR',
    role: 'Wicketkeeper',
    age: 31,
    nationality: 'Indian',
    battingStyle: 'Right-handed Batsman',
    bowlingStyle: 'Right-arm Offbreak',
    birthplace: 'Trivandrum, Kerala',
    debutYear: 2013,
    isTrending: true,
    overall: {
      matches: 167,
      runs: 4412,
      wickets: 0,
      strikeRate: 138.50,
      economy: 0.00,
      average: 31.07,
      highestScore: 119,
      bestBowling: '0/0',
      catches: 82
    },
    seasonStats: [
      { season: 2025, matches: 14, runs: 480, wickets: 0, strikeRate: 147.2, economy: 0, average: 40.00, highestScore: 88, bestBowling: '0/0' },
      { season: 2024, matches: 15, runs: 531, wickets: 0, strikeRate: 153.4, economy: 0, average: 48.27, highestScore: 86, bestBowling: '0/0' },
      { season: 2023, matches: 14, runs: 362, wickets: 0, strikeRate: 153.3, economy: 0, average: 30.16, highestScore: 66, bestBowling: '0/0' }
    ]
  },
  {
    id: 'shane-watson',
    name: 'Shane Watson',
    team: 'RR',
    role: 'All-Rounder',
    age: 44,
    nationality: 'Australian',
    battingStyle: 'Right-handed Batsman',
    bowlingStyle: 'Right-arm Fast-medium',
    birthplace: 'Ipswich, Queensland',
    debutYear: 2008,
    isTrending: false,
    overall: {
      matches: 145,
      runs: 3874,
      wickets: 92,
      strikeRate: 137.91,
      economy: 7.93,
      average: 30.99,
      highestScore: 117,
      bestBowling: '4/29',
      catches: 40
    },
    seasonStats: [
      { season: 2020, matches: 11, runs: 299, wickets: 0, strikeRate: 121.0, economy: 0, average: 29.90, highestScore: 83, bestBowling: '0/0' },
      { season: 2019, matches: 17, runs: 398, wickets: 0, strikeRate: 127.5, economy: 0, average: 23.41, highestScore: 96, bestBowling: '0/0' },
      { season: 2018, matches: 15, runs: 555, wickets: 6, strikeRate: 154.5, economy: 8.95, average: 39.64, highestScore: 117, bestBowling: '2/29' }
    ]
  },
  {
    id: 'suryakumar-yadav',
    name: 'Suryakumar Yadav',
    team: 'MI',
    role: 'Batsman',
    age: 35,
    nationality: 'Indian',
    battingStyle: 'Right-handed Batsman',
    bowlingStyle: 'Right-arm Medium',
    birthplace: 'Mumbai, Maharashtra',
    debutYear: 2012,
    isTrending: true,
    overall: {
      matches: 154,
      runs: 3594,
      wickets: 0,
      strikeRate: 145.32,
      economy: 0.00,
      average: 31.80,
      highestScore: 103,
      bestBowling: '0/0',
      catches: 68
    },
    seasonStats: [
      { season: 2025, matches: 14, runs: 390, wickets: 0, strikeRate: 155.6, economy: 0, average: 30.00, highestScore: 91, bestBowling: '0/0' },
      { season: 2024, matches: 11, runs: 345, wickets: 0, strikeRate: 167.4, economy: 0, average: 34.50, highestScore: 102, bestBowling: '0/0' },
      { season: 2023, matches: 16, runs: 605, wickets: 0, strikeRate: 181.1, economy: 0, average: 43.21, highestScore: 103, bestBowling: '0/0' }
    ]
  },
  {
    id: 'r-ashwin',
    name: 'Ravichandran Ashwin',
    team: 'RR',
    role: 'All-Rounder',
    age: 39,
    nationality: 'Indian',
    battingStyle: 'Right-handed Batsman',
    bowlingStyle: 'Right-arm Offbreak',
    birthplace: 'Chennai, Tamil Nadu',
    debutYear: 2009,
    isTrending: false,
    overall: {
      matches: 212,
      runs: 714,
      wickets: 172,
      strikeRate: 118.20,
      economy: 7.03,
      average: 21.45,
      highestScore: 50,
      bestBowling: '4/34',
      catches: 46
    },
    seasonStats: [
      { season: 2025, matches: 14, runs: 85, wickets: 12, strikeRate: 121.3, economy: 7.75, average: 26.50, highestScore: 23, bestBowling: '2/17' },
      { season: 2024, matches: 15, runs: 91, wickets: 9, strikeRate: 115.1, economy: 8.31, average: 36.44, highestScore: 29, bestBowling: '3/24' },
      { season: 2023, matches: 14, runs: 67, wickets: 14, strikeRate: 131.3, economy: 7.51, average: 21.75, highestScore: 30, bestBowling: '2/25' }
    ]
  },
  {
    id: 'trent-boult',
    name: 'Trent Boult',
    team: 'RR',
    role: 'Bowler',
    age: 36,
    nationality: 'New Zealander',
    battingStyle: 'Right-handed Batsman',
    bowlingStyle: 'Left-arm Fast-medium',
    birthplace: 'Rotorua, New Zealand',
    debutYear: 2015,
    isTrending: false,
    overall: {
      matches: 104,
      runs: 35,
      wickets: 121,
      strikeRate: 85.00,
      economy: 8.29,
      average: 26.54,
      highestScore: 15,
      bestBowling: '4/18',
      catches: 27
    },
    seasonStats: [
      { season: 2025, matches: 14, runs: 4, wickets: 14, strikeRate: 80.0, economy: 8.42, average: 29.50, highestScore: 2, bestBowling: '3/20' },
      { season: 2024, matches: 15, runs: 6, wickets: 16, strikeRate: 100.0, economy: 8.30, average: 27.62, highestScore: 5, bestBowling: '3/22' },
      { season: 2023, matches: 10, runs: 10, wickets: 13, strikeRate: 90.0, economy: 8.21, average: 24.00, highestScore: 4, bestBowling: '3/15' }
    ]
  },
  {
    id: 'dwayne-bravo',
    name: 'Dwayne Bravo',
    team: 'CSK',
    role: 'All-Rounder',
    age: 42,
    nationality: 'West Indian',
    battingStyle: 'Right-handed Batsman',
    bowlingStyle: 'Right-arm Fast-medium',
    birthplace: 'Santa Cruz, Trinidad',
    debutYear: 2008,
    isTrending: false,
    overall: {
      matches: 161,
      runs: 1560,
      wickets: 183,
      strikeRate: 129.57,
      economy: 8.38,
      average: 22.61,
      highestScore: 70,
      bestBowling: '4/22',
      catches: 80
    },
    seasonStats: [
      { season: 2022, matches: 15, runs: 85, wickets: 16, strikeRate: 110.0, economy: 8.71, average: 18.25, highestScore: 23, bestBowling: '3/20' },
      { season: 2021, matches: 14, runs: 47, wickets: 14, strikeRate: 140.0, economy: 7.81, average: 18.66, highestScore: 20, bestBowling: '3/25' },
      { season: 2020, matches: 6, runs: 7, wickets: 6, strikeRate: 116.6, economy: 8.57, average: 22.40, highestScore: 7, bestBowling: '3/37' }
    ]
  }
];

// Compact structured seeds for 100 additional real-life IPL squad players (representing 10 players per franchise)
interface SeedInput {
  id: string;
  name: string;
  team: string;
  role: 'Batsman' | 'Bowler' | 'All-Rounder' | 'Wicketkeeper';
  age: number;
  nationality: string;
  battingStyle: string;
  bowlingStyle: string;
  birthplace: string;
  debutYear: number;
  avgRuns: number;
  avgWickets: number;
  baseStrikeRate: number;
  baseEconomy: number;
}

const EXTENDED_SEEDS: SeedInput[] = [
  // --- CHENNAI SUPER KINGS ---
  { id: 'shivam-dube', name: 'Shivam Dube', team: 'CSK', role: 'All-Rounder', age: 32, nationality: 'Indian', battingStyle: 'Left-handed Batsman', bowlingStyle: 'Right-arm Medium', birthplace: 'Mumbai', debutYear: 2019, avgRuns: 385, avgWickets: 3, baseStrikeRate: 159.2, baseEconomy: 8.7 },
  { id: 'matheesha-pathirana', name: 'Matheesha Pathirana', team: 'CSK', role: 'Bowler', age: 23, nationality: 'Sri Lankan', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Right-arm Fast', birthplace: 'Kandy', debutYear: 2022, avgRuns: 4, avgWickets: 19, baseStrikeRate: 95.0, baseEconomy: 7.8 },
  { id: 'rachin-ravindra', name: 'Rachin Ravindra', team: 'CSK', role: 'All-Rounder', age: 26, nationality: 'New Zealander', battingStyle: 'Left-handed Batsman', bowlingStyle: 'Slow Left-arm Orthodox', birthplace: 'Wellington', debutYear: 2024, avgRuns: 340, avgWickets: 4, baseStrikeRate: 145.4, baseEconomy: 8.1 },
  { id: 'daryl-mitchell', name: 'Daryl Mitchell', team: 'CSK', role: 'All-Rounder', age: 35, nationality: 'New Zealander', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Right-arm Medium', birthplace: 'Hamilton', debutYear: 2022, avgRuns: 310, avgWickets: 3, baseStrikeRate: 135.2, baseEconomy: 8.9 },
  { id: 'shardul-thakur', name: 'Shardul Thakur', team: 'CSK', role: 'All-Rounder', age: 34, nationality: 'Indian', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Right-arm Medium-fast', birthplace: 'Palghar', debutYear: 2015, avgRuns: 120, avgWickets: 16, baseStrikeRate: 140.0, baseEconomy: 9.1 },
  { id: 'deepak-chahar', name: 'Deepak Chahar', team: 'CSK', role: 'Bowler', age: 33, nationality: 'Indian', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Right-arm Medium-fast', birthplace: 'Ganganagar', debutYear: 2016, avgRuns: 38, avgWickets: 15, baseStrikeRate: 130.0, baseEconomy: 7.9 },
  { id: 'mitchell-santner', name: 'Mitchell Santner', team: 'CSK', role: 'All-Rounder', age: 34, nationality: 'New Zealander', battingStyle: 'Left-handed Batsman', bowlingStyle: 'Slow Left-arm Orthodox', birthplace: 'Hamilton', debutYear: 2019, avgRuns: 95, avgWickets: 12, baseStrikeRate: 124.5, baseEconomy: 7.1 },
  { id: 'ajinkya-rahane', name: 'Ajinkya Rahane', team: 'CSK', role: 'Batsman', age: 37, nationality: 'Indian', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Right-arm Medium', birthplace: 'Ashwi, Maharashtra', debutYear: 2008, avgRuns: 295, avgWickets: 0, baseStrikeRate: 129.4, baseEconomy: 0 },
  { id: 'tushar-deshpande', name: 'Tushar Deshpande', team: 'CSK', role: 'Bowler', age: 31, nationality: 'Indian', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Right-arm Medium-fast', birthplace: 'Mumbai', debutYear: 2020, avgRuns: 10, avgWickets: 17, baseStrikeRate: 110.0, baseEconomy: 8.7 },
  { id: 'mukesh-choudhary', name: 'Mukesh Choudhary', team: 'CSK', role: 'Bowler', age: 29, nationality: 'Indian', battingStyle: 'Left-handed Batsman', bowlingStyle: 'Left-arm Medium-fast', birthplace: 'Bhilwara', debutYear: 2022, avgRuns: 2, avgWickets: 14, baseStrikeRate: 90.0, baseEconomy: 8.5 },

  // --- ROYAL CHALLENGERS BENGALURU ---
  { id: 'faf-du-plessis', name: 'Faf du Plessis', team: 'RCB', role: 'Batsman', age: 41, nationality: 'South African', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Right-arm Legbreak', birthplace: 'Pretorian', debutYear: 2012, avgRuns: 440, avgWickets: 0, baseStrikeRate: 138.5, baseEconomy: 0 },
  { id: 'rajat-patidar', name: 'Rajat Patidar', team: 'RCB', role: 'Batsman', age: 32, nationality: 'Indian', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Right-arm Offbreak', birthplace: 'Indore', debutYear: 2021, avgRuns: 350, avgWickets: 0, baseStrikeRate: 143.0, baseEconomy: 0 },
  { id: 'mohammed-siraj', name: 'Mohammed Siraj', team: 'RCB', role: 'Bowler', age: 32, nationality: 'Indian', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Right-arm Fast', birthplace: 'Hyderabad', debutYear: 2017, avgRuns: 15, avgWickets: 15, baseStrikeRate: 95.0, baseEconomy: 8.1 },
  { id: 'yash-dayal', name: 'Yash Dayal', team: 'RCB', role: 'Bowler', age: 28, nationality: 'Indian', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Left-arm Medium-fast', birthplace: 'Allahabad', debutYear: 2022, avgRuns: 4, avgWickets: 13, baseStrikeRate: 90.0, baseEconomy: 8.5 },
  { id: 'cameron-green', name: 'Cameron Green', team: 'RCB', role: 'All-Rounder', age: 26, nationality: 'Australian', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Right-arm Fast-medium', birthplace: 'Subiaco', debutYear: 2023, avgRuns: 360, avgWickets: 9, baseStrikeRate: 151.0, baseEconomy: 8.7 },
  { id: 'will-jacks', name: 'Will Jacks', team: 'RCB', role: 'All-Rounder', age: 27, nationality: 'English', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Right-arm Offbreak', birthplace: 'Chertsey', debutYear: 2024, avgRuns: 310, avgWickets: 5, baseStrikeRate: 168.0, baseEconomy: 8.6 },
  { id: 'lockie-ferguson', name: 'Lockie Ferguson', team: 'RCB', role: 'Bowler', age: 34, nationality: 'New Zealander', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Right-arm Fast', birthplace: 'Auckland', debutYear: 2017, avgRuns: 12, avgWickets: 13, baseStrikeRate: 108.0, baseEconomy: 8.4 },
  { id: 'mahipal-lomror', name: 'Mahipal Lomror', team: 'RCB', role: 'All-Rounder', age: 26, nationality: 'Indian', battingStyle: 'Left-handed Batsman', bowlingStyle: 'Slow Left-arm Orthodox', birthplace: 'Nagaur', debutYear: 2018, avgRuns: 170, avgWickets: 2, baseStrikeRate: 139.0, baseEconomy: 8.8 },
  { id: 'karn-sharma', name: 'Karn Sharma', team: 'RCB', role: 'Bowler', age: 38, nationality: 'Indian', battingStyle: 'Left-handed Batsman', bowlingStyle: 'Right-arm Legbreak', birthplace: 'Meerut', debutYear: 2009, avgRuns: 18, avgWickets: 12, baseStrikeRate: 118.0, baseEconomy: 8.2 },
  { id: 'suyash-prabhudessai', name: 'Suyash Prabhudessai', team: 'RCB', role: 'Batsman', age: 28, nationality: 'Indian', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Right-arm Medium-fast', birthplace: 'Goa', debutYear: 2022, avgRuns: 110, avgWickets: 0, baseStrikeRate: 122.0, baseEconomy: 0 },

  // --- MUMBAI INDIANS ---
  { id: 'ishan-kishan', name: 'Ishan Kishan', team: 'MI', role: 'Wicketkeeper', age: 27, nationality: 'Indian', battingStyle: 'Left-handed Batsman', bowlingStyle: 'N/A', birthplace: 'Patna, Bihar', debutYear: 2016, avgRuns: 370, avgWickets: 0, baseStrikeRate: 135.8, baseEconomy: 0 },
  { id: 'tilak-varma', name: 'Tilak Varma', team: 'MI', role: 'Batsman', age: 23, nationality: 'Indian', battingStyle: 'Left-handed Batsman', bowlingStyle: 'Right-arm Offbreak', birthplace: 'Hyderabad', debutYear: 2022, avgRuns: 395, avgWickets: 2, baseStrikeRate: 141.6, baseEconomy: 8.0 },
  { id: 'tim-david', name: 'Tim David', team: 'MI', role: 'Batsman', age: 30, nationality: 'Australian', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Right-arm Offbreak', birthplace: 'Singapore', debutYear: 2021, avgRuns: 230, avgWickets: 0, baseStrikeRate: 164.2, baseEconomy: 0 },
  { id: 'gerald-coetzee', name: 'Gerald Coetzee', team: 'MI', role: 'Bowler', age: 25, nationality: 'South African', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Right-arm Fast', birthplace: 'Bloemfontein', debutYear: 2024, avgRuns: 20, avgWickets: 16, baseStrikeRate: 130.0, baseEconomy: 9.3 },
  { id: 'piyush-chawla', name: 'Piyush Chawla', team: 'MI', role: 'Bowler', age: 37, nationality: 'Indian', battingStyle: 'Left-handed Batsman', bowlingStyle: 'Right-arm Legbreak', birthplace: 'Aligarh', debutYear: 2008, avgRuns: 18, avgWickets: 14, baseStrikeRate: 110.0, baseEconomy: 8.1 },
  { id: 'nuwan-thushara', name: 'Nuwan Thushara', team: 'MI', role: 'Bowler', age: 31, nationality: 'Sri Lankan', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Right-arm Medium-fast', birthplace: 'Elpitiya', debutYear: 2024, avgRuns: 3, avgWickets: 12, baseStrikeRate: 85.0, baseEconomy: 8.4 },
  { id: 'romario-shepherd', name: 'Romario Shepherd', team: 'MI', role: 'All-Rounder', age: 31, nationality: 'West Indian', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Right-arm Fast-medium', birthplace: 'Georgetown', debutYear: 2022, avgRuns: 100, avgWickets: 7, baseStrikeRate: 171.4, baseEconomy: 9.9 },
  { id: 'nehal-wadhera', name: 'Nehal Wadhera', team: 'MI', role: 'Batsman', age: 25, nationality: 'Indian', battingStyle: 'Left-handed Batsman', bowlingStyle: 'Right-arm Legbreak', birthplace: 'Ludhiana', debutYear: 2023, avgRuns: 185, avgWickets: 0, baseStrikeRate: 140.5, baseEconomy: 0 },
  { id: 'mohammad-nabi', name: 'Mohammad Nabi', team: 'MI', role: 'All-Rounder', age: 41, nationality: 'Afghan', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Right-arm Offbreak', birthplace: 'Logar', debutYear: 2017, avgRuns: 115, avgWickets: 8, baseStrikeRate: 132.0, baseEconomy: 7.6 },
  { id: 'akash-madhwal', name: 'Akash Madhwal', team: 'MI', role: 'Bowler', age: 32, nationality: 'Indian', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Right-arm Medium-fast', birthplace: 'Roorkee', debutYear: 2023, avgRuns: 2, avgWickets: 13, baseStrikeRate: 80.0, baseEconomy: 8.9 },

  // --- KOLKATA KNIGHT RIDERS ---
  { id: 'shreyas-iyer', name: 'Shreyas Iyer', team: 'KKR', role: 'Batsman', age: 31, nationality: 'Indian', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Right-arm Legbreak', birthplace: 'Mumbai', debutYear: 2015, avgRuns: 350, avgWickets: 0, baseStrikeRate: 129.5, baseEconomy: 0 },
  { id: 'rinku-singh', name: 'Rinku Singh', team: 'KKR', role: 'Batsman', age: 28, nationality: 'Indian', battingStyle: 'Left-handed Batsman', bowlingStyle: 'Right-arm Offbreak', birthplace: 'Aligarh', debutYear: 2018, avgRuns: 295, avgWickets: 0, baseStrikeRate: 148.6, baseEconomy: 0 },
  { id: 'phil-salt', name: 'Phil Salt', team: 'KKR', role: 'Wicketkeeper', age: 29, nationality: 'English', battingStyle: 'Right-handed Batsman', bowlingStyle: 'N/A', birthplace: 'Bodelwyddan', debutYear: 2023, avgRuns: 385, avgWickets: 0, baseStrikeRate: 169.2, baseEconomy: 0 },
  { id: 'mitchell-starc', name: 'Mitchell Starc', team: 'KKR', role: 'Bowler', age: 36, nationality: 'Australian', battingStyle: 'Left-handed Batsman', bowlingStyle: 'Left-arm Fast', birthplace: 'Baulkham Hills', debutYear: 2014, avgRuns: 28, avgWickets: 15, baseStrikeRate: 122.0, baseEconomy: 8.8 },
  { id: 'varun-chakaravarthy', name: 'Varun Chakaravarthy', team: 'KKR', role: 'Bowler', age: 34, nationality: 'Indian', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Right-arm Legbreak', birthplace: 'Bidar', debutYear: 2019, avgRuns: 6, avgWickets: 19, baseStrikeRate: 85.0, baseEconomy: 7.5 },
  { id: 'venkatesh-iyer', name: 'Venkatesh Iyer', team: 'KKR', role: 'All-Rounder', age: 31, nationality: 'Indian', battingStyle: 'Left-handed Batsman', bowlingStyle: 'Right-arm Medium', birthplace: 'Indore', debutYear: 2021, avgRuns: 320, avgWickets: 4, baseStrikeRate: 139.5, baseEconomy: 8.4 },
  { id: 'ramandeep-singh', name: 'Ramandeep Singh', team: 'KKR', role: 'All-Rounder', age: 29, nationality: 'Indian', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Right-arm Medium-fast', birthplace: 'Chandigarh', debutYear: 2022, avgRuns: 130, avgWickets: 5, baseStrikeRate: 165.0, baseEconomy: 8.8 },
  { id: 'harshit-rana', name: 'Harshit Rana', team: 'KKR', role: 'Bowler', age: 24, nationality: 'Indian', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Right-arm Fast-medium', birthplace: 'Delhi', debutYear: 2022, avgRuns: 18, avgWickets: 15, baseStrikeRate: 128.0, baseEconomy: 8.6 },
  { id: 'vaibhav-arora', name: 'Vaibhav Arora', team: 'KKR', role: 'Bowler', age: 28, nationality: 'Indian', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Right-arm Fast-medium', birthplace: 'Ambala', debutYear: 2022, avgRuns: 5, avgWickets: 12, baseStrikeRate: 90.0, baseEconomy: 8.4 },
  { id: 'suyash-sharma', name: 'Suyash Sharma', team: 'KKR', role: 'Bowler', age: 23, nationality: 'Indian', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Right-arm Legbreak', birthplace: 'Delhi', debutYear: 2023, avgRuns: 2, avgWickets: 11, baseStrikeRate: 80.0, baseEconomy: 7.8 },

  // --- RAJASTHAN ROYALS ---
  { id: 'yashasvi-jaiswal', name: 'Yashasvi Jaiswal', team: 'RR', role: 'Batsman', age: 24, nationality: 'Indian', battingStyle: 'Left-handed Batsman', bowlingStyle: 'Right-arm Legbreak', birthplace: 'Suriyawan', debutYear: 2020, avgRuns: 460, avgWickets: 0, baseStrikeRate: 151.2, baseEconomy: 0 },
  { id: 'jos-buttler', name: 'Jos Buttler', team: 'RR', role: 'Wicketkeeper', age: 35, nationality: 'English', battingStyle: 'Right-handed Batsman', bowlingStyle: 'N/A', birthplace: 'Taunton', debutYear: 2016, avgRuns: 430, avgWickets: 0, baseStrikeRate: 147.5, baseEconomy: 0 },
  { id: 'riyan-parag', name: 'Riyan Parag', team: 'RR', role: 'All-Rounder', age: 24, nationality: 'Indian', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Right-arm Legbreak', birthplace: 'Guwahati', debutYear: 2019, avgRuns: 325, avgWickets: 5, baseStrikeRate: 140.2, baseEconomy: 8.2 },
  { id: 'shimron-hetmyer', name: 'Shimron Hetmyer', team: 'RR', role: 'Batsman', age: 29, nationality: 'West Indian', battingStyle: 'Left-handed Batsman', bowlingStyle: 'N/A', birthplace: 'Cumberland', debutYear: 2019, avgRuns: 210, avgWickets: 0, baseStrikeRate: 154.5, baseEconomy: 0 },
  { id: 'dhruv-jurel', name: 'Dhruv Jurel', team: 'RR', role: 'Wicketkeeper', age: 25, nationality: 'Indian', battingStyle: 'Right-handed Batsman', bowlingStyle: 'N/A', birthplace: 'Agra, UP', debutYear: 2023, avgRuns: 195, avgWickets: 0, baseStrikeRate: 146.0, baseEconomy: 0 },
  { id: 'sandeep-sharma', name: 'Sandeep Sharma', team: 'RR', role: 'Bowler', age: 33, nationality: 'Indian', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Right-arm Medium', birthplace: 'Patiala', debutYear: 2013, avgRuns: 6, avgWickets: 14, baseStrikeRate: 100.0, baseEconomy: 7.7 },
  { id: 'avesh-khan', name: 'Avesh Khan', team: 'RR', role: 'Bowler', age: 29, nationality: 'Indian', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Right-arm Fast-medium', birthplace: 'Indore', debutYear: 2017, avgRuns: 14, avgWickets: 14, baseStrikeRate: 104.0, baseEconomy: 8.5 },
  { id: 'burger-nandre', name: 'Nandre Burger', team: 'RR', role: 'Bowler', age: 30, nationality: 'South African', battingStyle: 'Left-handed Batsman', bowlingStyle: 'Left-arm Fast', birthplace: 'Krugersdorp', debutYear: 2024, avgRuns: 5, avgWickets: 11, baseStrikeRate: 90.0, baseEconomy: 8.3 },
  { id: 'rovman-powell', name: 'Rovman Powell', team: 'RR', role: 'Batsman', age: 32, nationality: 'West Indian', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Right-arm Medium-fast', birthplace: 'Kingston', debutYear: 2022, avgRuns: 170, avgWickets: 1, baseStrikeRate: 144.0, baseEconomy: 9.1 },
  { id: 'navdeep-saini', name: 'Navdeep Saini', team: 'RR', role: 'Bowler', age: 33, nationality: 'Indian', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Right-arm Fast', birthplace: 'Karnal', debutYear: 2019, avgRuns: 10, avgWickets: 9, baseStrikeRate: 112.0, baseEconomy: 8.9 },

  // --- SUNRISERS HYDERABAD ---
  { id: 'abhishek-sharma', name: 'Abhishek Sharma', team: 'SRH', role: 'All-Rounder', age: 25, nationality: 'Indian', battingStyle: 'Left-handed Batsman', bowlingStyle: 'Slow Left-arm Orthodox', birthplace: 'Amritsar', debutYear: 2018, avgRuns: 430, avgWickets: 4, baseStrikeRate: 173.8, baseEconomy: 8.5 },
  { id: 'heinrich-klaasen', name: 'Heinrich Klaasen', team: 'SRH', role: 'Wicketkeeper', age: 34, nationality: 'South African', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Right-arm Offbreak', birthplace: 'Pretoria', debutYear: 2018, avgRuns: 420, avgWickets: 0, baseStrikeRate: 169.5, baseEconomy: 0 },
  { id: 'nitish-kumar-reddy', name: 'Nitish Kumar Reddy', team: 'SRH', role: 'All-Rounder', age: 23, nationality: 'Indian', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Right-arm Medium-fast', birthplace: 'Visakhapatnam', debutYear: 2023, avgRuns: 245, avgWickets: 7, baseStrikeRate: 145.2, baseEconomy: 8.7 },
  { id: 'aiden-markram', name: 'Aiden Markram', team: 'SRH', role: 'Batsman', age: 31, nationality: 'South African', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Right-arm Offbreak', birthplace: 'Centurion', debutYear: 2021, avgRuns: 275, avgWickets: 2, baseStrikeRate: 132.5, baseEconomy: 7.8 },
  { id: 'shahbaz-ahmed', name: 'Shahbaz Ahmed', team: 'SRH', role: 'All-Rounder', age: 31, nationality: 'Indian', battingStyle: 'Left-handed Batsman', bowlingStyle: 'Slow Left-arm Orthodox', birthplace: 'Mewat', debutYear: 2020, avgRuns: 120, avgWickets: 9, baseStrikeRate: 126.0, baseEconomy: 7.8 },
  { id: 't-natarajan', name: 'T. Natarajan', team: 'SRH', role: 'Bowler', age: 35, nationality: 'Indian', battingStyle: 'Left-handed Batsman', bowlingStyle: 'Left-arm Medium-fast', birthplace: 'Chinnappampatti', debutYear: 2017, avgRuns: 4, avgWickets: 17, baseStrikeRate: 80.0, baseEconomy: 8.3 },
  { id: 'mayank-markande', name: 'Mayank Markande', team: 'SRH', role: 'Bowler', age: 28, nationality: 'Indian', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Right-arm Legbreak', birthplace: 'Bathinda', debutYear: 2018, avgRuns: 9, avgWickets: 11, baseStrikeRate: 90.0, baseEconomy: 8.1 },
  { id: 'jaydev-unadkat', name: 'Jaydev Unadkat', team: 'SRH', role: 'Bowler', age: 34, nationality: 'Indian', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Left-arm Medium-fast', birthplace: 'Porbandar', debutYear: 2010, avgRuns: 25, avgWickets: 12, baseStrikeRate: 121.0, baseEconomy: 8.7 },
  { id: 'glenn-phillips', name: 'Glenn Phillips', team: 'SRH', role: 'Batsman', age: 29, nationality: 'New Zealander', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Right-arm Offbreak', birthplace: 'East London', debutYear: 2021, avgRuns: 145, avgWickets: 1, baseStrikeRate: 146.4, baseEconomy: 8.0 },
  { id: 'umran-malik', name: 'Umran Malik', team: 'SRH', role: 'Bowler', age: 26, nationality: 'Indian', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Right-arm Fast', birthplace: 'Srinagar', debutYear: 2021, avgRuns: 5, avgWickets: 10, baseStrikeRate: 85.0, baseEconomy: 9.4 },

  // --- GUJARAT TITANS ---
  { id: 'sai-sudharsan', name: 'Sai Sudharsan', team: 'GT', role: 'Batsman', age: 24, nationality: 'Indian', battingStyle: 'Left-handed Batsman', bowlingStyle: 'Right-arm Legbreak', birthplace: 'Chennai', debutYear: 2022, avgRuns: 395, avgWickets: 0, baseStrikeRate: 136.0, baseEconomy: 0 },
  { id: 'david-miller', name: 'David Miller', team: 'GT', role: 'Batsman', age: 36, nationality: 'South African', battingStyle: 'Left-handed Batsman', bowlingStyle: 'Right-arm Offbreak', birthplace: 'Pietermaritzburg', debutYear: 2012, avgRuns: 285, avgWickets: 0, baseStrikeRate: 146.2, baseEconomy: 0 },
  { id: 'rahul-tewatia', name: 'Rahul Tewatia', team: 'GT', role: 'All-Rounder', age: 33, nationality: 'Indian', battingStyle: 'Left-handed Batsman', bowlingStyle: 'Right-arm Legbreak', birthplace: 'Sihi, Haryana', debutYear: 2014, avgRuns: 185, avgWickets: 5, baseStrikeRate: 151.0, baseEconomy: 8.0 },
  { id: 'shahrukh-khan-gt', name: 'Shahrukh Khan', team: 'GT', role: 'All-Rounder', age: 30, nationality: 'Indian', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Right-arm Offbreak', birthplace: 'Chennai', debutYear: 2021, avgRuns: 145, avgWickets: 2, baseStrikeRate: 155.0, baseEconomy: 8.4 },
  { id: 'mohit-sharma-gt', name: 'Mohit Sharma', team: 'GT', role: 'Bowler', age: 37, nationality: 'Indian', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Right-arm Medium', birthplace: 'Ballabhgarh', debutYear: 2013, avgRuns: 15, avgWickets: 16, baseStrikeRate: 110.0, baseEconomy: 8.2 },
  { id: 'umesh-yadav', name: 'Umesh Yadav', team: 'GT', role: 'Bowler', age: 38, nationality: 'Indian', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Right-arm Fast', birthplace: 'Nagpur', debutYear: 2010, avgRuns: 16, avgWickets: 12, baseStrikeRate: 108.4, baseEconomy: 8.4 },
  { id: 'spencer-johnson', name: 'Spencer Johnson', team: 'GT', role: 'Bowler', age: 30, nationality: 'Australian', battingStyle: 'Left-handed Batsman', bowlingStyle: 'Left-arm Fast', birthplace: 'Adelaide', debutYear: 2024, avgRuns: 3, avgWickets: 10, baseStrikeRate: 80.0, baseEconomy: 8.5 },
  { id: 'sai-kishore', name: 'Sai Kishore', team: 'GT', role: 'Bowler', age: 29, nationality: 'Indian', battingStyle: 'Left-handed Batsman', bowlingStyle: 'Slow Left-arm Orthodox', birthplace: 'Madurai', debutYear: 2020, avgRuns: 18, avgWickets: 11, baseStrikeRate: 114.0, baseEconomy: 7.2 },
  { id: 'vijay-shankar', name: 'Vijay Shankar', team: 'GT', role: 'All-Rounder', age: 35, nationality: 'Indian', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Right-arm Medium', birthplace: 'Tirunelveli', debutYear: 2014, avgRuns: 165, avgWickets: 2, baseStrikeRate: 124.0, baseEconomy: 8.4 },
  { id: 'azmatullah-omarzai', name: 'Azmatullah Omarzai', team: 'GT', role: 'All-Rounder', age: 26, nationality: 'Afghan', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Right-arm Medium-fast', birthplace: 'Kunar', debutYear: 2024, avgRuns: 140, avgWickets: 8, baseStrikeRate: 135.0, baseEconomy: 8.6 },

  // --- DELHI CAPITALS ---
  { id: 'axar-patel', name: 'Axar Patel', team: 'DC', role: 'All-Rounder', age: 32, nationality: 'Indian', battingStyle: 'Left-handed Batsman', bowlingStyle: 'Slow Left-arm Orthodox', birthplace: 'Anand, Gujarat', debutYear: 2014, avgRuns: 230, avgWickets: 14, baseStrikeRate: 137.5, baseEconomy: 7.2 },
  { id: 'kuldeep-yadav', name: 'Kuldeep Yadav', team: 'DC', role: 'Bowler', age: 31, nationality: 'Indian', battingStyle: 'Left-handed Batsman', bowlingStyle: 'Slow Left-arm Chinaman', birthplace: 'Kanpur', debutYear: 2016, avgRuns: 20, avgWickets: 17, baseStrikeRate: 105.0, baseEconomy: 7.7 },
  { id: 'jake-fraser-mcgurk', name: 'Jake Fraser-McGurk', team: 'DC', role: 'Batsman', age: 24, nationality: 'Australian', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Right-arm Legbreak', birthplace: 'Melbourne', debutYear: 2024, avgRuns: 360, avgWickets: 0, baseStrikeRate: 196.4, baseEconomy: 0 },
  { id: 'mitchell-marsh', name: 'Mitchell Marsh', team: 'DC', role: 'All-Rounder', age: 34, nationality: 'Australian', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Right-arm Fast-medium', birthplace: 'Perth', debutYear: 2010, avgRuns: 250, avgWickets: 8, baseStrikeRate: 142.0, baseEconomy: 8.6 },
  { id: 'tristan-stubbs', name: 'Tristan Stubbs', team: 'DC', role: 'Batsman', age: 25, nationality: 'South African', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Right-arm Offbreak', birthplace: 'Johannesburg', debutYear: 2022, avgRuns: 320, avgWickets: 2, baseStrikeRate: 162.5, baseEconomy: 8.2 },
  { id: 'khaleel-ahmed', name: 'Khaleel Ahmed', team: 'DC', role: 'Bowler', age: 28, nationality: 'Indian', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Left-arm Fast-medium', birthplace: 'Tonk, Rajasthan', debutYear: 2018, avgRuns: 3, avgWickets: 16, baseStrikeRate: 80.0, baseEconomy: 8.3 },
  { id: 'mukesh-kumar', name: 'Mukesh Kumar', team: 'DC', role: 'Bowler', age: 32, nationality: 'Indian', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Right-arm Medium-fast', birthplace: 'Gopalganj', debutYear: 2023, avgRuns: 5, avgWickets: 15, baseStrikeRate: 85.0, baseEconomy: 8.9 },
  { id: 'ishant-sharma', name: 'Ishant Sharma', team: 'DC', role: 'Bowler', age: 37, nationality: 'Indian', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Right-arm Fast', birthplace: 'Delhi', debutYear: 2008, avgRuns: 12, avgWickets: 11, baseStrikeRate: 90.0, baseEconomy: 8.1 },
  { id: 'prithvi-shaw', name: 'Prithvi Shaw', team: 'DC', role: 'Batsman', age: 26, nationality: 'Indian', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Right-arm Offbreak', birthplace: 'Thane', debutYear: 2018, avgRuns: 260, avgWickets: 0, baseStrikeRate: 143.0, baseEconomy: 0 },
  { id: 'abishek-porel', name: 'Abishek Porel', team: 'DC', role: 'Wicketkeeper', age: 23, nationality: 'Indian', battingStyle: 'Left-handed Batsman', bowlingStyle: 'N/A', birthplace: 'Chandannagar', debutYear: 2023, avgRuns: 200, avgWickets: 0, baseStrikeRate: 139.0, baseEconomy: 0 },

  // --- LUCKNOW SUPER GIANTS ---
  { id: 'nicholas-pooran', name: 'Nicholas Pooran', team: 'LSG', role: 'Wicketkeeper', age: 30, nationality: 'West Indian', battingStyle: 'Left-handed Batsman', bowlingStyle: 'Right-arm Offbreak', birthplace: 'Couva', debutYear: 2019, avgRuns: 400, avgWickets: 0, baseStrikeRate: 163.5, baseEconomy: 0 },
  { id: 'quinton-de-kock', name: 'Quinton de Kock', team: 'LSG', role: 'Wicketkeeper', age: 33, nationality: 'South African', battingStyle: 'Left-handed Batsman', bowlingStyle: 'N/A', birthplace: 'Johannesburg', debutYear: 2013, avgRuns: 320, avgWickets: 0, baseStrikeRate: 134.4, baseEconomy: 0 },
  { id: 'marcus-stoinis', name: 'Marcus Stoinis', team: 'LSG', role: 'All-Rounder', age: 36, nationality: 'Australian', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Right-arm Medium', birthplace: 'Perth', debutYear: 2016, avgRuns: 290, avgWickets: 8, baseStrikeRate: 144.5, baseEconomy: 8.8 },
  { id: 'ayush-badoni', name: 'Ayush Badoni', team: 'LSG', role: 'Batsman', age: 26, nationality: 'Indian', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Right-arm Offbreak', birthplace: 'Delhi', debutYear: 2022, avgRuns: 195, avgWickets: 1, baseStrikeRate: 134.0, baseEconomy: 8.0 },
  { id: 'krunal-pandya', name: 'Krunal Pandya', team: 'LSG', role: 'All-Rounder', age: 35, nationality: 'Indian', battingStyle: 'Left-handed Batsman', bowlingStyle: 'Slow Left-arm Orthodox', birthplace: 'Ahmedabad', debutYear: 2016, avgRuns: 185, avgWickets: 11, baseStrikeRate: 131.5, baseEconomy: 7.3 },
  { id: 'ravi-bishnoi', name: 'Ravi Bishnoi', team: 'LSG', role: 'Bowler', age: 25, nationality: 'Indian', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Right-arm Legbreak', birthplace: 'Jodhpur', debutYear: 2020, avgRuns: 15, avgWickets: 15, baseStrikeRate: 100.0, baseEconomy: 7.6 },
  { id: 'mayank-yadav', name: 'Mayank Yadav', team: 'LSG', role: 'Bowler', age: 23, nationality: 'Indian', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Right-arm Fast', birthplace: 'Delhi', debutYear: 2024, avgRuns: 2, avgWickets: 13, baseStrikeRate: 80.0, baseEconomy: 7.0 },
  { id: 'naveen-ul-haq', name: 'Naveen-ul-Haq', team: 'LSG', role: 'Bowler', age: 26, nationality: 'Afghan', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Right-arm Medium-fast', birthplace: 'Kabul', debutYear: 2023, avgRuns: 8, avgWickets: 15, baseStrikeRate: 90.0, baseEconomy: 8.4 },
  { id: 'mohsin-khan', name: 'Mohsin Khan', team: 'LSG', role: 'Bowler', age: 27, nationality: 'Indian', battingStyle: 'Left-handed Batsman', bowlingStyle: 'Left-arm Medium-fast', birthplace: 'Sambhal', debutYear: 2022, avgRuns: 5, avgWickets: 12, baseStrikeRate: 85.0, baseEconomy: 8.2 },
  { id: 'yash-thakur', name: 'Yash Thakur', team: 'LSG', role: 'Bowler', age: 27, nationality: 'Indian', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Right-arm Medium-fast', birthplace: 'Kolkata', debutYear: 2023, avgRuns: 4, avgWickets: 12, baseStrikeRate: 80.0, baseEconomy: 9.0 },

  // --- PUNJAB KINGS ---
  { id: 'sam-curran', name: 'Sam Curran', team: 'PBKS', role: 'All-Rounder', age: 27, nationality: 'English', battingStyle: 'Left-handed Batsman', bowlingStyle: 'Left-arm Medium-fast', birthplace: 'Northampton', debutYear: 2019, avgRuns: 245, avgWickets: 14, baseStrikeRate: 137.0, baseEconomy: 8.8 },
  { id: 'liam-livingstone', name: 'Liam Livingstone', team: 'PBKS', role: 'All-Rounder', age: 32, nationality: 'English', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Right-arm Legbreak', birthplace: 'Barrow', debutYear: 2019, avgRuns: 275, avgWickets: 6, baseStrikeRate: 162.0, baseEconomy: 8.3 },
  { id: 'jonny-bairstow', name: 'Jonny Bairstow', team: 'PBKS', role: 'Wicketkeeper', age: 36, nationality: 'English', battingStyle: 'Right-handed Batsman', bowlingStyle: 'N/A', birthplace: 'Bradford', debutYear: 2019, avgRuns: 285, avgWickets: 0, baseStrikeRate: 141.0, baseEconomy: 0 },
  { id: 'shashank-singh', name: 'Shashank Singh', team: 'PBKS', role: 'Batsman', age: 34, nationality: 'Indian', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Right-arm Offbreak', birthplace: 'Bhilai', debutYear: 2022, avgRuns: 315, avgWickets: 0, baseStrikeRate: 166.0, baseEconomy: 0 },
  { id: 'ashutosh-sharma', name: 'Ashutosh Sharma', team: 'PBKS', role: 'Batsman', age: 27, nationality: 'Indian', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Right-arm Offbreak', birthplace: 'Ratlam', debutYear: 2024, avgRuns: 185, avgWickets: 0, baseStrikeRate: 173.0, baseEconomy: 0 },
  { id: 'jitesh-sharma', name: 'Jitesh Sharma', team: 'PBKS', role: 'Wicketkeeper', age: 32, nationality: 'Indian', battingStyle: 'Right-handed Batsman', bowlingStyle: 'N/A', birthplace: 'Amravati', debutYear: 2022, avgRuns: 215, avgWickets: 0, baseStrikeRate: 145.0, baseEconomy: 0 },
  { id: 'kagiso-rabada', name: 'Kagiso Rabada', team: 'PBKS', role: 'Bowler', age: 31, nationality: 'South African', battingStyle: 'Left-handed Batsman', bowlingStyle: 'Right-arm Fast', birthplace: 'Johannesburg', debutYear: 2017, avgRuns: 18, avgWickets: 18, baseStrikeRate: 110.0, baseEconomy: 8.0 },
  { id: 'arshdeep-singh', name: 'Arshdeep Singh', team: 'PBKS', role: 'Bowler', age: 27, nationality: 'Indian', battingStyle: 'Left-handed Batsman', bowlingStyle: 'Left-arm Medium-fast', birthplace: 'Guna, MP', debutYear: 2019, avgRuns: 9, avgWickets: 19, baseStrikeRate: 90.0, baseEconomy: 8.3 },
  { id: 'harshal-patel-pbks', name: 'Harshal Patel', team: 'PBKS', role: 'Bowler', age: 35, nationality: 'Indian', battingStyle: 'Right-handed Batsman', bowlingStyle: 'Right-arm Medium-fast', birthplace: 'Sanand', debutYear: 2012, avgRuns: 55, avgWickets: 20, baseStrikeRate: 125.0, baseEconomy: 8.4 },
  { id: 'harpreet-brar', name: 'Harpreet Brar', team: 'PBKS', role: 'All-Rounder', age: 30, nationality: 'Indian', battingStyle: 'Left-handed Batsman', bowlingStyle: 'Slow Left-arm Orthodox', birthplace: 'Moga', debutYear: 2019, avgRuns: 75, avgWickets: 10, baseStrikeRate: 131.0, baseEconomy: 7.2 }
];

// Combine base players with dynamic extended squad definitions
export const PLAYERS: Player[] = [
  ...BASE_PLAYERS,
  ...EXTENDED_SEEDS.map((seed): Player => {
    // Generate matches played since debut year (cap between 10 and 160)
    const seasonsCount = Math.max(1, 2026 - seed.debutYear);
    const simulatedMatches = Math.min(180, Math.max(10, seasonsCount * 14 - Math.round(Math.random() * 8)));
    
    // Overall career counts based on typical averages mapping
    const overallRuns = seed.role === 'Bowler' ? Math.round(simulatedMatches * 1.5) : Math.round(simulatedMatches * (seed.avgRuns / 14));
    const overallWickets = (seed.role === 'Batsman' || seed.role === 'Wicketkeeper') 
      ? 0 
      : Math.round(simulatedMatches * (seed.avgWickets / 14));

    const overallStrikeRate = seed.baseStrikeRate;
    const overallEconomy = seed.baseEconomy;
    const overallAverage = (seed.role === 'Bowler')
      ? (overallWickets > 0 ? parseFloat((overallRuns / overallWickets).toFixed(2)) : 0)
      : parseFloat((overallRuns / (simulatedMatches * 0.9)).toFixed(2));

    const highestScore = (seed.role === 'Bowler')
      ? 15 + Math.round(Math.random() * 20)
      : 75 + Math.round(Math.random() * 45);

    const bestBowlingStr = (seed.role === 'Batsman' || seed.role === 'Wicketkeeper')
      ? '0/0'
      : `${2 + Math.round(Math.random() * 3)}/${15 + Math.round(Math.random() * 15)}`;

    const catches = Math.round(simulatedMatches * 0.38);

    // Build realistic seasonStats array for historical seasons [2025, 2024, 2023] if playing
    const seasonStats = [2025, 2024, 2023]
      .filter((year) => year >= seed.debutYear)
      .map((year, yrIdx) => {
        // Vary parameters slightly per season to make graphs realistic
        const deltaFactor = 0.85 + Math.random() * 0.3;
        const matchesInSeason = 14;
        const sRuns = seed.role === 'Bowler' ? Math.round(seed.avgRuns * 0.1) : Math.round(seed.avgRuns * deltaFactor);
        const sWickets = (seed.role === 'Batsman' || seed.role === 'Wicketkeeper') ? 0 : Math.round(seed.avgWickets * deltaFactor);
        
        return {
          season: year,
          matches: matchesInSeason,
          runs: sRuns,
          wickets: sWickets,
          strikeRate: parseFloat((seed.baseStrikeRate * (0.95 + Math.random() * 0.1)).toFixed(1)),
          economy: parseFloat((seed.baseEconomy * (0.95 + Math.random() * 0.1)).toFixed(2)),
          average: (seed.role === 'Bowler')
            ? parseFloat((sRuns / (sWickets || 1)).toFixed(2))
            : parseFloat((sRuns / (matchesInSeason * 0.8)).toFixed(2)),
          highestScore: highestScore - Math.round(Math.random() * 20),
          bestBowling: bestBowlingStr,
          ballsFaced: Math.round(sRuns * (100 / seed.baseStrikeRate)),
          oversBowled: seed.role === 'Batsman' ? 0 : Math.round(matchesInSeason * 3.5)
        };
      });

    return {
      id: seed.id,
      name: seed.name,
      team: seed.team,
      role: seed.role,
      age: seed.age,
      nationality: seed.nationality,
      battingStyle: seed.battingStyle,
      bowlingStyle: seed.bowlingStyle,
      birthplace: seed.birthplace,
      debutYear: seed.debutYear,
      isTrending: Math.random() > 0.86,
      overall: {
        matches: simulatedMatches,
        runs: overallRuns,
        wickets: overallWickets,
        strikeRate: overallStrikeRate,
        economy: overallEconomy,
        average: overallAverage,
        highestScore: highestScore,
        bestBowling: bestBowlingStr,
        catches: catches
      },
      seasonStats: seasonStats
    };
  })
];


export interface HistoricalCapAward {
  season: number;
  orangeWinner: string;
  orangeTeam: string;
  orangeRuns: number;
  purpleWinner: string;
  purpleTeam: string;
  purpleWickets: number;
}

export const HISTORICAL_CAPS: HistoricalCapAward[] = [
  { season: 2025, orangeWinner: "Ruturaj Gaikwad", orangeTeam: 'CSK', orangeRuns: 680, purpleWinner: "Jasprit Bumrah", purpleTeam: 'MI', purpleWickets: 24 },
  { season: 2024, orangeWinner: "Virat Kohli", orangeTeam: 'RCB', orangeRuns: 741, purpleWinner: "Harshal Patel", purpleTeam: 'PBKS', purpleWickets: 24 },
  { season: 2023, orangeWinner: "Shubman Gill", orangeTeam: 'GT', orangeRuns: 890, purpleWinner: "Mohammed Shami", purpleTeam: 'GT', purpleWickets: 28 },
  { season: 2022, orangeWinner: "Jos Buttler", orangeTeam: 'RR', orangeRuns: 863, purpleWinner: "Yuzvendra Chahal", purpleTeam: 'RR', purpleWickets: 27 },
  { season: 2021, orangeWinner: "Ruturaj Gaikwad", orangeTeam: 'CSK', orangeRuns: 635, purpleWinner: "Harshal Patel", purpleTeam: 'RCB', purpleWickets: 32 },
  { season: 2020, orangeWinner: "KL Rahul", orangeTeam: 'PBKS', orangeRuns: 670, purpleWinner: "Kagiso Rabada", purpleTeam: 'DC', purpleWickets: 30 },
  { season: 2019, orangeWinner: "David Warner", orangeTeam: 'SRH', orangeRuns: 692, purpleWinner: "Imran Tahir", purpleTeam: 'CSK', purpleWickets: 26 },
  { season: 2018, orangeWinner: "Kane Williamson", orangeTeam: 'SRH', orangeRuns: 735, purpleWinner: "Andrew Tye", purpleTeam: 'PBKS', purpleWickets: 24 },
  { season: 2017, orangeWinner: "David Warner", orangeTeam: 'SRH', orangeRuns: 641, purpleWinner: "Bhuvneshwar Kumar", purpleTeam: 'SRH', purpleWickets: 26 },
  { season: 2016, orangeWinner: "Virat Kohli", orangeTeam: 'RCB', orangeRuns: 973, purpleWinner: "Bhuvneshwar Kumar", purpleTeam: 'SRH', purpleWickets: 23 },
  { season: 2015, orangeWinner: "David Warner", orangeTeam: 'SRH', orangeRuns: 562, purpleWinner: "Dwayne Bravo", purpleTeam: 'CSK', purpleWickets: 26 },
  { season: 2014, orangeWinner: "Robin Uthappa", orangeTeam: 'KKR', orangeRuns: 660, purpleWinner: "Mohit Sharma", purpleTeam: 'CSK', purpleWickets: 23 },
  { season: 2013, orangeWinner: "Michael Hussey", orangeTeam: 'CSK', orangeRuns: 733, purpleWinner: "Dwayne Bravo", purpleTeam: 'CSK', purpleWickets: 32 },
  { season: 2012, orangeWinner: "Chris Gayle", orangeTeam: 'RCB', orangeRuns: 733, purpleWinner: "Morne Morkel", purpleTeam: 'DC', purpleWickets: 25 },
  { season: 2011, orangeWinner: "Chris Gayle", orangeTeam: 'RCB', orangeRuns: 608, purpleWinner: "Lasith Malinga", purpleTeam: 'MI', purpleWickets: 28 },
  { season: 2010, orangeWinner: "Sachin Tendulkar", orangeTeam: 'MI', orangeRuns: 618, purpleWinner: "Pragyan Ojha", purpleTeam: 'DC', purpleWickets: 21 },
  { season: 2009, orangeWinner: "Matthew Hayden", orangeTeam: 'CSK', orangeRuns: 572, purpleWinner: "R. P. Singh", purpleTeam: 'DEC', purpleWickets: 23 },
  { season: 2008, orangeWinner: "Shaun Marsh", orangeTeam: 'PBKS', orangeRuns: 616, purpleWinner: "Sohail Tanvir", purpleTeam: 'RR', purpleWickets: 22 }
];

export const SCHEDULE: IPLMatch[] = [
  {
    id: 'm1',
    team1: 'CSK',
    team2: 'RCB',
    date: '2026-05-28',
    time: '19:30',
    venue: 'M. A. Chidambaram Stadium, Chennai',
    status: 'live',
    liveScore: {
      team1Runs: 172,
      team1Wickets: 4,
      team1Overs: 17.4,
      team2Runs: 165,
      team2Wickets: 6,
      team2Overs: 20.0,
      target: 166,
      currentInnings: 2,
      ballsRemaining: 14
    }
  },
  {
    id: 'm2',
    team1: 'MI',
    team2: 'KKR',
    date: '2026-05-29',
    time: '19:30',
    venue: 'Wankhede Stadium, Mumbai',
    status: 'upcoming'
  },
  {
    id: 'm3',
    team1: 'SRH',
    team2: 'GT',
    date: '2026-05-30',
    time: '19:30',
    venue: 'Rajiv Gandhi International Cricket Stadium, Hyderabad',
    status: 'upcoming'
  },
  {
    id: 'm4',
    team1: 'RR',
    team2: 'DC',
    date: '2026-05-27',
    time: '19:30',
    venue: 'Sawai Mansingh Stadium, Jaipur',
    status: 'completed',
    result: 'RR won by 15 runs (RR: 198/5, DC: 183/8)'
  },
  {
    id: 'm5',
    team1: 'LSG',
    team2: 'PBKS',
    date: '2026-05-26',
    time: '19:30',
    venue: 'Ekana Cricket Stadium, Lucknow',
    status: 'completed',
    result: 'LSG won by 6 wickets (PBKS: 154/7, LSG: 158/4)'
  }
];

// Simulated scenario points table for the current running season (e.g. 2026)
export interface PointsTableRow {
  rank: number;
  teamId: string;
  played: number;
  won: number;
  lost: number;
  points: number;
  nrr: string;
}

export const POINTS_TABLE: PointsTableRow[] = [
  { rank: 1, teamId: 'KKR', played: 11, won: 8, lost: 3, points: 16, nrr: '+1.428' },
  { rank: 2, teamId: 'RR', played: 11, won: 7, lost: 4, points: 14, nrr: '+0.540' },
  { rank: 3, teamId: 'SRH', played: 11, won: 7, lost: 4, points: 14, nrr: '+0.420' },
  { rank: 4, teamId: 'CSK', played: 11, won: 6, lost: 5, points: 12, nrr: '+0.315' },
  { rank: 5, teamId: 'LSG', played: 12, won: 6, lost: 6, points: 12, nrr: '-0.050' },
  { rank: 6, teamId: 'DC', played: 11, won: 5, lost: 6, points: 10, nrr: '-0.210' },
  { rank: 7, teamId: 'MI', played: 11, won: 5, lost: 6, points: 10, nrr: '-0.250' },
  { rank: 8, teamId: 'GT', played: 11, won: 5, lost: 6, points: 10, nrr: '-0.380' },
  { rank: 9, teamId: 'RCB', played: 11, won: 4, lost: 7, points: 8, nrr: '-0.118' },
  { rank: 10, teamId: 'PBKS', played: 12, won: 4, lost: 8, points: 8, nrr: '-0.450' }
];
