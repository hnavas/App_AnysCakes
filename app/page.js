'use client'

import GoogleButton from "react-google-button"
import { signIn } from "next-auth/react"

export default function Home() {
    return (
      <main className="bg-slate-900 w-screen h-screen flex items-center">
        <div className="text-center w-full">
          <GoogleButton onClick={() => signIn('google')} className="mx-auto mt-16"/>
        </div>
      </main>
    );
}
