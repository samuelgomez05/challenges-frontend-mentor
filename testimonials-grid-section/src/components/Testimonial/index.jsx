import BgPatterQuotation from "/images/bg-pattern-quotation.svg"

const Testimonial = ({ name, summary, paragraph, image, styles }) => {
  const { backgroundColor, textColor } = styles

  return (
    <article className={`not-first:[--view:none] relative flex flex-col gap-5 rounded-xl p-8 font-medium shadow-lg ${backgroundColor} ${textColor}`}>
      <img src={BgPatterQuotation} alt="Pattern quotation" className="pointer-events-none absolute right-6 top-0 h-28 select-none object-contain [display:var(--view)] lg:right-24 lg:h-32" />
      <div className="relative z-10 flex items-center gap-5">
        <img className="size-9 aspect-square rounded-full" src={image} alt={name} />
        <div className="flex flex-col">
          <p className="text-sm font-semibold lg:text-base">{name}</p>
          <p className="text-xs opacity-50 lg:text-sm">Verified Graduate</p>
        </div>
      </div>
      <p className="relative z-10 text-xl font-semibold lg:text-2xl">{summary}</p>
      <p className="text-sm opacity-70 lg:text-base">{paragraph}</p>
    </article>
  )
}

export default Testimonial