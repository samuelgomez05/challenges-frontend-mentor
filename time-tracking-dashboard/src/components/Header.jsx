const Header = ({ selectedTimeframe, setSelectedTimeframe }) => {
  return (
    <header className="bg-theme-neutral-navy-900 rounded-2xl flex flex-col">
      <div className="bg-theme-primary-purple flex items-center gap-4 rounded-2xl p-8 md:flex-col md:items-start md:gap-8 md:grow">
        <img
          className="size-16 border-theme-neutral-navy-200 rounded-full border-2 md:size-20"
          src="/images/image-jeremy.png"
          alt="Jeremy Robson"
        />
        <div className="text-theme-neutral-navy-200">
          <p className="text-sm font-medium">Report for</p>
          <h1 className="text-2xl font-light text-white md:text-4xl">
            Jeremy Robson
          </h1>
        </div>
      </div>
      <nav className="px-8 py-6">
        <ul className="text-theme-neutral-purple-500 flex justify-between text-lg md:flex-col md:gap-3">
          <li>
            <button
              className={`nav-button hover:text-white cursor-pointer transition-colors duration-300 ${
                selectedTimeframe === 'daily' ? 'active' : ''
              }`}
              onClick={() => setSelectedTimeframe('daily')}
            >
              Daily
            </button>
          </li>
          <li>
            <button
              className={`nav-button hover:text-white cursor-pointer transition-colors duration-300 ${
                selectedTimeframe === 'weekly' ? 'active' : ''
              }`}
              onClick={() => setSelectedTimeframe('weekly')}
            >
              Weekly
            </button>
          </li>
          <li>
            <button
              className={`nav-button hover:text-white cursor-pointer transition-colors duration-300 ${
                selectedTimeframe === 'monthly' ? 'active' : ''
              }`}
              onClick={() => setSelectedTimeframe('monthly')}
            >
              Monthly
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
