import React from 'react'
import AuthFrom from '../../../components/AuthForm/AuthFrom'
import { auth } from '../../../auth'
async function page() {
  const session=await auth();
  console.log(session)
  return (
    <div  >
        <AuthFrom session={session}/>
    </div>
  )
}

export default page