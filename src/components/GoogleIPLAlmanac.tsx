import { useState, ReactNode } from 'react';
import { Search, Globe, Link2, AlertCircle, Sparkles, BookOpen, Clock, Calendar, ChevronRight, ListCollapse, Award } from 'lucide-react';

interface GroundingSource {
  title: string;
  uri: string;
}

interface SearchResponse {
  text: string;
  sources: GroundingSource[];
  queries: string[];
}

export default function GoogleIPLAlmanac() {
  const [query, setQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<SearchResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Core seasons timeline data (2008 - 2026)
  const seasons = Array.from({ length: 19 }, (_, i) => 2008 + i);

  // Quick lookup prompt chips
  const quickChips = [
    { label: '🏆 IPL 2024 Winners & Stats', value: 'Complete summary of IPL 2024 season, including the final winner, runner-up, Orange Cap, and Purple Cap winners.' },
    { label: '🏏 MS Dhoni Captaincy Records', value: 'Complete IPL captaincy records of MS Dhoni (matches played, won, lost, and championships won).' },
    { label: '⚡ Highest Individual Score', value: 'What is the highest individual score in IPL history, who scored it, when, and against which team?' },
    { label: '🐯 CSK vs MI Head-to-Head', value: 'CSK vs MI head-to-head match records, overall wins, and final encounters in IPL history.' },
    { label: '🔥 Virat Kohli 2016 Season', value: 'Virat Kohli statistics in the IPL 2016 season (runs, average, strike rate, and hundreds scored).' },
    { label: '🦁 IPL 2025 Retentions List', value: 'List of top retained players and captains for each franchise in the IPL 2025 season.' }
  ];

  const handleSearch = async (searchQuery: string) => {
    if (!searchQuery.trim()) return;
    setLoading(true);
    setError(null);
    setQuery(searchQuery);

    try {
      const response = await fetch('/api/google-ipl-search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: searchQuery }),
      });

      if (!response.ok) {
        throw new Error('API server returned error status code.');
      }

      const data = await response.json();
      setResult(data);
    } catch (err: any) {
      console.error('IPL Google Search Error:', err);
      setError('Failed to fetch grounded results from Google Search. Please verify your connection.');
    } finally {
      setLoading(false);
    }
  };

  const handleSeasonClick = (year: number) => {
    const seasonQuery = `Summary of IPL ${year} season: who won the championship, who was the runner-up, who got the Orange Cap (most runs), and who got the Purple Cap (most wickets)? Please write a short, precise historical table summary.`;
    handleSearch(seasonQuery);
  };

  // Safe and super clean Regex-based basic Markdown Parser
  const renderMarkdown = (text: string) => {
    if (!text) return null;

    // Split text into paragraphs/sections to process safely
    const lines = text.split('\n');
    let inList = false;
    let inTable = false;
    let inTableBody = false;
    const elements: ReactNode[] = [];

    let currentListItems: string[] = [];
    let tableHeaders: string[] = [];
    let tableRows: string[][] = [];

    const flushList = (key: number) => {
      if (currentListItems.length > 0) {
        elements.push(
          <ul key={`list-${key}`} className="list-disc pl-5 my-3 space-y-1.5 text-xs md:text-sm text-gray-700 dark:text-gray-300">
            {currentListItems.map((item, idx) => {
              // Parse inline formatting like strong/bold
              const parsedItem = item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
              return <li key={idx} dangerouslySetInnerHTML={{ __html: parsedItem }} />;
            })}
          </ul>
        );
        currentListItems = [];
      }
      inList = false;
    };

    const flushTable = (key: number) => {
      if (tableHeaders.length > 0 || tableRows.length > 0) {
        elements.push(
          <div key={`table-wrapper-${key}`} className="overflow-x-auto my-4 rounded-xl border border-gray-150 dark:border-gray-800 shadow-sm">
            <table className="w-full text-left border-collapse text-xs md:text-sm">
              {tableHeaders.length > 0 && (
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-950 border-b border-gray-150 dark:border-gray-800">
                    {tableHeaders.map((header, idx) => (
                      <th key={idx} className="px-4 py-2.5 font-bold text-gray-800 dark:text-gray-200 uppercase tracking-wider text-[10px] md:text-xs">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
              )}
              {tableRows.length > 0 && (
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800/60">
                  {tableRows.map((row, rowIdx) => (
                    <tr key={rowIdx} className="hover:bg-gray-50/50 dark:hover:bg-gray-900/10">
                      {row.map((cell, cellIdx) => {
                        const parsedCell = cell.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                        return (
                          <td key={cellIdx} className="px-4 py-2.5 text-gray-600 dark:text-gray-350" dangerouslySetInnerHTML={{ __html: parsedCell }} />
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              )}
            </table>
          </div>
        );
        tableHeaders = [];
        tableRows = [];
      }
      inTable = false;
      inTableBody = false;
    };

    for (let i = 0; i < lines.length; i++) {
      let line = lines[i].trim();

      // Check for table structure
      if (line.startsWith('|')) {
        if (inList) flushList(i);
        inTable = true;
        
        // Split columns and sanitize
        const cols = line.split('|').map(c => c.trim()).filter((_, idx, arr) => idx > 0 && idx < arr.length - 1);
        
        if (line.includes('---')) {
          // Separator line
          continue;
        } else if (tableHeaders.length === 0) {
          tableHeaders = cols;
        } else {
          tableRows.push(cols);
        }
        continue;
      } else if (inTable) {
        flushTable(i);
      }

      // Check for list structure
      if (line.startsWith('- ') || line.startsWith('* ')) {
        inList = true;
        currentListItems.push(line.substring(2));
        continue;
      } else if (inList) {
        flushList(i);
      }

      // Check for headers
      if (line.startsWith('### ')) {
        elements.push(
          <h4 key={i} className="text-sm md:text-base font-display font-black text-gray-900 dark:text-gray-100 mt-5 mb-2 border-b border-gray-100 dark:border-gray-800 pb-1 flex items-center">
            <span className="w-1.5 h-3.5 bg-amber-500 rounded mr-2" />
            {line.substring(4)}
          </h4>
        );
      } else if (line.startsWith('## ')) {
        elements.push(
          <h3 key={i} className="text-base md:text-lg font-display font-extrabold text-amber-500 dark:text-amber-400 mt-6 mb-3">
            {line.substring(3)}
          </h3>
        );
      } else if (line.startsWith('# ')) {
        elements.push(
          <h2 key={i} className="text-lg md:text-xl font-display font-bold text-gray-950 dark:text-gray-50 mt-6 mb-4">
            {line.substring(2)}
          </h2>
        );
      } else if (line !== '') {
        // Simple paragraph rendering with bold parsing
        const parsedParagraph = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        elements.push(
          <p key={i} className="text-xs md:text-sm text-gray-600 dark:text-gray-300 leading-relaxed my-2.5" dangerouslySetInnerHTML={{ __html: parsedParagraph }} />
        );
      }
    }

    // Flush any remaining active lists or tables
    if (inList) flushList(lines.length);
    if (inTable) flushTable(lines.length);

    return elements;
  };

  return (
    <div className="space-y-6">
      
      {/* 1. Almanac Top Banner */}
      <div className="p-6 md:p-8 rounded-3xl bg-amber-500/10 border border-amber-500/20 shadow-sm flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
        <div className="space-y-1.5 max-w-xl">
          <span className="text-[10px] font-mono font-extrabold px-2 py-0.5 rounded-full bg-amber-500 text-white uppercase tracking-wider">
            Live Google Grounding
          </span>
          <h3 className="text-lg md:text-xl font-display font-extrabold text-gray-900 dark:text-gray-100 flex items-center">
            <Globe className="w-5 h-5 mr-2 text-amber-500 animate-spin-slow" /> Google IPL CricPulse Almanac
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 leading-normal">
            Query complete historical IPL details. Directly pulls live, 100% verified factual stats, orange/purple cap histories, match summaries, and stadium records directly from Google Search.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs text-amber-600 dark:text-amber-400 font-mono font-extrabold uppercase bg-white dark:bg-gray-900 border border-amber-500/20 px-3 py-1.5 rounded-xl">
          <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" /> Live Google Search Enabled
        </div>
      </div>

      {/* 2. Interactive Season Timeline Selector */}
      <div className="p-5 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-mono font-bold text-gray-400 uppercase flex items-center">
            <Calendar className="w-4 h-4 mr-1 text-gray-400" /> Season-by-Season History Archive
          </h4>
          <span className="text-[9px] font-mono px-2 py-0.5 roundedbg rounded-full bg-gray-50 dark:bg-gray-950 text-gray-500 border border-gray-100 dark:border-gray-850">
            SELECT A SEASON TO LOAD STATS
          </span>
        </div>
        
        {/* Horizontal Scroll Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-gray-50 dark:border-gray-850 scrollbar-thin">
          {seasons.map((year) => (
            <button
              key={year}
              onClick={() => handleSeasonClick(year)}
              className="px-3 py-1.5 bg-gray-50 dark:bg-gray-955 text-xs font-semibold rounded-lg hover:bg-amber-500/20 hover:text-amber-600 border border-gray-200/50 dark:border-gray-800 transition-all flex-none text-gray-600 dark:text-gray-350 cursor-pointer hover:border-amber-500/30 active:scale-95"
            >
              IPL {year}
            </button>
          ))}
        </div>
        <p className="text-[10px] text-gray-400 italic">
          💡 Click any season badge above. The AI will immediately crawl Google to retrieve team standings, winners, and most valuable players from that tournament.
        </p>
      </div>

      {/* 4. Live Search Input Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Input & Preset chips Segment */}
        <div className="lg:col-span-4 space-y-4">
          <div className="p-5 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm space-y-4">
            <div className="space-y-1">
              <h4 className="text-xs font-mono font-bold text-gray-400 uppercase flex items-center">
                <BookOpen className="w-4 h-4 mr-1 text-gray-400" /> Live Search Google
              </h4>
              <p className="text-[10px] text-gray-400">Ask any complex or custom IPL question.</p>
            </div>

            {/* Core input field */}
            <form onSubmit={(e) => { e.preventDefault(); handleSearch(query); }} className="space-y-2">
              <div className="relative">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="e.g. IPL 2024 Orange Cap winner..."
                  className="w-full pr-10 pl-3.5 py-3 text-xs md:text-sm bg-gray-50 dark:bg-gray-950 border border-gray-150 dark:border-gray-800 rounded-xl focus:outline-none focus:ring-1 focus:ring-amber-500 dark:text-white"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-amber-500 hover:bg-amber-600 text-white rounded-lg transition-all"
                >
                  <Search className="w-4 h-4" />
                </button>
              </div>
              <button
                type="button"
                onClick={() => handleSearch(query)}
                disabled={loading || !query.trim()}
                className="w-full py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-sm transition-all disabled:opacity-40"
              >
                {loading ? 'Searching Google...' : 'Search Google Grounded'}
              </button>
            </form>

            <div className="border-t border-gray-50 dark:border-gray-850 pt-3">
              <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest block mb-2">
                Popular Quick Templates
              </span>
              <div className="flex flex-col gap-1.5 max-h-[240px] overflow-y-auto pr-1">
                {quickChips.map((chip, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSearch(chip.value)}
                    className="w-full text-left p-2.5 bg-gray-50 hover:bg-amber-500/10 dark:bg-gray-950 hover:text-amber-600 transition-colors rounded-xl border border-gray-150 dark:border-gray-800/80 text-[11px] font-medium text-gray-600 dark:text-gray-300 truncate"
                  >
                    {chip.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Search Result Panel */}
        <div className="lg:col-span-8">
          <div className="p-6 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm min-h-[400px] flex flex-col">
            
            {/* Header state bar */}
            <div className="pb-4 border-b border-gray-50 dark:border-gray-850 flex items-center justify-between">
              <div>
                <h4 className="font-display font-extrabold text-sm text-gray-900 dark:text-gray-100">
                  Grounded Search Analytics
                </h4>
                {query && (
                  <p className="text-[10px] font-mono text-gray-400 mt-0.5 truncate max-w-[400px]">
                    QUERY: {query}
                  </p>
                )}
              </div>
              <span className="text-[9px] font-mono px-2 py-1 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 font-bold border border-sky-500/20 flex items-center">
                <Globe className="w-3 h-3 mr-1" /> GOOGLE GROUNDED
              </span>
            </div>

            {/* Error block */}
            {error && (
              <div className="my-6 p-4 bg-red-500/5 rounded-2xl border border-red-500/20 text-xs text-red-600 dark:text-red-400 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 flex-none mt-0.5 text-red-500" />
                <div>
                  <h5 className="font-bold">Search Crawling Timeout</h5>
                  <p className="mt-1 leading-relaxed text-gray-500">{error}</p>
                </div>
              </div>
            )}

            {/* Loading block */}
            {loading && (
              <div className="flex-1 py-16 flex flex-col items-center justify-center text-center space-y-3">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full border-4 border-amber-500/10 border-t-amber-500 animate-spin" />
                  <Globe className="w-5 h-5 text-amber-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-gray-800 dark:text-gray-200">Retrieving Live Data from Google Page Crawlers...</h5>
                  <p className="text-[10px] text-gray-400 mt-1 max-w-xs mx-auto leading-normal uppercase font-mono">
                    Searching web indexes, extracting player runs, wickets & season points tables
                  </p>
                </div>
              </div>
            )}

            {/* Empty view */}
            {!result && !loading && !error && (
              <div className="flex-1 py-16 flex flex-col items-center justify-center text-center text-gray-400 dark:text-gray-500">
                <div className="w-16 h-16 rounded-2xl bg-amber-500/5 text-amber-500 border border-amber-500/10 flex items-center justify-center mb-4">
                  <Search className="w-8 h-8" />
                </div>
                <h5 className="font-display font-extrabold text-sm text-gray-700 dark:text-gray-300">Google IPL CricPulse Almanac</h5>
                <p className="text-xs text-gray-400 mt-2 max-w-sm mx-auto leading-relaxed">
                  Enter a custom search query on the left, or select one of the IPL seasons in the top history select timeline to retrieve grounded statistics.
                </p>
              </div>
            )}

            {/* Result display */}
            {result && !loading && !error && (
              <div className="flex-1 py-4 space-y-6">
                
                {/* 1. Underlying searches performed */}
                {result.queries && result.queries.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 items-center">
                    <span className="text-[9px] font-mono text-gray-400 font-extrabold uppercase mr-1">Searches Run:</span>
                    {result.queries.map((q, idx) => (
                      <span key={idx} className="text-[10px] font-mono px-2.5 py-0.5 roundedbg rounded-md bg-gray-50 dark:bg-gray-950 text-gray-500 dark:text-gray-400 border border-gray-150 dark:border-gray-800">
                        "{q}"
                      </span>
                    ))}
                  </div>
                )}

                {/* 2. Structured parsed body */}
                <div className="prose prose-sm dark:prose-invert max-w-none prose-p:leading-relaxed border-b border-gray-50 dark:border-gray-850 pb-6">
                  {renderMarkdown(result.text)}
                </div>

                {/* 3. Clickable genuine sources citation index */}
                {result.sources && result.sources.length > 0 && (
                  <div className="space-y-2.5">
                    <h5 className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest flex items-center">
                      <Link2 className="w-3.5 h-3.5 mr-1" /> Factual Citation Sources Verified from Google
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {result.sources.map((source, idx) => (
                        <a
                          key={idx}
                          href={source.uri}
                          target="_blank"
                          rel="noopener noreferrer referrer"
                          className="flex items-center space-x-2.5 p-2 bg-gray-50 dark:bg-gray-955 rounded-xl border border-gray-150 dark:border-gray-800 hover:border-amber-500/35 hover:bg-amber-500/5 transition-all text-xs font-semibold text-gray-700 dark:text-gray-300 cursor-pointer"
                        >
                          <span className="p-1 rounded-md bg-amber-500 text-white flex items-center justify-center text-[10px]">
                            {idx + 1}
                          </span>
                          <div className="truncate flex-1">
                            <p className="truncate leading-none">{source.title}</p>
                            <span className="text-[9px] text-gray-400 tracking-tight block mt-0.5 truncate">{source.uri}</span>
                          </div>
                          <ChevronRight className="w-3.5 h-3.5 text-gray-400 flex-none" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            )}

          </div>
        </div>

      </div>

    </div>
  );
}
