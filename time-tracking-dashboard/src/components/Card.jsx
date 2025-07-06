import EllipsisIcon from './EllipsisIcon.jsx';

const Card = ({ data, backgroundColor, icon, selectedTimeframe }) => {
  const { title, timeframes } = data;
  const timeframe = timeframes[selectedTimeframe];

  return (
    <article
      className={`${backgroundColor} overflow-hidden rounded-2xl pt-10 md:pt-12 relative flex flex-col justify-end`}
    >
      <img
        className="absolute -top-2 right-4"
        src={icon}
        alt={`Icon ${title}`}
      />
      <div className="bg-theme-neutral-navy-900 text-theme-neutral-navy-200 relative flex flex-col gap-2 md:gap-6 rounded-2xl px-6 py-7 transition-colors duration-300 hover:bg-[#34397b] cursor-pointer">
        <div className="flex justify-between gap-1 items-center">
          <h3 className="text-lg font-medium text-white">{title}</h3>
          <button className="cursor-pointer">
            <EllipsisIcon className="fill-[#BBC0FF] hover:fill-white transition-colors duration-300" />
          </button>
        </div>
        <div className="flex justify-between items-center gap-1 md:flex-col md:items-start md:gap-4">
          <p className="text-3xl font-light md:text-5xl text-white">
            {timeframe.current}hrs
          </p>
          <p className="whitespace-nowrap text-sm">
            Last Week - {timeframe.previous}hrs
          </p>
        </div>
      </div>
    </article>
  );
};

export default Card;
