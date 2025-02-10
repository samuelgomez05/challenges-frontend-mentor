const Card = (({ title, description, image, borderColor}) => {
  return (
    <article className={`shadow-very-dark-blue/20 flex flex-col gap-8 self-center rounded-lg border-t-4 p-8 shadow-2xl ${borderColor}`}>
      <div>
        <h2 className="text-very-dark-blue mb-2 text-xl font-semibold">{title}</h2>
        <p className="text-grayish-blue text-sm">{description}</p>
      </div>
      <img className="size-16 aspect-square self-end" src={image} alt={`Icon ${title}`} />
    </article>
  )
})

export default Card