import { Sun, Moon, Trophy } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

export default function Header({ activeTab, setActiveTab, darkMode, setDarkMode }: HeaderProps) {
  const tabs = [
    { id: 'home', label: 'Home' },
    { id: 'players', label: 'Players' },
    { id: 'compare', label: 'Compare Players' },
    { id: 'teams', label: 'Teams' },
    { id: 'stats', label: 'Leaderboards' },
    { id: 'google-almanac', label: 'Google Season Search' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b backdrop-blur-md transition-colors duration-200 border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-gray-950/90 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Brand representation */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-500 text-white shadow-md shadow-amber-500/20">
              <Trophy className="w-5 h-5" id="logo-icon" />
            </div>
            <div>
              <h1 className="font-display font-bold text-lg tracking-tight text-gray-900 dark:text-gray-100 flex items-center">
                IPL <span className="text-amber-500 ml-1.5 font-extrabold">CricPulse</span> ✨
              </h1>
              <p className="text-[10px] font-mono text-gray-500 dark:text-gray-400">SIMPLE PLAYER DIRECTORY</p>
            </div>
          </div>

          {/* Desktop Navigation Tabs */}
          <nav className="hidden md:flex space-x-1">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`nav-tab-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-150 cursor-pointer ${
                    isActive
                      ? 'bg-gray-100 dark:bg-gray-800 text-amber-600 dark:text-amber-400 shadow-sm'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900 hover:text-gray-900 dark:hover:text-gray-100'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </nav>

          {/* Action Tools */}
          <div className="flex items-center space-x-2">
            {/* Theme Toggle Button */}
            <button
              id="theme-toggle-btn"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg text-gray-500 hover:text-amber-500 dark:text-gray-400 dark:hover:text-amber-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark/Night Mode'}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Sub-Navigation Tab bar */}
      <div className="md:hidden flex overflow-x-auto border-t border-gray-100 dark:border-gray-900 px-2 py-1 scrollbar-none gap-1 bg-white dark:bg-gray-950">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-none text-xs font-semibold px-4 py-2 rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                isActive
                  ? 'bg-gray-100 dark:bg-gray-800 text-amber-600 dark:text-amber-400'
                  : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </header>
  );
}
