import { auth } from '@/auth'
// import LogoutButton from '@/components/logout-button'
import { redirect } from 'next/navigation'
import Playground from './playground'

// const PlaygroundPage = async () => {
//   const session = await auth()
//   const username = session?.user?.name
//
//   if (!session) {
//     redirect("/login")
//     // return (
//     //   <div>NO PERMITIDO, NO TIENES SESION</div>
//     // )
//   }
//
//   return (
//     <div className='h-full'>
//       <Playground username={username || ""} />
//     </div>
//   )
// }
//
// export default PlaygroundPage 

export default async function PlaygroundPage() {
  const session = await auth()
  const username = session?.user?.name

  if (!session) {
    redirect("/login")
    // return (
    //   <div>NO PERMITIDO, NO TIENES SESION</div>
    // )
  }

  return (
    <div className='h-full'>
      <Playground username={username || ""} />
    </div>
  )
}
