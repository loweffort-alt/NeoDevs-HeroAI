import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="pb-4" id='about'>
      <div className="max-w-5xl xl:max-w-5xl mx-auto divide-y divide-gray-900 px-4 sm:px-6 md:px-8">
        <ul className="text-sm font-medium sm:pb-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10">
          <li className="space-y-5 row-span-2">
            <h2 className="text-2xl tracking-wide text-white">Software</h2>
            <ul className="space-y-4 text-md">
              <li>
                <Link
                  className="hover:text-white transition-colors duration-200 text-xl"
                  href="/"
                >
                  Playground
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white transition-colors duration-200 text-xl"
                  href="/"
                >
                  Dashboard
                </Link>
              </li>{" "}
              <li>
                <Link
                  className="hover:text-white transition-colors duration-200 text-xl"
                  href="/"
                >
                  Landing Page
                </Link>
              </li>{" "}
            </ul>
          </li>
          <li className="space-y-5 row-span-2">
            <h2 className="text-2xl tracking-wide text-white">Herramientas</h2>
            <ul className="space-y-4">
              <li>
                <Link
                  className="hover:text-white transition-colors duration-200 text-xl"
                  href="/"
                >
                  NextJS
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white transition-colors duration-200 text-xl"
                  href="/"
                >
                  PostgreSQL
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white transition-colors duration-200 text-xl"
                  href="/"
                >
                  FastAPI
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white transition-colors duration-200 text-xl"
                  href="/"
                >
                  OpenAI
                </Link>
              </li>
            </ul>
          </li>
          <li className="space-y-5 row-span-2">
            <h2 className="text-2xl tracking-wide text-white">Hackaton</h2>
            <ul className="space-y-4">
              <li>
                <Link
                  className="hover:text-white transition-colors duration-200 text-xl"
                  href="/"
                >
                  IDAT
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white transition-colors duration-200 text-xl"
                  href="/"
                >
                  Nova Academy
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white transition-colors duration-200 text-xl"
                  href="/"
                >
                  Programa
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white transition-colors duration-200 text-xl"
                  href="/"
                >
                  Bases
                </Link>
              </li>
            </ul>
          </li>
          <li className="space-y-5">
            <h2 className="text-2xl tracking-wide text-white">Contacto</h2>
            <ul className="space-y-4">
              <li>
                <Link
                  className="hover:text-white transition-colors duration-200 text-xl"
                  href="/"
                >
                  Darío Farfán
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white transition-colors duration-200 text-xl"
                  href="/"
                >
                  Rafael Castellanos
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <div className="flex flex-col-reverse justify-between pt-5 pb-4 border-t lg:flex-row bg-top border-black">
          <ul className="flex flex-col space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <Link
                href="/"
                className="text-md dark:dark:text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-md dark:text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-md dark:text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Cookie Policy
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-md dark:text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Hackaton
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <Link
              href="/"
              className="text-md dark:text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold tracking-tight"
            >
              © 2024 NeoDevs Inc.
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer

