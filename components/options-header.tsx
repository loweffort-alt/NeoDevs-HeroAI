import { Github, Twitter } from 'lucide-react'
import Link from 'next/link'

const OptionsHeader = () => {

  return (
    <>
      <div className="md:m-auto font-4 h-full flex flex-wrap items-center max-md:flex-col max-md:justify-evenly md:text-base text-1xl md:justify-center self-center">
        <Link href="/playground" className="mr-0 md:mr-11 cursor-pointer font-semibold tr04 max-md:text-3xl">
          Playground
        </Link>
        <Link href="/demo" className="mr-0 md:mr-11 cursor-pointer font-semibold tr04 max-md:text-3xl">
          Demo
        </Link>
        <Link href="#about" className="mr-0 md:mr-11 cursor-pointer font-semibold tr04 max-md:text-3xl">
          About us
        </Link>
        <Link
          href="https://twitter.com/"
          rel="noopener noreferrer"
          target="_blank"
          className='block md:hidden'
        >
          <Twitter size="30px" />
        </Link>
        <Link
          data-v-54e46119=""
          href="https://github.com/"
          rel="noopener noreferrer"
          target="_blank"
          className='block md:hidden'
        >
          <Github size="30px" />
        </Link>
      </div>
    </>
  )
}

export default OptionsHeader

