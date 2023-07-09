import { useRouter } from 'next/router'

export const AuthCheck = (props) => {
  const router = useRouter()
  ///const isJWTValid = useIsJWTValid() // you need to implement this. In this example, undefined means things are still loading, null means user is not signed in, anything truthy means they're signed in

  if (typeof window !== "undefined" && !localStorage.getItem("token")) router.push('/')

  //if(!user) return <Loading /> // a loading component that prevents the page from rendering
   
//   return props.children
}

// import React from 'react'
// import { NextResponse } from 'next/server'
// import { NextRequest } from 'next/server'
// // import { useRouter } from "next/router";

// const isAuthenticated = () => {
//  const router = useRouter();

//   return (
//     <div>

        
//     </div>
//   )
// }

// export default isAuthenticated