import Image from 'next/image'
import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Explication = () => {

  return (
    <div className=''>
      <h2 id="learn" className="md:pt-20 mb-1 text-3xl font-semibold tracking-tighter text-center lg:text-7xl md:text-6xl">
        {"¿Tomar notas es suficiente para "}
        <div className='relative text-background dark:text-foreground inline-block'>
          <Image
            src='/images/stroke1.svg'
            width={100}
            height={100}
            className='absolute object-cover scale-[1.35] w-96 h-auto left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 -z-10 dark:invert select-none'
            alt="strokeeffect" />
          <span className='[mix-blend-mode:difference]'>
            aprender
          </span>
        </div>
        ?
      </h2>
      <p className="pt-8 mx-auto text-xl text-center font-normal leading-relaxed text-muted-foreground dark:invert fs521 lg:w-2/3">
        Convierte tus apuntes y materiales de estudio en aliados inteligentes para el aprendizaje
      </p>
      <div className="py-12 max-w-4xl mx-auto fsac4 md:px-1 px-3">
        <Card>
          <CardHeader>
            <CardTitle className='flex gap-4 items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-6 dark:invert">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
              </svg>
              <h3 className="font-semibold text-lg ">
                ¿Que Solucionamos?
              </h3>
            </CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="pt-2 value-text text-md  fkrr1">
              Después de tu clase de biología, tomas notas rápidas, pero no sabes si realmente entendiste los conceptos clave ni qué preguntas hacerte para evaluarte.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className='flex gap-4 items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-6 dark:invert">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
              </svg>
              <h3 className="font-semibold text-lg ">
                Lo que nos hace únicos
              </h3>
            </CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="pt-2 value-text text-md  fkrr1">
              <li>🧠 Generación de preguntas con IA</li>
              <li>📊 Dashboard interactivo</li>
              <li>🎯 Rutas de aprendizaje personalizadas</li>
              <li>🌍 Accesibilidad y sostenibilidad</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className='flex gap-4 items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-6 dark:invert">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
              </svg>
              <h3 className="font-semibold text-lg ">
                ¿Cómo Funciona?
              </h3>
            </CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="pt-2 value-text text-md fkrr1">
              Subes tus notas, generamos preguntas personalizadas y analizamos tus respuestas para ofrecerte un informe detallado de tus áreas de mejora y progreso.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className='flex gap-4 items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-6 dark:invert">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
              </svg>

              <h3 className="font-semibold text-lg">
                Beneficios
              </h3>
            </CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="pt-2 value-text text-md fkrr1">
              Deja que la AI haga el trabajo pesado, aprende a tu ritmo y con tus propios recursos mientras ves tu mejoría tema a tema.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Explication

