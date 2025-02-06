const Section = ({ title, children }) => {
  return (
    <section className="py-8 md:py-10">
      <h2 className="font-young-serif text-brown-800 mb-6 text-3xl">{title}</h2>
      {children}
    </section>
  )
}

export default Section