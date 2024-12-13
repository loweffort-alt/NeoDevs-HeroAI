"use client"
import Image from "next/image"
import "./home.css"

const DevTools = () => {
  return (
    <div className="flex flex-col gap-16 p-4 md:p-10 items-center justify-center mx-auto my-20">
      <h1 className="text-2xl font-semibold tracking-tighter text-center lg:text-5xl md:text-6xl">Tecnologías Usadas</h1>
      <div className="scroller">
        <div className="wea">
          <Image
            src="/brands/nextjs.svg"
            alt="Next.js"
            width={120}
            height={120}
            className="dark:invert"
          />
          <Image
            src="/brands/jwt.svg"
            alt="Next.js"
            width={150}
            height={150}
          />
          <Image
            src="/brands/postgresql.svg"
            alt="Next.js"
            width={90}
            height={90}
          />
          <Image
            src="/brands/fastapi.png"
            alt="Next.js"
            width={200}
            height={200}
          />
          <Image
            src="/brands/openai.svg"
            alt="Next.js"
            width={150}
            height={100}
            className="dark:invert"
          />
          <Image
            src="/brands/langchain.svg"
            alt="Next.js"
            width={180}
            height={150}
            className="dark:invert"
          />
          <Image
            src="/brands/vercel.svg"
            alt="Next.js"
            width={150}
            height={150}
            className="dark:invert"
          />
        </div>
        <div className="wea2">
          <Image
            src="/brands/nextjs.svg"
            alt="Next.js"
            width={120}
            height={120}
            className="dark:invert"
          />
          <Image
            src="/brands/jwt.svg"
            alt="Next.js"
            width={150}
            height={150}
          />
          <Image
            src="/brands/postgresql.svg"
            alt="Next.js"
            width={90}
            height={90}
          />
          <Image
            src="/brands/fastapi.png"
            alt="Next.js"
            width={200}
            height={200}
          />
          <Image
            src="/brands/openai.svg"
            alt="Next.js"
            width={150}
            height={100}
            className="dark:invert"
          />
          <Image
            src="/brands/langchain.svg"
            alt="Next.js"
            width={180}
            height={150}
            className="dark:invert"
          />
          <Image
            src="/brands/vercel.svg"
            alt="Next.js"
            width={150}
            height={150}
            className="dark:invert"
          />
        </div>
      </div>
    </div>
  )
}

export default DevTools

