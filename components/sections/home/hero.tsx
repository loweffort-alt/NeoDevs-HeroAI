import Link from "next/link"

const Hero = () => {
  return (
    <div className="max-w-5xl pt-44 pb-24 mx-auto" id="home">
      <h1 className="text-80 text-center font-4 lh-6 ld-04 font-bold mb-6">
        Aprende más en menos tiempo con HeroAI
      </h1>
      <h2 className="text-2xl font-4 font-semibold lh-6 ld-04 pb-11 text-gray-400 text-center">
        Un sistema potenciado con IA que convierte tus notas en preguntas, analiza tus respuestas y te guía en cada paso para dominar cualquier tema.
      </h2>
      <div className="ml-6 text-center">
        <Link
          className="inline-flex items-center py-3 font-semibold text-black transition duration-500 ease-in-out transform bg-white px-7 text-md md:mt-0 hover:text-black hover:bg-white focus:shadow-outline"
          href="/playground"
        >
          <div className="flex text-lg">
            <span className="justify-center">Prueba el sistema ahora</span>
          </div>
        </Link>
        <Link
          className="inline-flex items-center py-3 font-semibold tracking-tighter text-white transition duration-500 ease-in-out transform ml-11 bg-blue-800 px-14 text-md md:mt-0 focus:shadow-outline"
          href="#learn"
        >
          <div className="flex text-lg">
            <span className="justify-center">Descubre cómo funciona</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Hero 
