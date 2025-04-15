import TeamCard from '@/components/ui/team-card'
import React from 'react'

const TeamSection = () => {
  return (
    <div className="block-appear flex flex-col gap-16 md:p-10 items-center justify-center my-10 max-w-5xl xl:max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
      <div>
        <h1 className="mb-8 text-3xl font-semibold tracking-tighter text-center lg:text-5xl md:text-6xl">
          Conoce a nuestro equipo
        </h1>
        <p className="text-xl text-center font-normal leading-relaxed text-muted-foreground">
          Somos un equipo de desarrolladores apasionados por la tecnología y la educación.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16'>
        <TeamCard
          name='Darío Alexander Farfán Navarro'
          role='Fullstack Developer'
          description='Fullstack Developer. Creé HeroAI basandome en el método de estudio Cornell y la técnica de repetición espaciada.'
          imgSrc='/images/pfp/alex.jpeg'
          alt='Alex'
          linkedin='https://www.linkedin.com/in/alexfarfan/'
          portfolio='https://alexfarfan.me/'
        />
        <TeamCard
          name='Rafael Castellanos Guzman'
          role='AI Engineer'
          description='AI Engineer y Backend Developer. Creé HeroAI para ayudar a estudiantes a aprender de manera más eficiente.'
          imgSrc='/images/pfp/rafael.jpg'
          alt='Rafael'
          linkedin='https://www.linkedin.com/in/rafael-castellanos-guzman/'
          portfolio='https://rafaelcg14.github.io/rafael-castellanos-portfolio/'
        />
      </div>
    </div>
  )
}

export default TeamSection
