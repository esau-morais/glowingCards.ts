import { Cards } from './components/Cards'

const App = () => (
  <>
    <h1 className="my-8 text-center font-space-grotesk text-3xl font-bold text-white">
      Glowing Cards
    </h1>
    <Cards />
    <footer className="flex w-full items-center justify-center space-x-2 py-4 font-space-grotesk text-white">
      <p>Copyright © {new Date().getFullYear()}</p>
      <a
        className="underline decoration-wavy underline-offset-4"
        href="https://links.dev"
        target="_blank"
        rel="noreferrer"
      >
        Esaú Morais
      </a>
    </footer>
  </>
)

export default App
