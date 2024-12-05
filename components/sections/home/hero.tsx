import Link from "next/link"
import { Cabin_Sketch } from "next/font/google"
import { Button } from "@/components/ui/button"
import Blackboard from "@/components/ui/blackboard"

const chalk = Cabin_Sketch({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-chalk"
})

const Hero = () => {
  return (
    <div className="max-w-5xl pb-24 mx-auto" id="home">
      <div className="blackboard mt-24 mx-2 py-14 md:py-20 px-6 relative">
        <h1 className={`text-5xl md:text-8xl text-center lh-6 ld-04 font-bold text-white mb-6 ${chalk.variable} font-chalk`}>
          Aprende más en menos tiempo con HeroAI
        </h1>
        <h2 className="text-lg md:text-2xl font-4 font-semibold lh-6 ld-04 pb-11 text-center text-slate-300">
          Un sistema potenciado con IA que convierte tus notas en preguntas, analiza tus respuestas y te guía en cada paso para dominar cualquier tema.
        </h2>
        <div className="text-center">
          <Button
            variant="secondary"
            className="inline-flex items-center py-7 px-3 md:p-7 font-semibold transition duration-500 ease-in-out text-md md:mt-0 bg-foreground text-background hover:text-foreground hover:bg-background"
          >
            <Link
              href="/playground"
            >
              Pruebalo ahora
            </Link>
          </Button>
        </div>
        <Blackboard />
      </div>
    </div>
  )
}

export default Hero 
