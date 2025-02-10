import ContainerCards from "./components/ContainerCards"

function App() {
  return (
    <>
      <main className="bg-very-light-gray flex min-h-screen items-center justify-center">
        <section className="mx-auto flex max-w-[75rem] flex-col gap-20 px-8 py-24">
          <div className="text-grayish-blue text-center">
            <h1 className="text-very-dark-blue mb-4 flex flex-col gap-1 text-2xl md:mb-6 md:gap-2 md:text-4xl">
              <span className="font-extralight">Reliable, efficient delivery</span>
              <span className="font-semibold">Powered by Technology</span>
            </h1>
            <p className="text-[.9375rem] md:mx-auto md:max-w-lg">Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>
          </div>
          <ContainerCards />
        </section>
      </main>
      <footer className="p-4 text-center text-xs">
        Challenge by <a className="text-[hsl(228,_45%,_44%)]" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a className="text-[hsl(228,_45%,_44%)]" href="https://github.com/samuelgomez05" target="_blank">Samuel Gomez</a>.
      </footer>
    </>
  )
}

export default App
