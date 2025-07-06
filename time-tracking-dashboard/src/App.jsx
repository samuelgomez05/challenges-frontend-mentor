import { useState } from 'react';
import Header from './components/Header.jsx';
import Card from './components/Card.jsx';
import data from './data/data.json';

function App() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('daily');

  const styleCards = {
    Work: {
      backgroundColor: 'bg-theme-primary-orange-work',
      icon: '/images/icon-work.svg',
    },
    Play: {
      backgroundColor: 'bg-theme-primary-blue-play',
      icon: '/images/icon-play.svg',
    },
    Study: {
      backgroundColor: 'bg-theme-primary-pink-study',
      icon: '/images/icon-study.svg',
    },
    Exercise: {
      backgroundColor: 'bg-theme-primary-green-exercise',
      icon: '/images/icon-exercise.svg',
    },
    Social: {
      backgroundColor: 'bg-theme-primary-purple-social',
      icon: '/images/icon-social.svg',
    },
    'Self Care': {
      backgroundColor: 'bg-theme-primary-yellow-self-care',
      icon: '/images/icon-self-care.svg',
    },
  };

  return (
    <div className="bg-theme-neutral-navy-950">
      <main className="grid grid-cols-1 gap-6 px-6 py-20 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 max-w-6xl mx-auto">
        <Header
          selectedTimeframe={selectedTimeframe}
          setSelectedTimeframe={setSelectedTimeframe}
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:col-span-2 lg:col-span-3 lg:gap-8">
          {data.map((tracking, index) => {
            const { backgroundColor, icon } = styleCards[tracking.title];

            return (
              <Card
                key={index}
                data={tracking}
                backgroundColor={backgroundColor}
                icon={icon}
                selectedTimeframe={selectedTimeframe}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
