import { auth } from '@/auth'
import LogoutButton from '@/components/logout-button'

const PlaygroundPage = async () => {
  const session = await auth()

  if (!session) {
    return (
      <div>NO PERMITIDO, NO TIENES SESION</div>
    )
  }

  return (
    <div className='h-full'>
      This is the Playground
      <LogoutButton />
    </div>
  )
}

export default PlaygroundPage 
