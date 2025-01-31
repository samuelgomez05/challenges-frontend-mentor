import './App.css'
import Link from './components/Link'

function App() {
  return (
    <>
      <main className="min-h-dvh bg-grey-900 flex items-center justify-center p-6">
        <article className="bg-grey-800 max-w-96 w-full rounded-2xl p-6 text-center text-white md:p-10">
          <img className="size-20 mx-auto mb-6 aspect-square rounded-full" src="/assets/images/avatar-jessica.jpeg" alt="Jessica Randall" />
          <h1 className="mb-2 text-2xl font-semibold">Jessica Randall</h1>
          <p className="text-green mb-6 text-sm font-semibold">London, United Kingdom</p>
          <p className="mb-5 text-sm">"Front-end developer and avid reader."</p>
          <div className="flex flex-col gap-4">
            <Link text="GitHub" />
            <Link text="Frontend Mentor" />
            <Link text="LinkedIn" />
            <Link text="Twitter" />
            <Link text="Instagram" />
          </div>
        </article>
      </main>
    </>
  )
}

export default App
