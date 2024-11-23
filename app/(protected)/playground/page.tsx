import { auth } from '@/auth'

const PlaygroundPage = async () => {
  const session = await auth()
  // const username = session?.user?.name

  if (!session) {
    return <div className='bg-red-200'>Not authenticated</div>
  }

  return (
    <div className='h-full'>
      This is the Playground
    </div>
  )
}

export default PlaygroundPage 
