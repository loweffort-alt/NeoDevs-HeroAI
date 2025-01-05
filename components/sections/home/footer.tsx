import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="pb-4 pt-10 max-w-5xl xl:max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
      <div className="flex flex-col-reverse justify-between pt-5 pb-4 border-t lg:flex-row border-foreground max-w-5xl xl:max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        <ul className="flex flex-col space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <Link
              href="/"
              className="text-md hover:opacity-50 duration-300 font-semibold"
            >
              Terms of Service
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="text-md hover:opacity-50 duration-300 font-semibold"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="text-md hover:opacity-50 duration-300 font-semibold"
            >
              Cookie Policy
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="text-md hover:opacity-50 duration-300 font-semibold"
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
    </footer>
  )
}

export default Footer

