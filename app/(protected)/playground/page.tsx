import { auth } from '@/auth'
import LogoutButton from '@/components/logout-button'
import { redirect } from 'next/navigation'

const PlaygroundPage = async () => {
  const session = await auth()

  if (!session) {
    redirect("/login")
    // return (
    //
    //   <div>NO PERMITIDO, NO TIENES SESION</div>
    // )
  }

  return (
    <div className='h-full'>
      This is the Playground
      <LogoutButton />
    </div>
  )
}

export default PlaygroundPage 
