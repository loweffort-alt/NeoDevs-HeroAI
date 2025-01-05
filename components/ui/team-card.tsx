import React from 'react'
import Image from 'next/image'
import { BriefcaseIcon, Linkedin } from 'lucide-react'
import { Button } from './button'
import Link from 'next/link'

interface TeamCardProps {
  name: string
  role: string
  description: string
  imgSrc: string
  alt: string
  linkedin: string
  portfolio: string
}

const TeamCard = ({ name, role, description, imgSrc, alt, linkedin, portfolio }: TeamCardProps) => {
  return (
    <div className='flex gap-4 h-fit items-center max-md:flex-col'>
      <div className='w-32 h-32 md:w-40 md:h-40 aspect-square bg-primary rounded-full'>
        <div className='w-full h-full aspect-square scale-95 rounded-full overflow-hidden'>
          <Image src={imgSrc} width={100} height={100} alt={alt} className='w-full h-full object-fit' />
        </div>
      </div>
      <div className='flex flex-col'>
        <h2 className='font-bold'>{name}</h2>
        <p className='text-sm text-muted-foreground'>{role}</p>
        <div className='w-full h-[1px] bg-foreground my-4'>
        </div>
        <p className='text-sm mb-4 tracking-wide'>{description}</p>
        <div className='flex gap-4 *:p-2 *:bg-primary'>
          <Button variant='outline' size='icon'>
            <Link href={portfolio}>
              <BriefcaseIcon size={24} />
            </Link>
          </Button>
          <Button variant='outline' size='icon'>
            <Link href={linkedin}>
              <Linkedin size={24} />
            </Link>
          </Button>
        </div>
      </div >
    </div >
  )
}

export default TeamCard
