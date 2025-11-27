"use client"
import { NextResponse } from 'next/server'

 
// This function can be marked `async` if using `await` inside
export function proxy(request) {
const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
if(!isLoggedIn){
      return NextResponse.redirect(new URL('/', request.url))

}
}
 
// Alternatively, you can use a default export:
// export default function proxy(request) { ... }
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/addProducts":path*','/manageProduct":path*']
}