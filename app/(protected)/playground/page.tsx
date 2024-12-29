import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import Playground from './playground'

export default async function PlaygroundPage() {
  const session = await auth()
  const username = session?.user?.name
  console.log("page.tsx session", session)

  if (!session) {
    redirect("/login")
  }

  return (
    <div className='h-full'>
      <Playground username={username || ""} />
    </div>
  )
}

